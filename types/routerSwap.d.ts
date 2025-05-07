import { Contracts as BakeryContracts } from '@scom/oswap-bakery-swap-contract';
import { Contracts as TraderJoeContracts } from '@scom/oswap-trader-joe-contract';
import { IDexType, IRouterSwapOutput } from './interfaces';
export declare abstract class RouterSwap {
    protected router: any;
    constructor(router: any);
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
export declare class NormalRouterSwap extends RouterSwap {
    protected router: any;
    constructor(router: any);
    PermittedProxyFunctions: string[];
    swapExactETHForTokensSupportingFeeOnTransferTokens: any;
    swapExactETHForTokens: any;
    swapExactTokensForETHSupportingFeeOnTransferTokens: any;
    swapExactTokensForETH: any;
    swapExactTokensForTokensSupportingFeeOnTransferTokens: any;
    swapExactTokensForTokens: any;
    swapETHForExactTokens: any;
    swapTokensForExactETH: any;
    swapTokensForExactTokens: any;
}
export declare class BakerySwapRouterSwap extends NormalRouterSwap {
    protected router: BakeryContracts.BakerySwapRouter;
    constructor(router: BakeryContracts.BakerySwapRouter);
    PermittedProxyFunctions: (keyof BakeryContracts.BakerySwapRouter)[];
    swapExactETHForTokensSupportingFeeOnTransferTokens: any;
    swapExactETHForTokens: any;
    swapExactTokensForETHSupportingFeeOnTransferTokens: any;
    swapExactTokensForETH: any;
    swapETHForExactTokens: any;
    swapTokensForExactETH: any;
}
export declare class TraderJoeRouterSwap extends NormalRouterSwap {
    protected router: TraderJoeContracts.JoeRouter02;
    constructor(router: TraderJoeContracts.JoeRouter02);
    PermittedProxyFunctions: (keyof TraderJoeContracts.JoeRouter02)[];
    swapExactETHForTokensSupportingFeeOnTransferTokens: any;
    swapExactETHForTokens: any;
    swapExactTokensForETHSupportingFeeOnTransferTokens: any;
    swapExactTokensForETH: any;
    swapETHForExactTokens: any;
    swapTokensForExactETH: any;
}
export declare function getRouterSwap(dexType: IDexType, routerAddress: string): RouterSwap;
export declare function getSwapProxySelectors(dexType: IDexType, chainId: number, routerAddress: string): Promise<string[]>;
