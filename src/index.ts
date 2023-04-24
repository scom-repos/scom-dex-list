import { BigNumber, TransactionOptions, TransactionReceipt } from '@ijstech/eth-contract';
import { application } from '@ijstech/components';
import { Contracts as OswapContracts } from './contracts/oswap-openswap-contract/index';
import { Contracts as BakeryContracts } from './contracts/oswap-bakery-swap-contract/index';
import { Contracts as TraderJoeContracts } from './contracts/oswap-trader-joe-contract/index';

import { Wallet } from '@ijstech/eth-wallet';
let moduleDir = application.currentModuleDir;

export interface ITradeFeeInfo {
    fee: string;
    base: string;
}

export enum IDexType {
    Normal = 'Normal',
    BakerySwap = 'BakerySwap',
    TraderJoe = 'TraderJoe',
    IFSwapV3 = 'IFSwapV3'
}

export interface IDexInfo {
    chainId: number;
    dexCode: string;
    dexName: string;
    dexType: IDexType;
    routerAddress: string;
    factoryAddress: string;
    tradeFee: ITradeFeeInfo;
    image: string;
}

export interface IExecuteSwapOptions {
    feeOnTransfer: boolean;
    exactType: 'exactIn' | 'exactOut';
    tokenInType: 'ETH' | 'ERC20';
    tokenOutType: 'ETH' | 'ERC20';
    params: any;
    txOptions?: TransactionOptions
}

export interface IRouterSwapOutput {
    (params: any, options?: TransactionOptions): Promise<TransactionReceipt>;
    txData: (params: any, options?: TransactionOptions) => Promise<string>;
}

function fullPath(path: string): string {
    if (path.indexOf('://') > 0)
        return path
    return `${moduleDir}/${path}`
}

export abstract class RouterSwap {
    protected router: any;
    constructor(router: any) {
        this.router = router;
    }
    abstract swapExactETHForTokensSupportingFeeOnTransferTokens: IRouterSwapOutput;
    abstract swapExactETHForTokens: IRouterSwapOutput;
    abstract swapExactTokensForETHSupportingFeeOnTransferTokens: IRouterSwapOutput;
    abstract swapExactTokensForETH: IRouterSwapOutput;
    abstract swapExactTokensForTokensSupportingFeeOnTransferTokens: IRouterSwapOutput;
    abstract swapExactTokensForTokens: IRouterSwapOutput;
    abstract swapETHForExactTokens: IRouterSwapOutput;
    abstract swapTokensForExactETH: IRouterSwapOutput;
    abstract swapTokensForExactTokens: IRouterSwapOutput;
}

