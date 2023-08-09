import { Contracts as OswapContracts } from '@scom/oswap-openswap-contract';
import { Contracts as IFSwapContracts } from '@scom/oswap-impossible-swap-contract';
import { BigNumber, IRpcWallet, Wallet } from '@ijstech/eth-wallet';
import { IDexInfo, IDexPairReserves, IDexType } from './interfaces';
import { TransactionOptions } from '@ijstech/eth-contract';

export abstract class DexPair {
    protected pair: any;
    constructor(pair: any) {
        this.pair = pair;
    }
    abstract getReserves: (options?: TransactionOptions) => Promise<IDexPairReserves>;
}

export class NormalDexPair extends DexPair {
    protected pair: OswapContracts.OSWAP_Pair;
    constructor(pair: OswapContracts.OSWAP_Pair) {
        super(pair);
    }
    getReserves = this.pair.getReserves;
}

export class IFSwapV3Pair extends DexPair {
    protected pair: IFSwapContracts.ImpossiblePair;
    constructor(pair: IFSwapContracts.ImpossiblePair) {
        super(pair);
    }
    getReserves = this.pair.getReserves;
}

export function getDexPair(wallet: IRpcWallet, dexType: IDexType, pairAddress: string): DexPair {
    let dexPair: DexPair;
    if (dexType === IDexType.IFSwapV3) {
        const router = new IFSwapContracts.ImpossiblePair(wallet, pairAddress);
        dexPair = new IFSwapV3Pair(router);
    }
    else {
        const router = new OswapContracts.OSWAP_Pair(wallet, pairAddress);
        dexPair = new NormalDexPair(router);
    }
    return dexPair;
}