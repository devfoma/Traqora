/**
 * Wallet utility functions for Stellar network.
 *
 * NOTE: The old Freighter-only connection and signing code has been replaced
 * by the stellar-wallet-connect package (see lib/stellar-wallet-connect/).
 * Use `useWallet()` and `useWalletStore` from that package for all wallet
 * connection, disconnection, and event handling.
 *
 * This file now only exports URL helpers that are still used across the app.
 */

// NEW: re-export the signTransaction helper from the wallet-connect package
// so existing code that imports from lib/wallet still works.
export { signTransaction } from '@/lib/stellar-wallet-connect';

// NEW: re-export the WalletConnection type mapped from the new store shape
// for backwards-compatibility with code that references this type.
export interface WalletConnection {
  publicKey: string;
  isConnected: boolean;
  walletType: string | null;
}

/** Build a Stellar Expert URL for a given transaction hash. */
export const getStellarExpertUrl = (txHash: string, network: 'testnet' | 'mainnet' = 'testnet'): string => {
  const baseUrl = network === 'mainnet' 
    ? 'https://stellar.expert/explorer/public'
    : 'https://stellar.expert/explorer/testnet';
  return `${baseUrl}/tx/${txHash}`;
};

/** Return the Horizon API base URL for a given network. */
export const getHorizonUrl = (network: 'testnet' | 'mainnet' = 'testnet'): string => {
  return network === 'mainnet'
    ? 'https://horizon.stellar.org'
    : 'https://horizon-testnet.stellar.org';
};