export class NormalRouterSwap extends RouterSwap {
    protected router: any;
    constructor(router: any) {
        super(router);
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactETHForTokensSupportingFeeOnTransferTokens;
    swapExactETHForTokens = this.router.swapExactETHForTokens;
    swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForETHSupportingFeeOnTransferTokens;
    swapExactTokensForETH = this.router.swapExactTokensForETH;
    swapExactTokensForTokensSupportingFeeOnTransferTokens = this.router.swapExactTokensForTokensSupportingFeeOnTransferTokens;
    swapExactTokensForTokens = this.router.swapExactTokensForTokens;
    swapETHForExactTokens = this.router.swapETHForExactTokens;
    swapTokensForExactETH = this.router.swapTokensForExactETH;
    swapTokensForExactTokens = this.router.swapTokensForExactTokens;
}

export class BakerySwapRouterSwap extends NormalRouterSwap {
    protected router: BakeryContracts.BakerySwapRouter;
    constructor(router: BakeryContracts.BakerySwapRouter) {
        super(router);
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactBNBForTokensSupportingFeeOnTransferTokens;
    swapExactETHForTokens = this.router.swapExactBNBForTokens;
    swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForBNBSupportingFeeOnTransferTokens;
    swapExactTokensForETH = this.router.swapExactTokensForBNB;
    swapETHForExactTokens = this.router.swapBNBForExactTokens;
    swapTokensForExactETH = this.router.swapTokensForExactBNB;
}

export class TraderJoeRouterSwap extends NormalRouterSwap {
    protected router: TraderJoeContracts.JoeRouter02;
    constructor(router: TraderJoeContracts.JoeRouter02) {
        super(router);
    }
    swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactAVAXForTokensSupportingFeeOnTransferTokens;
    swapExactETHForTokens = this.router.swapExactAVAXForTokens;
    swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForAVAXSupportingFeeOnTransferTokens;
    swapExactTokensForETH = this.router.swapExactTokensForAVAX;
    swapETHForExactTokens = this.router.swapAVAXForExactTokens;
    swapTokensForExactETH = this.router.swapTokensForExactAVAX;
}

function getRouterSwap(dexInfo: IDexInfo): RouterSwap {
    const wallet = Wallet.getClientInstance();
    let routerSwap: RouterSwap;
    if (dexInfo.dexType === IDexType.Normal) {
        const router = new OswapContracts.OSWAP_Router(wallet, dexInfo.routerAddress);
        routerSwap = new NormalRouterSwap(router);
    }
    else if (dexInfo.dexType === IDexType.BakerySwap) {
        const router = new BakeryContracts.BakerySwapRouter(wallet, dexInfo.routerAddress);
        routerSwap = new BakerySwapRouterSwap(router);
    }
    else if (dexInfo.dexType === IDexType.TraderJoe) {
        const router = new TraderJoeContracts.JoeRouter02(wallet, dexInfo.routerAddress);
        routerSwap = new TraderJoeRouterSwap(router);
    }
    return routerSwap;
}

export async function getRouterSwapTxData(chainId: number, dexCode: string, options: IExecuteSwapOptions): Promise<string> {
    const dexInfo = getDexList().find(d => d.chainId === chainId && d.dexCode === dexCode);
    if (!dexInfo) return Promise.reject(new Error('Dex not found'));
    let txData: string;
    let routerSwap = getRouterSwap(dexInfo);

    if (options.exactType === 'exactIn') {
        if (options.tokenInType === 'ETH') {
            if (options.feeOnTransfer) {
                txData = await routerSwap.swapExactETHForTokensSupportingFeeOnTransferTokens.txData(options.params, options.txOptions);
            }
            else {
                txData = await routerSwap.swapExactETHForTokens.txData(options.params, options.txOptions);
            }
        }
        else {
            if (options.tokenOutType === 'ETH') {
                if (options.feeOnTransfer) {
                    txData = await routerSwap.swapExactTokensForETHSupportingFeeOnTransferTokens.txData(options.params, options.txOptions);
                }
                else {
                    txData = await routerSwap.swapExactTokensForETH.txData(options.params, options.txOptions);
                }
            }
            else {
                if (options.feeOnTransfer) {
                    txData = await routerSwap.swapExactTokensForTokensSupportingFeeOnTransferTokens.txData(options.params, options.txOptions);
                }
                else {
                    txData = await routerSwap.swapExactTokensForTokens.txData(options.params, options.txOptions);
                }
            }
        }
    }
    else {
        if (options.tokenInType === 'ETH') {
            txData = await routerSwap.swapETHForExactTokens.txData(options.params, options.txOptions);
        }
        else {
            if (options.tokenOutType === 'ETH') {
                txData = await routerSwap.swapTokensForExactETH.txData(options.params, options.txOptions);
            }
            else {
                txData = await routerSwap.swapTokensForExactTokens.txData(options.params, options.txOptions);
            }
        }
    }
    return txData;
}

export async function executeRouterSwap(chainId: number, dexCode: string, options: IExecuteSwapOptions): Promise<TransactionReceipt> {
    const dexInfo = getDexList().find(d => d.chainId === chainId && d.dexCode === dexCode);
    if (!dexInfo) return Promise.reject(new Error('Dex not found'));
    let receipt: TransactionReceipt;
    let routerSwap = getRouterSwap(dexInfo);

    if (options.exactType === 'exactIn') {
        if (options.tokenInType === 'ETH') {
            if (options.feeOnTransfer) {
                receipt = await routerSwap.swapExactETHForTokensSupportingFeeOnTransferTokens(options.params, options.txOptions);
            }
            else {
                receipt = await routerSwap.swapExactETHForTokens(options.params, options.txOptions);
            }
        }
        else {
            if (options.tokenOutType === 'ETH') {
                if (options.feeOnTransfer) {
                    receipt = await routerSwap.swapExactTokensForETHSupportingFeeOnTransferTokens(options.params, options.txOptions);
                }
                else {
                    receipt = await routerSwap.swapExactTokensForETH(options.params, options.txOptions);
                }
            }
            else {
                if (options.feeOnTransfer) {
                    receipt = await routerSwap.swapExactTokensForTokensSupportingFeeOnTransferTokens(options.params, options.txOptions);
                }
                else {
                    receipt = await routerSwap.swapExactTokensForTokens(options.params, options.txOptions);
                }
            }
        }
    }
    else {
        if (options.tokenInType === 'ETH') {
            receipt = await routerSwap.swapETHForExactTokens(options.params, options.txOptions);
        }
        else {
            if (options.tokenOutType === 'ETH') {
                receipt = await routerSwap.swapTokensForExactETH(options.params, options.txOptions);
            }
            else {
                receipt = await routerSwap.swapTokensForExactTokens(options.params, options.txOptions);
            }
        }
    }
    return receipt;
}

export default function getDexList(): IDexInfo[] {
    return [
        {
            chainId: 97,
            dexCode: 'OpenSwap',
            dexName: 'OpenSwap',
            dexType: IDexType.Normal,
            routerAddress: '0x8AEb7abBCfe0ED8baAfa3ddD2CdE39cDBb4d0106',
            factoryAddress: '0xDE5CC59535312A8ECCfdB74694C338b6231e490D',
            tradeFee: {
                fee: '200',
                base: '100000'
            },
            image: fullPath('/img/openswap.png')
        },
        {
            chainId: 43113,
            dexCode: 'OpenSwap',
            dexName: 'OpenSwap',
            dexType: IDexType.Normal,
            routerAddress: '0xc9C6f026E489e0A8895F67906ef1627f1E56860d',
            factoryAddress: '0x9560fD7C36527001D3Fea2510D405F77cB6AD739',
            tradeFee: {
                fee: '200',
                base: '100000'
            },
            image: fullPath('/img/openswap.png')
        }
    ]
}
