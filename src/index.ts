import { BigNumber, TransactionReceipt } from '@ijstech/eth-contract';
// import { application } from '@ijstech/components';
import { getRouterSwap, getSwapProxySelectors } from './routerSwap';
import { IDexInfo, IDexType, IDexDetail, IExecuteSwapOptions, IGetDexPairReservesOutput, ISwapEvent } from './interfaces';
import { getDexPair, parseSwapEvents } from './dexPair';
import { IRpcWallet, IWallet, RpcWallet } from '@ijstech/eth-wallet';

let moduleDir = '';
if (typeof window !== 'undefined') {
    const application = window['application'];
    moduleDir = application.currentModuleDir;
}

export { IDexInfo, IDexType, IExecuteSwapOptions, IGetDexPairReservesOutput, getSwapProxySelectors, IDexDetail, ISwapEvent, parseSwapEvents };

function fullPath(path: string): string {
    if (path.indexOf('://') > 0)
        return path
    return `${moduleDir}/${path}`
}

export function findDex(dexCode: string) {
    return getDexList().find(d => d.dexCode === dexCode);
}

export function findDexDetail(dexCode: string, chainId: number) {
    const dexInfo = findDex(dexCode);
    if (!dexInfo) return {dexInfo:undefined, dexDetail:undefined}
    const dexDetail: IDexDetail = dexInfo.details.find(d => d.chainId === chainId);
    return {dexInfo, dexDetail}
}

export async function getDexPairReserves(
    chainId: number, 
    dexCode: string, 
    pairAddress: string, 
    tokenInAddress: string, 
    tokenOutAddress: string
) {
    const dexInfo = findDex(dexCode);
    if (!dexInfo) return Promise.reject(new Error('Dex not found'));
    const wallet = RpcWallet.getRpcWallet(chainId);
    let dexPairObject = getDexPair(wallet, dexInfo.dexType, pairAddress);
    let dexPair = dexPairObject.dexPair;
    let reserves = await dexPair.getReserves();
    let reserveObj: IGetDexPairReservesOutput;
    if (new BigNumber(tokenInAddress.toLowerCase()).lt(tokenOutAddress.toLowerCase())) {
      reserveObj = {
        reserveA: reserves.reserve0,
        reserveB: reserves.reserve1
      };
    } else {
      reserveObj = {
        reserveA: reserves.reserve1,
        reserveB: reserves.reserve0
      };
    }
    return reserveObj;
}

export async function getWalletDexPairReserves(
    wallet: IWallet, 
    dexCode: string, 
    pairAddress: string, 
    tokenInAddress: string, 
    tokenOutAddress: string
) {
    const dexInfo = findDex(dexCode);
    if (!dexInfo) return Promise.reject(new Error('Dex not found'));
    let dexPairObject = getDexPair(wallet, dexInfo.dexType, pairAddress);
    let dexPair = dexPairObject.dexPair;
    let reserves = await dexPair.getReserves();
    let reserveObj: IGetDexPairReservesOutput;
    if (new BigNumber(tokenInAddress.toLowerCase()).lt(tokenOutAddress.toLowerCase())) {
      reserveObj = {
        reserveA: reserves.reserve0,
        reserveB: reserves.reserve1
      };
    } else {
      reserveObj = {
        reserveA: reserves.reserve1,
        reserveB: reserves.reserve0
      };
    }
    return reserveObj;
}

