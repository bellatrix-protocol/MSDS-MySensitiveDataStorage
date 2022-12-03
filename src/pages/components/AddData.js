/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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
import FileUpload from 'react-material-file-upload';
import { Web3Storage, getFilesFromPath } from 'web3.storage';

const token = process.env.REACT_APP_WEB3STORAGETOKEN;
console.log(process.env, token);
const client = new Web3Storage({ token });

function AddData() {
	const [uname, setUname] = useState('');
	const [json, setJson] = useState('');
	const [file, setFile] = useState([]);
	const [privdataKey, setPrivDataKey] = useState('');
	const [pubdataKey, setPubDataKey] = useState('');
	const [signature, setSignature] = useState('');
	const [IPFS_url, setIPFSURL] = useState('');

	const [IPFSUploaded, setIPFSUploaded] = useState(false);

	function handleSubmit() {
		return;
	}

	useEffect(() => {
		if (file != []) {
			// const EncryptRsa = require('encrypt-rsa').default;
			// // create instance
			// const encryptRsa = new EncryptRsa();
			// const nodeRSA = require('node-rsa');
			// const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();

			// async function encode() {
			// 	const fileText = await file.text();
			// 	const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
			// 		text: fileText,
			// 		publicKey,
			// 	});
			// 	return encryptedText;
			// }
			// setPubDataKey(publicKey);
			// setPrivDataKey(privateKey);
			// const encrypteddata = encode();

			async function putWeb3() {
				// const files = [new File([encrypteddata], `${uname}.txt`)];
				const cid = await client.put(file);
				if (cid) {
					setIPFSUploaded(true);
				}
				return cid;
			}
			setIPFSURL(putWeb3());

			console.log(IPFS_url);
		}
	}, [file]);

	return (
		<>
			<h3>Store my data</h3>
			<Box component="form" noValidate onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							autoComplete="user-name"
							name="uName"
							required
							fullWidth
							id="username"
							label="User Name"
							autoFocus
							onChange={(event) => {
								setUname(event.target.value);
							}}
						/>
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
							rows={3}
							onChange={(event) => {
								setJson(event.target.value);
							}}
						/>
					</Grid>
					<Grid item>
						<FileUpload
							disabled={IPFSUploaded}
							value={file}
							buttonText={'Upload to Web3 Storage'}
							sx={{ height: '70%' }}
							onChange={setFile}
						/>
					</Grid>
				</Grid>
				<Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
					Send to chain
				</Button>
			</Box>
		</>
	);
}

export default AddData;
