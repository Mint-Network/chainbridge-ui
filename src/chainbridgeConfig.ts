//import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type ChainType = "Ethereum" | "Substrate";

export type BridgeConfig = {
  networkId?: number;
  chainId: number;
  name: string;
  rpcUrl: string;
  type: ChainType;
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  decimals: number;
};

export type EvmBridgeConfig = BridgeConfig & {
  bridgeAddress: string;
  erc20HandlerAddress: string;
  type: "Ethereum";
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type SubstrateBridgeConfig = BridgeConfig & {
  type: "Substrate";
  chainbridgePalletName: string;
  bridgeFeeFunctionName?: string; // If this value is provided, the chain value will be used will be used
  bridgeFeeValue?: number; // If the above value is not provided, this value will be used for the fee. No scaling should be applied.
  transferPalletName: string;
  transferFunctionName: string;
  typesFileName: string;
};

export type ChainbridgeConfig = {
  chains: Array<EvmBridgeConfig | SubstrateBridgeConfig>;
};

export const chainbridgeConfig: ChainbridgeConfig = {
// Local GETH <> Local Substrate
//chains: [
// {
//   chainId: 0,
//   networkId: 5,
//   name: "Ethereum - Local",
//   decimals: 18,
//   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
//   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
//   rpcUrl: "http://localhost:8545",
//   type: "Ethereum",
//   nativeTokenSymbol: "ETH",
//   tokens: [
//     {
//       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
//       name: "TOKEN",
//       symbol: "TOKEN",
//       imageUri: ETHIcon,
//       resourceId:
//         "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
//     },
//   ],
// },
// {
//   chainId: 1,
//   networkId: 2,
//   name: "Substrate - Local",
//   decimals: 18,
//   rpcUrl: "ws://localhost:9944",
//   type: "Substrate",
//   nativeTokenSymbol: "DOT",
//   chainbridgePalletName: "chainBridge",
//   bridgeFeeFunctionName: "tokenTransferFee",
//   transferPalletName: "example",
//   transferFunctionName: "transferNative",
//   typesFileName: "bridgeTypes.json",
//   tokens: [
//     {
//       address: "substrate-native",
//       name: "DOT",
//       symbol: "DOT",
//       resourceId: "substrate-native",
//     },
//   ],
// },
chains: [
     {
            chainId: 0,
            networkId: 4,
            decimals: 18,
            name: "Ethereum - Rinkeby",
            bridgeAddress: "0xE00A714D9819cb1577802493264e264a665D2030",
            erc20HandlerAddress: "0x53125EF48e1b798645553639561679D2700dA7b0",
            rpcUrl: "https://rinkeby-light.eth.linkpool.io/",
            type: "Ethereum",
            blockExplorer: "https://rinkeby.etherscan.io/tx",
            nativeTokenSymbol: "ETH",
            tokens: [
                {
                    address: "0xc778417e063141139fce010982780140aa0cd5ab",
                    name: "Wrapped ETH",
                    symbol: "WETH",
                    imageUri: WETHIcon,
                    resourceId:
                    "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
                    isNativeWrappedToken: true,
                },
            ],
        },
        {
            chainId: 1,
            networkId: 1280,
            decimals: 18,
            name: "TestNet - MintNetwork",
            bridgeAddress: "0x45b5C191526DeC7be43AbEC26B2F5b99f00742C2",
            erc20HandlerAddress: "0x3b55137B4d4167B945281dbB7Af87dD694FBD412",
            rpcUrl: "https://testnet.mintnetwork.org",
            type: "Ethereum",
            blockExplorer: "http://18.117.82.231:3000/tx",
            nativeTokenSymbol: "MNT",
            tokens: [
                {
                    address: "0x1067904A35E504cf4b6a14E1160C35Db10A8F59A",
                    name: "METH",
                    symbol: "METH",
                    imageUri: WETHIcon,
                    resourceId:
                    "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00",
                },
              ],
         },
      ],
};
