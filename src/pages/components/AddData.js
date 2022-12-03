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

function AddData() {
	function handleSubmit() {
		return;
	}
	return (
		<>
			<h3>Store my data</h3>
			<Box component="form" noValidate onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField autoComplete="user-name" name="uName" required fullWidth id="username" label="User Name" autoFocus />
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="jds"
							name="jds"
							autoComplete="JSON data string"
							label="JSON Data String"
							multiline
							rows={4}
						/>
					</Grid>
					<Grid item container xs={6}>
						<Button variant="outlined">Upload File to IPFS</Button>
					</Grid>
					<Grid item container xs={6}>
						File Uploaded:{''}
					</Grid>
				</Grid>
				<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Send to chain
				</Button>
			</Box>
		</>
	);
}

export default AddData;
