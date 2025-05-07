import { TransactionReceipt } from '@ijstech/eth-contract';
import { getSwapProxySelectors } from './routerSwap';
import { IDexInfo, IDexType, IDexDetail, IExecuteSwapOptions, IGetDexPairReservesOutput, ISwapEvent } from './interfaces';
import { parseSwapEvents } from './dexPair';
export { IDexInfo, IDexType, IExecuteSwapOptions, IGetDexPairReservesOutput, getSwapProxySelectors, IDexDetail, ISwapEvent, parseSwapEvents };
export declare function findDex(dexCode: string): IDexInfo;
export declare function findDexDetail(dexCode: string, chainId: number): {
    dexInfo: IDexInfo;
    dexDetail: IDexDetail;
};
export declare function getDexPairReserves(chainId: number, dexCode: string, pairAddress: string, tokenInAddress: string, tokenOutAddress: string): Promise<IGetDexPairReservesOutput>;
export declare function getRouterSwapTxData(chainId: number, dexCode: string, options: IExecuteSwapOptions): Promise<string>;
export declare function executeRouterSwap(chainId: number, dexCode: string, options: IExecuteSwapOptions): Promise<TransactionReceipt>;
export default function getDexList(): IDexInfo[];
