// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MSDS {
    struct UserData {
        string uname;
        // TODO dangerous devise a better mechanism
        string docName;
        string JsonData;
        string signature;
        string pubDataKey;
        string privDataKey;
        string IPFS_url;
    }

    string public name;
    string public version;
    address public owner;
    mapping(address => mapping(uint256 => UserData)) public DataProfiles;
    mapping(address => uint256) public currentPointer;
    mapping(address => bool) public verified;

    event AddData(string, string, string, string);

    constructor(string memory _name, string memory _version) {
        name = _name;
        version = _version;
        owner = msg.sender;
    }

    function verify(address uname) public {
        verified[uname] = true;
    }

    function addData(
        string memory uname,
        string memory docName,
        string memory JsonData,
        string memory signature,
        string memory pubDataKey,
        string memory privDataKey,
        string memory IPFS_url
    ) public returns (bool) {
        require(bytes(uname).length > 0, "invalid uname");
        require(bytes(JsonData).length > 0, "invalid jsondata");
        require(bytes(signature).length > 0, "invalid signature");
        require(bytes(pubDataKey).length > 0, "invalid datakey");
        require(bytes(privDataKey).length > 0, "invalid datakey");
        require(bytes(IPFS_url).length > 0, "invalid IPFS_url");
        require(owner == msg.sender, "Not Authorised");

        DataProfiles[msg.sender][currentPointer[msg.sender]] = UserData({
            uname: uname,
            docName: docName,
            JsonData: JsonData,
            signature: signature,
            pubDataKey: pubDataKey,
            privDataKey: privDataKey,
            IPFS_url: IPFS_url
        });
        currentPointer[msg.sender] += 1;

        emit AddData(uname, JsonData, signature, IPFS_url);

        return true;
    }

    function getMaxPointer() public view returns (uint256) {
        // require(owner==msg.sender,"Not Authorised");
        return currentPointer[msg.sender];
    }

    function getData(uint256 slot) public view returns (UserData memory) {
        if (slot >= currentPointer[msg.sender]) {
            revert("invalid data slot");
        }
        return DataProfiles[msg.sender][slot];
    }

    function searchData(string memory pubDataKey)
        public
        view
        returns (UserData memory)
    {
        for (uint256 i = 0; i < currentPointer[msg.sender]; i++) {
            if (
                compareStrings(
                    pubDataKey,
                    DataProfiles[msg.sender][i].pubDataKey
                )
            ) {
                return DataProfiles[msg.sender][i];
            }
        }

        return
            UserData({
                uname: "",
                docName: "",
                JsonData: "",
                signature: "",
                pubDataKey: "",
                privDataKey: "",
                IPFS_url: ""
            });
    }

    function getData(address uname, uint256 slot)
        public
        view
        returns (UserData memory)
    {
        if (slot >= currentPointer[uname]) {
            revert("invalid data slot");
        }
        return DataProfiles[uname][slot];
    }

    function searchData(address uname, string memory pubDataKey)
        public
        view
        returns (UserData memory)
    {
        for (uint256 i = 0; i < currentPointer[uname]; i++) {
            if (compareStrings(pubDataKey, DataProfiles[uname][i].pubDataKey)) {
                return DataProfiles[uname][i];
            }
        }

        return
            UserData({
                uname: "",
                docName: "",
                JsonData: "",
                signature: "",
                pubDataKey: "",
                privDataKey: "",
                IPFS_url: ""
            });
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }
}
