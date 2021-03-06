const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  sync: {type: Number, min: 0, max: 2, default: 0},  // Record if a report has been writting onto the DL
  address: {type: String, default: ''}, // The address of the smart contract

  timestamp: {
    registration: {type: Date, default: ''}, // Timestamp of record registration.
    submission: {type: Date, default: ''} // Date of report submission by issuer to the OAM.
  },

  issuerIdentification: {
    LEI: {type: String, default: ''}, // Unique identifier of issuer.
    name: {type: String, default: ''}, // Issuer name.
    language: {type: String, default: ''}, // Issuer name language.
    registrationCountry: {type: String, default: ''} // Country of registration of issuer.
  },

  reportIdentification: {
    reportId: {type: String, default: ''}, // Identification code of report.
    regulationType: {type: String, default: ''}, // Type of regulated information.
    auditorId: {type: String, default: ''}, // Identification number of report auditor.
    standardCode: {type: String, default: ''}, // Code of technical standard.
    reportingCode: {type: String, default: ''} // Code of reporting framework.
  },

  NCAIdentification: {
    stateAuthority: {type: String, default: ''}, // Indication whether member state authority is host or home.
    NCAcountryIdentification: {type: String, default: ''}, // NCA country identification code.
    OAMCountryIdentification: {type: String, default: ''}, // OAM country identification code.
  },

  reportSource: {
    NCAReportURL: {type: String, default: ''}, // Report URL (OAM).
    IssuerReportURL: {type: String, default: ''}, // Report URL (Issuer).
    EEAP_ReportURL: {type: String, default: ''}, // Report URL (EEAP).
  },

  checkSum: {
    checkSumElectronic: {type: String, default: ''}, // Checksum (e.g. hash) of electronic report content.
    checksumNonEdit: {type: String, default: ''} // Checksum (e.g. hash) of non-editable report content
  }
});


module.exports = mongoose.model('Report', reportSchema);
