import { Contracts as OswapContracts } from './contracts/oswap-openswap-contract/index';
import { Contracts as BakeryContracts } from './contracts/oswap-bakery-swap-contract/index';
import { Contracts as TraderJoeContracts } from './contracts/oswap-trader-joe-contract/index';
import { Wallet } from '@ijstech/eth-wallet';
import { Contract } from '@ijstech/eth-contract';
import { IDexInfo, IDexType, IRouterSwapOutput } from './interfaces';

export abstract class RouterSwap {
    protected router: any;
    constructor(router: any) {
        this.router = router;
    }
    abstract PermittedProxyFunctions: string[];
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
    PermittedProxyFunctions = [
        "swapExactTokensForTokens", 
        "swapTokensForExactTokens", 
        "swapExactETHForTokens", 
        "swapTokensForExactETH", 
        "swapExactTokensForETH", 
        "swapETHForExactTokens"
    ];
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
    PermittedProxyFunctions: (keyof BakeryContracts.BakerySwapRouter)[] = [
        "swapExactTokensForTokens", 
        "swapTokensForExactTokens", 
        "swapExactBNBForTokens", 
        "swapTokensForExactBNB", 
        "swapExactTokensForBNB", 
        "swapBNBForExactTokens"
    ];
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
    PermittedProxyFunctions: (keyof TraderJoeContracts.JoeRouter02)[] = [
        "swapExactTokensForTokens", 
        "swapTokensForExactTokens", 
        "swapExactAVAXForTokens", 
        "swapTokensForExactAVAX", 
        "swapExactTokensForAVAX", 
        "swapAVAXForExactTokens"
    ];
    swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactAVAXForTokensSupportingFeeOnTransferTokens;
    swapExactETHForTokens = this.router.swapExactAVAXForTokens;
    swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForAVAXSupportingFeeOnTransferTokens;
    swapExactTokensForETH = this.router.swapExactTokensForAVAX;
    swapETHForExactTokens = this.router.swapAVAXForExactTokens;
    swapTokensForExactETH = this.router.swapTokensForExactAVAX;
}

export function getRouterSwap(dexInfo: IDexInfo): RouterSwap {
    const wallet = Wallet.getClientInstance();
    let routerSwap: RouterSwap;
    if (dexInfo.dexType === IDexType.BakerySwap) {
        const router = new BakeryContracts.BakerySwapRouter(wallet, dexInfo.routerAddress);
        routerSwap = new BakerySwapRouterSwap(router);
    }
    else if (dexInfo.dexType === IDexType.TraderJoe) {
        const router = new TraderJoeContracts.JoeRouter02(wallet, dexInfo.routerAddress);
        routerSwap = new TraderJoeRouterSwap(router);
    }
    else {
        const router = new OswapContracts.OSWAP_Router(wallet, dexInfo.routerAddress);
        routerSwap = new NormalRouterSwap(router);     
    }
    return routerSwap;
}

export function getSwapProxySelectors(dexInfo: IDexInfo): string[] {
    const wallet = Wallet.getClientInstance();
    let routerSwap: RouterSwap;
    let router: any;
    if (dexInfo.dexType === IDexType.BakerySwap) {
        router = new BakeryContracts.BakerySwapRouter(wallet, dexInfo.routerAddress);
        routerSwap = new BakerySwapRouterSwap(router);
    }
    else if (dexInfo.dexType === IDexType.TraderJoe) {
        const router = new TraderJoeContracts.JoeRouter02(wallet, dexInfo.routerAddress);
        routerSwap = new TraderJoeRouterSwap(router);
    }
    else {
        const router = new OswapContracts.OSWAP_Router(wallet, dexInfo.routerAddress);
        routerSwap = new NormalRouterSwap(router);     
    }
    let selectors = routerSwap.PermittedProxyFunctions
    .map(e=>e + "(" + router._abi.filter(f=>f.name==e)[0].inputs.map(f=>f.type).join(',') + ")")
    .map(e=>wallet.soliditySha3(e).substring(0,10))
    .map(e=>router.address.toLowerCase() + e.replace("0x", ""));
    return selectors;
}