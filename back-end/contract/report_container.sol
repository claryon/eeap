pragma solidity^0.4.9;

contract Report{
  function test(string a) constant returns (string){
      return a;
  }

  function test2(){
  }
  function Report() payable{
  }
  // fields according to the token definition document from BR-AG

  // ========= Timestamp =========
  uint128 registration_timestamp; // Timestamp of record registration.
  uint128 registration_submission; // Date of report submission by issuer to the OAM.

  // ========= Report Identification =========
  string LEI; // Unique identifier of issuer.
  string name; // Issuer name.
  string language; // Issuer name language.
  string registrationCountry; // Country of registration of issuer.


  // ========= Issuer Identification =========

  string reportId; // Identification code of report.
  string regulationType; // Type of regulated information.

  string auditorId; // Identification number of report auditor.
  string standardCode; // Code of technical standard.

  string reportingCode; // Code of reporting framework.

  // ========= NCA Identification =========
  string stateAuthority; // Indication whether member state authority is host or home.
  string NCAcountryIdentification; // NCA country identification code.
  string OAMCountryIdentification; // OAM country identification code.


  // ========= Report Source =========
  string NCAReportURL; // Report URL (OAM).
  string IssuerReportURL; // Report URL (Issuer).
  string EEAP_ReportURl; // Report URL (EEAP).

  // ========= Checksum =========
  string checkSumElectronic; // Checksum (e.g. hash) of electronic report content.
  string checksumNonEdit; // Checksum (e.g. hash) of non-editable report content


  // https://github.com/ethereum/solidity/blob/51a94d75d011b02a115a6af1c3dfa18ba2cec472/libsolidity/codegen/CompilerUtils.cpp
  // Line 694: limit of 16
  function initialise1(
    uint128 _registration_timestamp,
    uint128 _registration_submission,
    string _LEI,
    string _name,
    string _language,
    string _registrationCountry,
    string _reportId,
    string _regulationType,
    string _auditorId,
    string _standardCode,
    string _reportingCode
  ){
   registration_timestamp = _registration_timestamp;
   registration_submission = _registration_submission;
   LEI = _LEI;
   name = _name;
   language = _language;
   registrationCountry = _registrationCountry;
   reportId = _reportId;
   regulationType = _regulationType;
   auditorId = _auditorId;
   standardCode = _standardCode;
   reportingCode = _reportingCode;

  }


  function initialise2(
    string _stateAuthority,
    string _NCAcountryIdentification,
    string _OAMCountryIdentification,
    string _NCAReportURL,
    string _IssuerReportURL,
    string _EEAP_ReportURl,
    string _checkSumElectronic,
    string _checksumNonEdit
  ){
    stateAuthority = _stateAuthority;
    NCAcountryIdentification = _NCAcountryIdentification;
    OAMCountryIdentification = _OAMCountryIdentification;
    NCAReportURL = _NCAReportURL;
    IssuerReportURL = _IssuerReportURL;
    EEAP_ReportURl = _EEAP_ReportURl;
    checkSumElectronic = _checkSumElectronic;
    checksumNonEdit = _checksumNonEdit;
  }

}
