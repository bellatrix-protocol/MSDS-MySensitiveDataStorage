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

function QueryData() {
	let a = [1, 2, 3, 4, 5, 6];

	return (
		<Grid container spacing={3}>
			{a.map((elem) => (
				<Grid item spacing={3}>
					<CardNew text={'My Card' + elem} />
				</Grid>
			))}
		</Grid>
	);
}

export default QueryData;