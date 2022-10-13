//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

/**
 * @title DeCloud
 * @author 0xCarlosF
 * @notice This contract saves the ipfs url and name of a file in the blockchain.
 * @dev This contract uses a mapping to keep track of the files every msg.sender has uploaded.
 */

contract DeCloud {

    /// @notice File structure containing and id, the custom name of the file (written by the user)
    /// and the IPFS url.

    struct File {
        uint256 id;
        string name;
        string url;
    }

    // Owner of the contract
    address immutable i_owner;
    // Max files per user 
    uint256 immutable i_maxFiles;

    /// @notice Event emitted when a file is uploaded
    event UploadFile(uint256 id, string name, string url);

    /// @notice This mapping returns the array of Files an address has uploaded
    mapping (address => File[]) public addressToFiles;

    File[] public files = addressToFiles[msg.sender];

    constructor(uint256 maxFiles) {
        i_owner = msg.sender;
        i_maxFiles = maxFiles;
    }

    /// @notice Function to upload files
    /// @dev This function creates a new file of type File and pushes it to the files array.
    /// After the file is pushed, the UploadFile event is emitted. 
    /// @param url The IPFS url where the file is located. 
    /// @param name The name of the file written by the user.
    function uploadFile(string memory url, string memory name) external {
        require(files.length < i_maxFiles, "Max number of files reached");

        uint256 id = files.length;
        File memory newFile = File(id, name, url);

        files.push(newFile);

        emit UploadFile(id, name, url);
    }

    /// @notice This function returns the length of the array of files uploaded by the user.
    function getNumFiles() external view returns (uint256) {
        return files.length;
    }
}