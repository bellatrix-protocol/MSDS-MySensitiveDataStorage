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

function QueryData(props) {
	const { address, isConnecting, isDisconnected } = useAccount();

	const [list, setList] = React.useState([]);

	const { data, isError, isLoading } = useContractRead({
		address: '0xaC380412A4A0564799Ca06E23d8BAae87771A0B4',
		abi: ABI,
		functionName: 'getData',
		chainId: 1337,
	});

	console.log(data);
	// data.refetch();

	return (
		<Grid container spacing={3}>
			{data?.map((elem) => (
				<Grid item spacing={3}>
					<CardNew elem={elem} />
				</Grid>
			))}
		</Grid>
	);
}

export default QueryData;
