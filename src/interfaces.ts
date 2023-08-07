import { BigNumber, TransactionOptions, TransactionReceipt } from '@ijstech/eth-contract';
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

export interface IRouterSwapOutput {
    (params: any, options?: TransactionOptions): Promise<TransactionReceipt>;
    txData: (params: any, options?: TransactionOptions) => Promise<string>;
}

export interface IExecuteSwapOptions {
    feeOnTransfer: boolean;
    exactType: 'exactIn' | 'exactOut';
    tokenInType: 'ETH' | 'ERC20';
    tokenOutType: 'ETH' | 'ERC20';
    params: any;
    txOptions?: TransactionOptions
}

export interface IDexPairReserves {
    reserve0: BigNumber;
    reserve1: BigNumber;
    blockTimestampLast?: BigNumber;
}

export interface IGetDexPairReservesOutput {
    reserveA: BigNumber;
    reserveB: BigNumber;
}