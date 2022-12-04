import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardNew from './card.js';
import { useContractRead, useContractWrite, usePrepareContractWrite, useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import ABI from '../../abi/MSDS.js';

const ethers = require('ethers');

// 2. Define network configurations
const providerRPC = {
	moonbeam: {
		name: 'bellatrix',
		rpc: 'http://localhost:8545', // Insert your RPC URL here
		chainId: 1337, // 0x504 in hex,
	},
};
// 3. Create ethers provider
const provider = new ethers.providers.StaticJsonRpcProvider(providerRPC.moonbeam.rpc, {
	chainId: providerRPC.moonbeam.chainId,
	name: providerRPC.moonbeam.name,
});

function QueryData(props) {
	const { address, isConnecting, isDisconnected } = useAccount();

	const [list, setList] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

	const { data, isError, isLoading } = useContractRead({
		address: '0xaC380412A4A0564799Ca06E23d8BAae87771A0B4',
		abi: ABI,
		functionName: 'currentPointer',
		args: [address],
		chainId: 1337,
	});

	console.log(data);
	// data.refetch();

	return (
		<Grid container spacing={3}>
			{Array.from(Array(parseInt(data, 16)).keys()).map((elem) => (
				<Grid item spacing={3}>
					<CardNew elem={elem + 1} />
				</Grid>
			))}
		</Grid>
	);
}

export default QueryData;
