import { Contracts as OswapContracts } from '@scom/oswap-openswap-contract';
import { Contracts as IFSwapContracts } from '@scom/oswap-impossible-swap-contract';
import { BigNumber, IRpcWallet, TransactionReceipt } from '@ijstech/eth-wallet';
import { IDexPairReserves, IDexType, ISwapEvent } from './interfaces';
import { TransactionOptions } from '@ijstech/eth-contract';
export declare abstract class DexPair {
    protected pair: any;
    constructor(pair: any);
    abstract getReserves: (options?: TransactionOptions) => Promise<IDexPairReserves>;
}
export declare class NormalDexPair extends DexPair {
    protected pair: OswapContracts.OSWAP_Pair;
    constructor(pair: OswapContracts.OSWAP_Pair);
    getReserves: (options?: TransactionOptions) => Promise<{
        reserve0: BigNumber;
        reserve1: BigNumber;
        blockTimestampLast: BigNumber;
    }>;
}
export declare class IFSwapV3Pair extends DexPair {
    protected pair: IFSwapContracts.ImpossiblePair;
    constructor(pair: IFSwapContracts.ImpossiblePair);
    getReserves: (options?: TransactionOptions) => Promise<{
        reserve0: BigNumber;
        reserve1: BigNumber;
    }>;
}
export interface IGetDexPairOutput {
    dexPair: DexPair;
    contract: any;
}
export declare function getDexPair(wallet: IRpcWallet, dexType: IDexType, pairAddress: string): IGetDexPairOutput;
export declare function parseSwapEvents(wallet: IRpcWallet, receipt: TransactionReceipt, pairAddresses: string[]): ISwapEvent[];
