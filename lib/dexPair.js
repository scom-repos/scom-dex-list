"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSwapEvents = exports.getDexPair = exports.IFSwapV3Pair = exports.NormalDexPair = exports.DexPair = void 0;
const oswap_openswap_contract_1 = require("@scom/oswap-openswap-contract");
const oswap_impossible_swap_contract_1 = require("@scom/oswap-impossible-swap-contract");
const interfaces_1 = require("./interfaces");
class DexPair {
    constructor(pair) {
        this.pair = pair;
    }
}
exports.DexPair = DexPair;
class NormalDexPair extends DexPair {
    constructor(pair) {
        super(pair);
        this.getReserves = this.pair.getReserves;
    }
}
exports.NormalDexPair = NormalDexPair;
class IFSwapV3Pair extends DexPair {
    constructor(pair) {
        super(pair);
        this.getReserves = this.pair.getReserves;
    }
}
exports.IFSwapV3Pair = IFSwapV3Pair;
function getDexPair(wallet, dexType, pairAddress) {
    let dexPair;
    let pairContract;
    if (dexType === interfaces_1.IDexType.IFSwapV3) {
        pairContract = new oswap_impossible_swap_contract_1.Contracts.ImpossiblePair(wallet, pairAddress);
        dexPair = new IFSwapV3Pair(pairContract);
    }
    else {
        pairContract = new oswap_openswap_contract_1.Contracts.OSWAP_Pair(wallet, pairAddress);
        dexPair = new NormalDexPair(pairContract);
    }
    return {
        dexPair: dexPair,
        contract: pairContract
    };
}
exports.getDexPair = getDexPair;
function parseSwapEvents(wallet, receipt, pairAddresses) {
    let events = [];
    for (let pairAddress of pairAddresses) {
        let pair = new oswap_openswap_contract_1.Contracts.OSWAP_Pair(wallet, pairAddress);
        let event = pair.parseSwapEvent(receipt)[0];
        events.push(event);
    }
    return events;
}
exports.parseSwapEvents = parseSwapEvents;
