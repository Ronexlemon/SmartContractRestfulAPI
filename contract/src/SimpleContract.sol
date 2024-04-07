// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2 ;

contract SimpleContract{
    //struct for data
    struct Companydetails{
        uint numberOfEmployees;
        uint  annualRevenue;
        string companyName;
        bool isRegistered;
    }
    //mapping
    mapping(uint => Companydetails)public _companydetails;
    //index
    uint256  public companyIdex=0;
    //function to add data
    function createCompany(uint _numberOfEmployees,uint _annualRevenue,string  memory _companyName,bool _isRegistered ) public {
        uint index = companyIdex;

        _companydetails[index] = Companydetails({numberOfEmployees:_numberOfEmployees,annualRevenue:_annualRevenue,companyName:_companyName,isRegistered:_isRegistered});
        companyIdex ++;
    }


    //function  all data to readData

    function getAllCampanies()public  view returns (Companydetails[] memory camp){
        camp = new Companydetails[](companyIdex);
        for(uint i=0;i < companyIdex;++i){
            camp[i] = _companydetails[i];
        }
        return camp;

    }

    //function return data based on index

    function getCompanyById(uint _id) public view returns (Companydetails memory) {
    return _companydetails[_id];
}


}