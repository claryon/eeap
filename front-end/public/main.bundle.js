webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n\t<div class=\"container\">\n\t\t<a class=\"navbar-brand\" href=\"#\">EFTG search portal</a>\n\t\n\t\t<div class=\"navbar-collapse collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n  \t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/overview\">Overview</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/search\">Search</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n\n<div class=\"container\">\n\t<!-- automatically shows component linked to route in app.module.ts -->\n\t<router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Http Module and our Data Service





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'overview',
                    component: __WEBPACK_IMPORTED_MODULE_8__overview_overview_component__["a" /* OverviewComponent */]
                },
                {
                    path: 'search',
                    component: __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */]
                },
                {
                    path: '',
                    redirectTo: '/overview',
                    pathMatch: 'full'
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getReports = function () {
        return this._http.get("/api/reports")
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.getReport = function (reportId) {
        return this._http.get("/api/report/" + reportId)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.searchReports = function (query) {
        return this._http.get("/api/reports/search?" + query)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Overview of reports</h2>\n\n<table class=\"table\">\n\t<thead>\n\t\t<th>Submission date</th>\n\t\t<th>Report ID</th>\n\t\t<th>Issuer name</th>\n\t\t<th></th>\n\t</thead>\n\t<tbody>\n  \t\t<tr *ngFor=\"let report of reports | reverse\">\n  \t\t\t<td>{{ report.timestamp.submission | date : 'medium'}}</td>\n  \t\t\t<td>{{ report.reportIdentification.reportId }}</td>\n  \t\t\t<td>{{ report.issuerIdentification.name }}</td>\n  \t\t\t<td>\n  \t\t\t\t<a href=\"{{ report.reportSource.NCAReportURL}}\">Download</a>\n  \t\t\t</td>\n  \t\t</tr>\n  \t</tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReversePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (values) {
        if (values) {
            return values.reverse();
        }
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'reverse',
        pure: false
    })
], ReversePipe);

var OverviewComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function OverviewComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        // Access the Data Service's getReports() method we defined
        this._dataService.getReports()
            .then(function (res) { return _this.reports = res; });
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    return OverviewComponent;
}());