export async function getRouterSwapTxData(chainId: number, dexCode: string, options: IExecuteSwapOptions): Promise<string> {
    const {dexInfo, dexDetail} = findDexDetail(dexCode,chainId);
    if (!dexInfo || !dexDetail) return Promise.reject(new Error('Dex not found'));
    let txData: string;
    let routerSwap = getRouterSwap(dexInfo.dexType, dexDetail.routerAddress);

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
    const {dexInfo, dexDetail} = findDexDetail(dexCode,chainId);
    if (!dexInfo || !dexDetail) return Promise.reject(new Error('Dex not found'));
    let receipt: TransactionReceipt;
    let routerSwap = getRouterSwap(dexInfo.dexType, dexDetail.routerAddress);

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
            dexCode: 'UniswapV2',
            dexName: 'UniswapV2',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 1,
                    routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
                    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    }
                },
            ],
            image: fullPath('/img/uniswap-logo.svg')
        },        
        {
            dexCode: 'SushiSwapV2',
            dexName: 'SushiSwapV2',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 1,
                    routerAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
                    factoryAddress: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    }
                },
            ],
            image: fullPath('/img/sushiswap-logo.svg')
        }, 
        {
            dexCode: 'OpenSwap',
            dexName: 'OpenSwap',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0x50f5679F0CeF71287bD9C7e619960fF9C579661C',
                    factoryAddress: '0x0625468f8F56995Ff1C27EB6FD44ac90E96C5D22',
                    tradeFee: {
                        fee: '200',
                        base: '100000'
                    },
                },
                {
                    chainId: 97,
                    routerAddress: '0x8AEb7abBCfe0ED8baAfa3ddD2CdE39cDBb4d0106',
                    factoryAddress: '0xDE5CC59535312A8ECCfdB74694C338b6231e490D',
                    tradeFee: {
                        fee: '200',
                        base: '100000'
                    },
                },
                {
                    chainId: 43113,
                    routerAddress: '0xc9C6f026E489e0A8895F67906ef1627f1E56860d',
                    factoryAddress: '0x9560fD7C36527001D3Fea2510D405F77cB6AD739',
                    tradeFee: {
                        fee: '200',
                        base: '100000'
                    },
                }
                
            ],
            image: fullPath('/img/openswap.png')
        },
        {
            dexCode: 'PancakeSwapV2',
            dexName: 'PancakeSwapV2',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
                    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
                    tradeFee: {
                        fee: '25',
                        base: '10000'
                    },
                },
                {   
                    chainId: 324,
                    routerAddress: '0x5aEaF2883FBf30f3D62471154eDa3C0c1b05942d',
                    factoryAddress: '0xd03D8D566183F0086d8D09A84E1e30b58Dd5619d',
                    tradeFee: {
                        fee: '25',
                        base: '10000'
                    },
                },
            ],
            image: fullPath('/img/pancakeswap.svg')
        },     
        {
            dexCode: 'IFSwapV1',
            dexName: 'IFSwapV1',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0x8f2A0d8865D995364DC6843D51Cf6989001f989e',
                    factoryAddress: '0x918d7e714243F7d9d463C37e106235dCde294ffC',
                    tradeFee: {
                        fee: '6',
                        base: '10000'
                    },
                },
            ],
            image: fullPath('/img/IFSwapV1.png')
        },    
        {
            dexCode: 'IFSwapV3',
            dexName: 'IFSwapV3',
            dexType: IDexType.IFSwapV3,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0x56f6ca0a3364fa3ac9f0e8e9858b2966cdf39d03',
                    factoryAddress: '0x4233ad9b8b7c1ccf0818907908a7f0796a3df85f',
                    tradeFee: {
                        fee: '30',
                        base: '10000'
                    },
                },
            ],
            image: fullPath('/img/IFSwapV1.png')
        },        
        {
            dexCode: 'BakerySwap',
            dexName: 'BakerySwap',
            dexType: IDexType.BakerySwap,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
                    factoryAddress: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    },
                },
                {
                    chainId: 97,
                    routerAddress: '0xCDe540d7eAFE93aC5fE6233Bee57E1270D3E330F',
                    factoryAddress: '0x01bF7C66c6BD861915CdaaE475042d3c4BaE16A7',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    },
                }
            ],
            image: fullPath('/img/bakeryswap.svg')
        },               
        {
            dexCode: 'Biswap',
            dexName: 'Biswap',
            dexType: IDexType.Normal,
            details : [
                {   
                    chainId: 56,
                    routerAddress: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8',
                    factoryAddress: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE',
                    tradeFee: {
                        fee: '1',
                        base: '1000'
                    },
                },
            ],
            image: fullPath('/img/biswap.svg')            
        },
        {
            dexCode: 'TraderJoe',
            dexName: 'TraderJoe',
            dexType: IDexType.TraderJoe,
            details : [
                {   
                    chainId: 43114,
                    routerAddress: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
                    factoryAddress: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    },
                },
            ],
            image: fullPath('/img/traderjoe.svg')
        },        
        {
            dexCode: 'Pangolin',
            dexName: 'Pangolin',
            dexType: IDexType.TraderJoe,
            details : [
                {   
                    chainId: 43114,
                    routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
                    factoryAddress: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88',
                    tradeFee: {
                        fee: '3',
                        base: '1000'
                    },
                },
            ],
            image: fullPath('/img/pangolin.svg')
        }
    ]
}
