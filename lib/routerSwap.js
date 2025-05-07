"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwapProxySelectors = exports.getRouterSwap = exports.TraderJoeRouterSwap = exports.BakerySwapRouterSwap = exports.NormalRouterSwap = exports.RouterSwap = void 0;
const oswap_openswap_contract_1 = require("@scom/oswap-openswap-contract");
const oswap_bakery_swap_contract_1 = require("@scom/oswap-bakery-swap-contract");
const oswap_trader_joe_contract_1 = require("@scom/oswap-trader-joe-contract");
const eth_wallet_1 = require("@ijstech/eth-wallet");
const interfaces_1 = require("./interfaces");
class RouterSwap {
    constructor(router) {
        this.router = router;
    }
}
exports.RouterSwap = RouterSwap;
class NormalRouterSwap extends RouterSwap {
    constructor(router) {
        super(router);
        this.PermittedProxyFunctions = [
            "swapExactTokensForTokens",
            "swapTokensForExactTokens",
            "swapExactETHForTokens",
            "swapTokensForExactETH",
            "swapExactTokensForETH",
            "swapETHForExactTokens"
        ];
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactETHForTokensSupportingFeeOnTransferTokens;
        this.swapExactETHForTokens = this.router.swapExactETHForTokens;
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForETHSupportingFeeOnTransferTokens;
        this.swapExactTokensForETH = this.router.swapExactTokensForETH;
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = this.router.swapExactTokensForTokensSupportingFeeOnTransferTokens;
        this.swapExactTokensForTokens = this.router.swapExactTokensForTokens;
        this.swapETHForExactTokens = this.router.swapETHForExactTokens;
        this.swapTokensForExactETH = this.router.swapTokensForExactETH;
        this.swapTokensForExactTokens = this.router.swapTokensForExactTokens;
    }
}
exports.NormalRouterSwap = NormalRouterSwap;
class BakerySwapRouterSwap extends NormalRouterSwap {
    constructor(router) {
        super(router);
        this.PermittedProxyFunctions = [
            "swapExactTokensForTokens",
            "swapTokensForExactTokens",
            "swapExactBNBForTokens",
            "swapTokensForExactBNB",
            "swapExactTokensForBNB",
            "swapBNBForExactTokens"
        ];
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactBNBForTokensSupportingFeeOnTransferTokens;
        this.swapExactETHForTokens = this.router.swapExactBNBForTokens;
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForBNBSupportingFeeOnTransferTokens;
        this.swapExactTokensForETH = this.router.swapExactTokensForBNB;
        this.swapETHForExactTokens = this.router.swapBNBForExactTokens;
        this.swapTokensForExactETH = this.router.swapTokensForExactBNB;
    }
}
exports.BakerySwapRouterSwap = BakerySwapRouterSwap;
class TraderJoeRouterSwap extends NormalRouterSwap {
    constructor(router) {
        super(router);
        this.PermittedProxyFunctions = [
            "swapExactTokensForTokens",
            "swapTokensForExactTokens",
            "swapExactAVAXForTokens",
            "swapTokensForExactAVAX",
            "swapExactTokensForAVAX",
            "swapAVAXForExactTokens"
        ];
        this.swapExactETHForTokensSupportingFeeOnTransferTokens = this.router.swapExactAVAXForTokensSupportingFeeOnTransferTokens;
        this.swapExactETHForTokens = this.router.swapExactAVAXForTokens;
        this.swapExactTokensForETHSupportingFeeOnTransferTokens = this.router.swapExactTokensForAVAXSupportingFeeOnTransferTokens;
        this.swapExactTokensForETH = this.router.swapExactTokensForAVAX;
        this.swapETHForExactTokens = this.router.swapAVAXForExactTokens;
        this.swapTokensForExactETH = this.router.swapTokensForExactAVAX;
    }
}
exports.TraderJoeRouterSwap = TraderJoeRouterSwap;
function getRouterSwap(dexType, routerAddress) {
    const wallet = eth_wallet_1.Wallet.getClientInstance();
    let routerSwap;
    if (dexType === interfaces_1.IDexType.BakerySwap) {
        const router = new oswap_bakery_swap_contract_1.Contracts.BakerySwapRouter(wallet, routerAddress);
        routerSwap = new BakerySwapRouterSwap(router);
    }
    else if (dexType === interfaces_1.IDexType.TraderJoe) {
        const router = new oswap_trader_joe_contract_1.Contracts.JoeRouter02(wallet, routerAddress);
        routerSwap = new TraderJoeRouterSwap(router);
    }
    else {
        const router = new oswap_openswap_contract_1.Contracts.OSWAP_Router(wallet, routerAddress);
        routerSwap = new NormalRouterSwap(router);
    }
    return routerSwap;
}
exports.getRouterSwap = getRouterSwap;
async function getSwapProxySelectors(dexType, chainId, routerAddress) {
    let routerSwap;
    let router;
    let wallet = eth_wallet_1.RpcWallet.getRpcWallet(chainId);
    if (dexType === interfaces_1.IDexType.BakerySwap) {
        router = new oswap_bakery_swap_contract_1.Contracts.BakerySwapRouter(wallet, routerAddress);
        routerSwap = new BakerySwapRouterSwap(router);
    }
    else if (dexType === interfaces_1.IDexType.TraderJoe) {
        router = new oswap_trader_joe_contract_1.Contracts.JoeRouter02(wallet, routerAddress);
        routerSwap = new TraderJoeRouterSwap(router);
    }
    else {
        router = new oswap_openswap_contract_1.Contracts.OSWAP_Router(wallet, routerAddress);
        routerSwap = new NormalRouterSwap(router);
    }
    let selectors = routerSwap.PermittedProxyFunctions
        .map(e => e + "(" + router._abi.filter(f => f.name == e)[0].inputs.map(f => f.type).join(',') + ")")
        .map(e => wallet.soliditySha3(e).substring(0, 10))
        .map(e => router.address.toLowerCase() + e.replace("0x", ""));
    return selectors;
}
exports.getSwapProxySelectors = getSwapProxySelectors;
