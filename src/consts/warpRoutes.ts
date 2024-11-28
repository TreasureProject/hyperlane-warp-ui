import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'arbitrumsepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 18,
      symbol: 'MAGIC',
      name: 'MAGIC',
      addressOrDenom: '0x5a6f771Af6C395a9C1765AE1cF26aec4FC178683',
      collateralAddressOrDenom: '0xe2faac0d4fd98a9b2275e5acd90d81fa0b6a4436',
      connections: [
        {
          token: 'ethereum|treasuretopaz|0xae8D8A869bd5C6d9b8DD2EBEe2891b0313243211',
        },
      ],
    },
    {
      chainName: 'treasuretopaz',
      standard: TokenStandard.EvmHypNative,
      decimals: 18,
      symbol: 'MAGIC',
      name: 'MAGIC',
      addressOrDenom: '0xae8D8A869bd5C6d9b8DD2EBEe2891b0313243211',
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|0x5a6f771Af6C395a9C1765AE1cF26aec4FC178683',
        },
      ],
    },
  ],
  options: {},
};
