const ABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: 'uname',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'docName',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'JsonData',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'signature',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'pubDataKey',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'privDataKey',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'IPFS_url',
				type: 'string',
			},
		],
		name: 'addData',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_version',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: '',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: '',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: '',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		name: 'AddData',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'uname',
				type: 'address',
			},
		],
		name: 'verify',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'a',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'b',
				type: 'string',
			},
		],
		name: 'compareStrings',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'currentPointer',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'DataProfiles',
		outputs: [
			{
				internalType: 'string',
				name: 'uname',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'docName',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'JsonData',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'signature',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'pubDataKey',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'privDataKey',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'IPFS_url',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getData',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'uname',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'docName',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'JsonData',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'signature',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'pubDataKey',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'privDataKey',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'IPFS_url',
						type: 'string',
					},
				],
				internalType: 'struct MSDS.UserData[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMaxPointer',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'pubDataKey',
				type: 'string',
			},
		],
		name: 'searchData',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'uname',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'docName',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'JsonData',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'signature',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'pubDataKey',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'privDataKey',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'IPFS_url',
						type: 'string',
					},
				],
				internalType: 'struct MSDS.UserData',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'verified',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'version',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

export default ABI;
