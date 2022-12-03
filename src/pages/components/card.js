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

export default function CardNew(props) {
	const theme = useTheme();

	return (
		<Card sx={{ display: 'flex' }} spacing={2}>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', m: 1 }} spacing={2}>
				{props.text}
				<CardMedia component="img" sx={{ width: 60 }} image={img} alt="document" />
			</Box>
		</Card>
	);
}
