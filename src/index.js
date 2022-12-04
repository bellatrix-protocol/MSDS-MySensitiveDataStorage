import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const bellatrixChain: Chain = {
	id: 1337,
	name: 'Bellatrix',
	network: 'Bellatrix',
	nativeCurrency: {
		decimals: 18,
		name: 'Bellatrix',
		symbol: 'BELLA',
	},
	rpcUrls: {
		default: 'http://localhost:8545',
	},
	testnet: false,
};

const { chains, provider } = configureChains(
	[bellatrixChain, chain.goerli, chain.mainnet, chain.polygon, chain.polygonMumbai],
	[
		jsonRpcProvider({
			rpc: (chain) => {
				if (chain.id !== bellatrixChain.id) return null;
				return { http: chain.rpcUrls.default };
			},
		}),
		alchemyProvider({ apiKey: 'JSW3hvX1Wom6pOWMt6w6Y4H8RSLhC7ro' }),
		publicProvider(),
	]
);

const { connectors } = getDefaultWallets({
	appName: 'MSDS',
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				chains={chains}
				theme={darkTheme({
					accentColor: '#Fb6f94',
					accentColorForeground: 'white',
				})}
			>
				<App />
			</RainbowKitProvider>
		</WagmiConfig>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
