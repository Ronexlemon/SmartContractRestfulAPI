// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleContract {
    // Struct for company details
    struct CompanyDetails {
        uint numberOfEmployees;
        uint annualRevenue;
        string companyName;
        bool isRegistered;
    }

    // Mapping to store company details by ID
    mapping(uint => CompanyDetails) public _companyDetails;

    // Index to track the number of companies
    uint256 public companyIdex = 0;

    // Function to add company data
    function createCompany(uint _numberOfEmployees, uint _annualRevenue, string memory _companyName, bool _isRegistered) public {
        uint index = companyIdex;

        _companyDetails[index] = CompanyDetails({
            numberOfEmployees: _numberOfEmployees,
            annualRevenue: _annualRevenue,
            companyName: _companyName,
            isRegistered: _isRegistered
        });

        companyIdex++;
    }

    // Function to retrieve all company data
    function getAllCompanies() public view returns (CompanyDetails[] memory) {
        CompanyDetails[] memory companies = new CompanyDetails[](companyIdex);

        for (uint i = 0; i < companyIdex; i++) {
            companies[i] = _companyDetails[i];
        }

        return companies;
    }

    // Function to retrieve company data by ID
    function getCompanyById(uint _id) public view returns (CompanyDetails memory) {
        return _companyDetails[_id];
    }
}
