import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import img from '../../images/124837.png';
import ABI from '../../abi/MSDS.js';
import { useContractRead, useContractWrite, usePrepareContractWrite, useSigner, useNetwork, useSwitchNetwork } from 'wagmi';

export default function CardNew(props) {
	const theme = useTheme();

	// const { data, isError, isLoading } = useContractRead({
	// 	address: '0xa48b5a71a35f24e34c3a772f303844969e345488',
	// 	abi: ABI,
	// 	functionName: 'getData',
	// 	chainId: 1337,
	// 	args: [props.elem.toString()],
	// 	onSuccess(data) {
	// 		console.log('Success', props.elem);
	// 	},
	// 	onError(error) {
	// 		console.log('Error', props.elem);
	// 	},
	// });

	// console.log(data);

	return (
		<Card sx={{ display: 'flex' }} spacing={2}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', m: 1 }} spacing={2}>
				{props.elem}
				<CardMedia component="img" sx={{ width: 60 }} image={img} alt="document" />
			</Box>
		</Card>
	);
}