//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search reports</h1>\n\n<form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm.value)\">\n\n<div class=\"container\">\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-3 col-form-label\" for=\"issuerName\">Issuer name</label>\n\t\t<div class=\"col-4\">\n\t\t\t<input class=\"form-control\" type=\"text\" id=\"issuerName\" [formControl]=\"searchForm.controls['issuerName']\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-3 col-form-label\" for=\"issuerLEI\">Issuer identifier (LEI)</label>\n\t\t<div class=\"col-4\">\n\t\t\t<input class=\"form-control\" type=\"text\" maxlength=\"20\" id=\"issuerLEI\" [formControl]=\"searchForm.controls['issuerLEI']\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-3 col-form-label\" for=\"issuerHomeMemberState\">Issuer home member state</label>\n\t\t<div class=\"col-4\">\n\t\t\t<select class=\"form-control\" id=\"issuerHomeMemberState\" [formControl]=\"searchForm.controls['issuerHomeMemberState']\">\n\t\t\t\t<option value=\"AF\">AFGHANISTAN</option>\n\t\t\t\t<option value=\"AX\">&Aring;LAND ISLANDS</option>\n\t\t\t\t<option value=\"AL\">ALBANIA</option>\n\t\t\t\t<option value=\"DZ\">ALGERIA</option>\n\t\t\t\t<option value=\"AS\">AMERICAN SAMOA</option>\n\t\t\t\t<option value=\"AD\">ANDORRA</option>\n\t\t\t\t<option value=\"AO\">ANGOLA</option>\n\t\t\t\t<option value=\"AI\">ANGUILLA</option>\n\t\t\t\t<option value=\"AQ\">ANTARCTICA</option>\n\t\t\t\t<option value=\"AG\">ANTIGUA AND BARBUDA</option>\n\t\t\t\t<option value=\"AR\">ARGENTINA</option>\n\t\t\t\t<option value=\"AM\">ARMENIA</option>\n\t\t\t\t<option value=\"AW\">ARUBA</option>\n\t\t\t\t<option value=\"AU\">AUSTRALIA</option>\n\t\t\t\t<option value=\"AT\">AUSTRIA</option>\n\t\t\t\t<option value=\"AZ\">AZERBAIJAN</option>\n\t\t\t\t<option value=\"BS\">BAHAMAS</option>\n\t\t\t\t<option value=\"BH\">BAHRAIN</option>\n\t\t\t\t<option value=\"BD\">BANGLADESH</option>\n\t\t\t\t<option value=\"BB\">BARBADOS</option>\n\t\t\t\t<option value=\"BY\">BELARUS</option>\n\t\t\t\t<option value=\"BE\">BELGIUM</option>\n\t\t\t\t<option value=\"BZ\">BELIZE</option>\n\t\t\t\t<option value=\"BJ\">BENIN</option>\n\t\t\t\t<option value=\"BM\">BERMUDA</option>\n\t\t\t\t<option value=\"BT\">BHUTAN</option>\n\t\t\t\t<option value=\"BO\">BOLIVIA</option>\n\t\t\t\t<option value=\"BA\">BOSNIA AND HERZEGOVINA</option>\n\t\t\t\t<option value=\"BW\">BOTSWANA</option>\n\t\t\t\t<option value=\"BV\">BOUVET ISLAND</option>\n\t\t\t\t<option value=\"BR\">BRAZIL</option>\n\t\t\t\t<option value=\"IO\">BRITISH INDIAN OCEAN TERRITORY</option>\n\t\t\t\t<option value=\"BN\">BRUNEI DARUSSALAM</option>\n\t\t\t\t<option value=\"BG\">BULGARIA</option>\n\t\t\t\t<option value=\"BF\">BURKINA FASO</option>\n\t\t\t\t<option value=\"BI\">BURUNDI</option>\n\t\t\t\t<option value=\"KH\">CAMBODIA</option>\n\t\t\t\t<option value=\"CM\">CAMEROON</option>\n\t\t\t\t<option value=\"CA\">CANADA</option>\n\t\t\t\t<option value=\"CV\">CAPE VERDE</option>\n\t\t\t\t<option value=\"KY\">CAYMAN ISLANDS</option>\n\t\t\t\t<option value=\"CF\">CENTRAL AFRICAN REPUBLIC</option>\n\t\t\t\t<option value=\"TD\">CHAD</option>\n\t\t\t\t<option value=\"CL\">CHILE</option>\n\t\t\t\t<option value=\"CN\">CHINA</option>\n\t\t\t\t<option value=\"CX\">CHRISTMAS ISLAND</option>\n\t\t\t\t<option value=\"CC\">COCOS (KEELING) ISLANDS</option>\n\t\t\t\t<option value=\"CO\">COLOMBIA</option>\n\t\t\t\t<option value=\"KM\">COMOROS</option>\n\t\t\t\t<option value=\"CG\">CONGO</option>\n\t\t\t\t<option value=\"CD\">CONGO, THE DEMOCRATIC REPUBLIC OF THE</option>\n\t\t\t\t<option value=\"CK\">COOK ISLANDS</option>\n\t\t\t\t<option value=\"CR\">COSTA RICA</option>\n\t\t\t\t<option value=\"CI\">COTE D'IVOIRE</option>\n\t\t\t\t<option value=\"HR\">CROATIA</option>\n\t\t\t\t<option value=\"CU\">CUBA</option>\n\t\t\t\t<option value=\"CY\">CYPRUS</option>\n\t\t\t\t<option value=\"CZ\">CZECH REPUBLIC</option>\n\t\t\t\t<option value=\"DK\">DENMARK</option>\n\t\t\t\t<option value=\"DJ\">DJIBOUTI</option>\n\t\t\t\t<option value=\"DM\">DOMINICA</option>\n\t\t\t\t<option value=\"DO\">DOMINICAN REPUBLIC</option>\n\t\t\t\t<option value=\"EC\">ECUADOR</option>\n\t\t\t\t<option value=\"EG\">EGYPT</option>\n\t\t\t\t<option value=\"SV\">EL SALVADOR</option>\n\t\t\t\t<option value=\"GQ\">EQUATORIAL GUINEA</option>\n\t\t\t\t<option value=\"ER\">ERITREA</option>\n\t\t\t\t<option value=\"EE\">ESTONIA</option>\n\t\t\t\t<option value=\"ET\">ETHIOPIA</option>\n\t\t\t\t<option value=\"FK\">FALKLAND ISLANDS (MALVINAS)</option>\n\t\t\t\t<option value=\"FO\">FAROE ISLANDS</option>\n\t\t\t\t<option value=\"FJ\">FIJI</option>\n\t\t\t\t<option value=\"FI\">FINLAND</option>\n\t\t\t\t<option value=\"FR\">FRANCE</option>\n\t\t\t\t<option value=\"GF\">FRENCH GUIANA</option>\n\t\t\t\t<option value=\"PF\">FRENCH POLYNESIA</option>\n\t\t\t\t<option value=\"TF\">FRENCH SOUTHERN TERRITORIES</option>\n\t\t\t\t<option value=\"GA\">GABON</option>\n\t\t\t\t<option value=\"GM\">GAMBIA</option>\n\t\t\t\t<option value=\"GE\">GEORGIA</option>\n\t\t\t\t<option value=\"DE\">GERMANY</option>\n\t\t\t\t<option value=\"GH\">GHANA</option>\n\t\t\t\t<option value=\"GI\">GIBRALTAR</option>\n\t\t\t\t<option value=\"GR\">GREECE</option>\n\t\t\t\t<option value=\"GL\">GREENLAND</option>\n\t\t\t\t<option value=\"GD\">GRENADA</option>\n\t\t\t\t<option value=\"GP\">GUADELOUPE</option>\n\t\t\t\t<option value=\"GU\">GUAM</option>\n\t\t\t\t<option value=\"GT\">GUATEMALA</option>\n\t\t\t\t<option value=\"GG\">GUERNSEY</option>\n\t\t\t\t<option value=\"GN\">GUINEA</option>\n\t\t\t\t<option value=\"GW\">GUINEA-BISSAU</option>\n\t\t\t\t<option value=\"GY\">GUYANA</option>\n\t\t\t\t<option value=\"HT\">HAITI</option>\n\t\t\t\t<option value=\"HM\">HEARD ISLAND AND MCDONALD ISLANDS</option>\n\t\t\t\t<option value=\"VA\">HOLY SEE (VATICAN CITY STATE)</option>\n\t\t\t\t<option value=\"HN\">HONDURAS</option>\n\t\t\t\t<option value=\"HK\">HONG KONG</option>\n\t\t\t\t<option value=\"HU\">HUNGARY</option>\n\t\t\t\t<option value=\"IS\">ICELAND</option>\n\t\t\t\t<option value=\"IN\">INDIA</option>\n\t\t\t\t<option value=\"ID\">INDONESIA</option>\n\t\t\t\t<option value=\"IR\">IRAN, ISLAMIC REPUBLIC OF</option>\n\t\t\t\t<option value=\"IQ\">IRAQ</option>\n\t\t\t\t<option value=\"IE\">IRELAND</option>\n\t\t\t\t<option value=\"IM\">ISLE OF MAN</option>\n\t\t\t\t<option value=\"IL\">ISRAEL</option>\n\t\t\t\t<option value=\"IT\">ITALY</option>\n\t\t\t\t<option value=\"JM\">JAMAICA</option>\n\t\t\t\t<option value=\"JP\">JAPAN</option>\n\t\t\t\t<option value=\"JE\">JERSEY</option>\n\t\t\t\t<option value=\"JO\">JORDAN</option>\n\t\t\t\t<option value=\"KZ\">KAZAKHSTAN</option>\n\t\t\t\t<option value=\"KE\">KENYA</option>\n\t\t\t\t<option value=\"KI\">KIRIBATI</option>\n\t\t\t\t<option value=\"KP\">KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF</option>\n\t\t\t\t<option value=\"KR\">KOREA, REPUBLIC OF</option>\n\t\t\t\t<option value=\"KW\">KUWAIT</option>\n\t\t\t\t<option value=\"KG\">KYRGYZSTAN</option>\n\t\t\t\t<option value=\"LA\">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>\n\t\t\t\t<option value=\"LV\">LATVIA</option>\n\t\t\t\t<option value=\"LB\">LEBANON</option>\n\t\t\t\t<option value=\"LS\">LESOTHO</option>\n\t\t\t\t<option value=\"LR\">LIBERIA</option>\n\t\t\t\t<option value=\"LY\">LIBYAN ARAB JAMAHIRIYA</option>\n\t\t\t\t<option value=\"LI\">LIECHTENSTEIN</option>\n\t\t\t\t<option value=\"LT\">LITHUANIA</option>\n\t\t\t\t<option value=\"LU\">LUXEMBOURG</option>\n\t\t\t\t<option value=\"MO\">MACAO</option>\n\t\t\t\t<option value=\"MK\">MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF</option>\n\t\t\t\t<option value=\"MG\">MADAGASCAR</option>\n\t\t\t\t<option value=\"MW\">MALAWI</option>\n\t\t\t\t<option value=\"MY\">MALAYSIA</option>\n\t\t\t\t<option value=\"MV\">MALDIVES</option>\n\t\t\t\t<option value=\"ML\">MALI</option>\n\t\t\t\t<option value=\"MT\">MALTA</option>\n\t\t\t\t<option value=\"MH\">MARSHALL ISLANDS</option>\n\t\t\t\t<option value=\"MQ\">MARTINIQUE</option>\n\t\t\t\t<option value=\"MR\">MAURITANIA</option>\n\t\t\t\t<option value=\"MU\">MAURITIUS</option>\n\t\t\t\t<option value=\"YT\">MAYOTTE</option>\n\t\t\t\t<option value=\"MX\">MEXICO</option>\n\t\t\t\t<option value=\"FM\">MICRONESIA, FEDERATED STATES OF</option>\n\t\t\t\t<option value=\"MD\">MOLDOVA, REPUBLIC OF</option>\n\t\t\t\t<option value=\"MC\">MONACO</option>\n\t\t\t\t<option value=\"MN\">MONGOLIA</option>\n\t\t\t\t<option value=\"MS\">MONTSERRAT</option>\n\t\t\t\t<option value=\"MA\">MOROCCO</option>\n\t\t\t\t<option value=\"MZ\">MOZAMBIQUE</option>\n\t\t\t\t<option value=\"MM\">MYANMAR</option>\n\t\t\t\t<option value=\"NA\">NAMIBIA</option>\n\t\t\t\t<option value=\"NR\">NAURU</option>\n\t\t\t\t<option value=\"NP\">NEPAL</option>\n\t\t\t\t<option value=\"NL\">NETHERLANDS</option>\n\t\t\t\t<option value=\"AN\">NETHERLANDS ANTILLES</option>\n\t\t\t\t<option value=\"NC\">NEW CALEDONIA</option>\n\t\t\t\t<option value=\"NZ\">NEW ZEALAND</option>\n\t\t\t\t<option value=\"NI\">NICARAGUA</option>\n\t\t\t\t<option value=\"NE\">NIGER</option>\n\t\t\t\t<option value=\"NG\">NIGERIA</option>\n\t\t\t\t<option value=\"NU\">NIUE</option>\n\t\t\t\t<option value=\"NF\">NORFOLK ISLAND</option>\n\t\t\t\t<option value=\"MP\">NORTHERN MARIANA ISLANDS</option>\n\t\t\t\t<option value=\"NO\">NORWAY</option>\n\t\t\t\t<option value=\"OM\">OMAN</option>\n\t\t\t\t<option value=\"PK\">PAKISTAN</option>\n\t\t\t\t<option value=\"PW\">PALAU</option>\n\t\t\t\t<option value=\"PS\">PALESTINIAN TERRITORY, OCCUPIED</option>\n\t\t\t\t<option value=\"PA\">PANAMA</option>\n\t\t\t\t<option value=\"PG\">PAPUA NEW GUINEA</option>\n\t\t\t\t<option value=\"PY\">PARAGUAY</option>\n\t\t\t\t<option value=\"PE\">PERU</option>\n\t\t\t\t<option value=\"PH\">PHILIPPINES</option>\n\t\t\t\t<option value=\"PN\">PITCAIRN</option>\n\t\t\t\t<option value=\"PL\">POLAND</option>\n\t\t\t\t<option value=\"PT\">PORTUGAL</option>\n\t\t\t\t<option value=\"PR\">PUERTO RICO</option>\n\t\t\t\t<option value=\"QA\">QATAR</option>\n\t\t\t\t<option value=\"RE\">REUNION</option>\n\t\t\t\t<option value=\"RO\">ROMANIA</option>\n\t\t\t\t<option value=\"RU\">RUSSIAN FEDERATION</option>\n\t\t\t\t<option value=\"RW\">RWANDA</option>\n\t\t\t\t<option value=\"SH\">SAINT HELENA</option>\n\t\t\t\t<option value=\"KN\">SAINT KITTS AND NEVIS</option>\n\t\t\t\t<option value=\"LC\">SAINT LUCIA</option>\n\t\t\t\t<option value=\"PM\">SAINT PIERRE AND MIQUELON</option>\n\t\t\t\t<option value=\"VC\">SAINT VINCENT AND THE GRENADINES</option>\n\t\t\t\t<option value=\"WS\">SAMOA</option>\n\t\t\t\t<option value=\"SM\">SAN MARINO</option>\n\t\t\t\t<option value=\"ST\">SAO TOME AND PRINCIPE</option>\n\t\t\t\t<option value=\"SA\">SAUDI ARABIA</option>\n\t\t\t\t<option value=\"SN\">SENEGAL</option>\n\t\t\t\t<option value=\"CS\">SERBIA AND MONTENEGRO</option>\n\t\t\t\t<option value=\"SC\">SEYCHELLES</option>\n\t\t\t\t<option value=\"SL\">SIERRA LEONE</option>\n\t\t\t\t<option value=\"SG\">SINGAPORE</option>\n\t\t\t\t<option value=\"SK\">SLOVAKIA</option>\n\t\t\t\t<option value=\"SI\">SLOVENIA</option>\n\t\t\t\t<option value=\"SB\">SOLOMON ISLANDS</option>\n\t\t\t\t<option value=\"SO\">SOMALIA</option>\n\t\t\t\t<option value=\"ZA\">SOUTH AFRICA</option>\n\t\t\t\t<option value=\"GS\">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>\n\t\t\t\t<option value=\"ES\">SPAIN</option>\n\t\t\t\t<option value=\"LK\">SRI LANKA</option>\n\t\t\t\t<option value=\"SD\">SUDAN</option>\n\t\t\t\t<option value=\"SR\">SURINAME</option>\n\t\t\t\t<option value=\"SJ\">SVALBARD AND JAN MAYEN</option>\n\t\t\t\t<option value=\"SZ\">SWAZILAND</option>\n\t\t\t\t<option value=\"SE\">SWEDEN</option>\n\t\t\t\t<option value=\"CH\">SWITZERLAND</option>\n\t\t\t\t<option value=\"SY\">SYRIAN ARAB REPUBLIC</option>\n\t\t\t\t<option value=\"TW\">TAIWAN, PROVINCE OF CHINA</option>\n\t\t\t\t<option value=\"TJ\">TAJIKISTAN</option>\n\t\t\t\t<option value=\"TZ\">TANZANIA, UNITED REPUBLIC OF</option>\n\t\t\t\t<option value=\"TH\">THAILAND</option>\n\t\t\t\t<option value=\"TL\">TIMOR-LESTE</option>\n\t\t\t\t<option value=\"TG\">TOGO</option>\n\t\t\t\t<option value=\"TK\">TOKELAU</option>\n\t\t\t\t<option value=\"TO\">TONGA</option>\n\t\t\t\t<option value=\"TT\">TRINIDAD AND TOBAGO</option>\n\t\t\t\t<option value=\"TN\">TUNISIA</option>\n\t\t\t\t<option value=\"TR\">TURKEY</option>\n\t\t\t\t<option value=\"TM\">TURKMENISTAN</option>\n\t\t\t\t<option value=\"TC\">TURKS AND CAICOS ISLANDS</option>\n\t\t\t\t<option value=\"TV\">TUVALU</option>\n\t\t\t\t<option value=\"UG\">UGANDA</option>\n\t\t\t\t<option value=\"UA\">UKRAINE</option>\n\t\t\t\t<option value=\"AE\">UNITED ARAB EMIRATES</option>\n\t\t\t\t<option value=\"GB\">UNITED KINGDOM</option>\n\t\t\t\t<option value=\"US\">UNITED STATES</option>\n\t\t\t\t<option value=\"UM\">UNITED STATES MINOR OUTLYING ISLANDS</option>\n\t\t\t\t<option value=\"UY\">URUGUAY</option>\n\t\t\t\t<option value=\"UZ\">UZBEKISTAN</option>\n\t\t\t\t<option value=\"VU\">VANUATU</option>\n\t\t\t\t<option value=\"VE\">VENEZUELA</option>\n\t\t\t\t<option value=\"VN\">VIET NAM</option>\n\t\t\t\t<option value=\"VG\">VIRGIN ISLANDS, BRITISH</option>\n\t\t\t\t<option value=\"VI\">VIRGIN ISLANDS, U.S.</option>\n\t\t\t\t<option value=\"WF\">WALLIS AND FUTUNA</option>\n\t\t\t\t<option value=\"EH\">WESTERN SAHARA</option>\n\t\t\t\t<option value=\"YE\">YEMEN</option>\n\t\t\t\t<option value=\"ZM\">ZAMBIA</option>\n\t\t\t\t<option value=\"ZW\">ZIMBABWE</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<label class=\"col-3 col-form-label\" for=\"regulationType\">Regulation Type</label>\n\t\t<div class=\"col-4\">\n\t\t\t<select class=\"form-control\" id=\"regulationType\" [formControl]=\"searchForm.controls['regulationType']\">\n\t\t\t\t<option value=\"\" selected>All regulation types</option>\n\t\t\t\t<option value=\"A\">Annual financial and audit reports</option>\n\t\t\t\t<option value=\"B\">Half-year financial and audit reports or limited reviews</option>\n\t\t\t\t<option value=\"C\">Payments to governments</option>\n\t\t\t\t<option value=\"D\">Choice of home Member State</option>\n\t\t\t\t<option value=\"E\">Inside information</option>\n\t\t\t\t<option value=\"F\">Notifications concerning voting rights</option>\n\t\t\t\t<option value=\"G\">Acquisition or disposal of the issuer's own shares</option>\n\t\t\t\t<option value=\"H\">Total number of voting rights and capital</option>\n\t\t\t\t<option value=\"I\">Changes in the rights attaching to the classes of shares or securities</option>\n\t\t\t\t<option value=\"J\">All information not falling under points above</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group row\">\n\t\t<button class=\"btn btn-primary\" type=\"submit\">Search</button>\n\t</div>\n</div>\n</form>\n\n\n<h3 *ngIf=\"reports\">Search results</h3>\n\n<span *ngIf=\"!reports || reports.length == 0\">No search results</span>\n\n<table *ngIf=\"reports && reports.length !== 0\" class=\"table\">\n\t<thead>\n\t\t<th>Submission date</th>\n\t\t<th>Report ID</th>\n\t\t<th>Issuer name</th>\n\t\t<th></th>\n\t</thead>\n\t<tbody>\n  \t\t<tr *ngFor=\"let report of reports\">\n  \t\t\t<td>{{ report.timestamp.submission | date : 'medium'}}</td>\n  \t\t\t<td>{{ report.reportIdentification.reportId }}</td>\n  \t\t\t<td>{{ report.issuerIdentification.name }}</td>\n  \t\t\t<td>\n  \t\t\t\t<a href=\"{{ report.reportSource.NCAReportURL}}\">Download</a>\n  \t\t\t</td>\n  \t\t</tr>\n  \t</tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(fb, _dataService) {
        this._dataService = _dataService;
        this.searchForm = fb.group({
            'issuerName': [''],
            'issuerLEI': [''],
            'issuerHomeMemberState': [''],
            'regulationType': ['']
        });
    }
    SearchComponent.prototype.onSubmit = function (value) {
        var _this = this;
        var issuerName = this.searchForm.get('issuerName').value;
        var issuerLEI = this.searchForm.get('issuerLEI').value;
        var issuerHomeMemberState = this.searchForm.get('issuerHomeMemberState').value;
        var regulationType = this.searchForm.get('regulationType').value;
        this._dataService.searchReports('issuerName=' + issuerName + '&issuerLEI=' + issuerLEI + '&issuerHomeMemberState=' + issuerHomeMemberState + '&regulationType=' + regulationType)
            .then(function (reports) { return _this.reports = reports; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map