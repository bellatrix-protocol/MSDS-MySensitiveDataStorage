// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract MSDS {

    struct UserData{
        string uname;
        // TODO dangerous devise a better mechanism
        string docName;
        string JsonData;

        string signature;
        string dataKey;
        string IPFS_url;
    }
    
    string public name;
    string public version;
    address public owner;
    mapping (string => mapping(uint256=>UserData)) public DataProfiles;
    mapping (string => uint256) public currentPointer;

    event AddData(string,string,string,string,string);

    constructor(string memory _name, string memory _version ){
        name=_name;
        version=_version;
        owner = msg.sender;
    }

    function addData(
        string memory uname,
        string memory docName,
        string memory JsonData, 
        string memory signature, 
        string memory dataKey,
        string memory IPFS_url ) public returns (bool) {
            
            require(bytes(uname).length > 0 ,"invalid uname");
            require(bytes(JsonData).length > 0,"invalid jsondata");
            require(bytes(signature).length > 0,"invalid signature");
            require(bytes(dataKey).length > 0,"invalid datakey");
            require(bytes(IPFS_url).length > 0,"invalid IPFS_url");
            require(owner==msg.sender,"Not Authorised");

            DataProfiles[uname][currentPointer[uname]]=UserData({
                uname:uname,
                docName:docName,
                JsonData:JsonData,
                signature:signature,
                dataKey:dataKey,
                IPFS_url:IPFS_url
            });
            currentPointer[uname]+=1;

            emit AddData(uname, JsonData, signature, dataKey, IPFS_url);

        return true;
    }

    function getMaxPointer(string memory uname)  public view returns (uint256)  {
        require(owner==msg.sender,"Not Authorised");
        return currentPointer[uname];
    }

    function getData(string memory uname, uint256 slot) public view returns (UserData memory) {
        if(slot>=currentPointer[uname]){
            revert("invalid data slot");
        }
        return DataProfiles[uname][slot];
    }


    function searchData(string memory uname, string memory dataKey ) public view returns (UserData memory ){

        for (uint256 i =0;i<currentPointer[uname];i++){
            if(compareStrings(dataKey,DataProfiles[uname][i].dataKey)){
                return DataProfiles[uname][i];
            }
        }

        return UserData({
            uname:"",
            docName:"",
            JsonData:"",
            signature:"",
            dataKey:"",
            IPFS_url:""

        });
    }

    function compareStrings(string memory a, string memory b) public pure   returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    } 

}