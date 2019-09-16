"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var ManagementAgreementDataPage_1 = require("../Pages/ManagementAgreementDataPage");
var siteDetailPage_1 = require("../Pages/siteDetailPage");
var floydSitePage_1 = require("../Pages/floydSitePage");
var reportsPage_1 = require("../Pages/reportsPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));
var manageAgreePage = new ManagementAgreementDataPage_1.ManagementAgreementDataPage();
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var sitedetail = new siteDetailPage_1.siteDetailPage();
var floydSite = new floydSitePage_1.floydSitePage();
var report = new reportsPage_1.reports();
cucumber_1.Then(/^verify dashboard option on portal "([^"]*)"$/, { timeout: 5 * 50000 }, function (dashboardOption) { return __awaiter(_this, void 0, void 0, function () {
    var dashboard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dashboard = floyd[dashboardOption]['tab'];
                return [4 /*yield*/, sitedetail.advanceSearchRefinementCriteria(dashboard)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on my dashboard "([^"]*)"$/, { timeout: 5 * 50000 }, function (dashboardOption) { return __awaiter(_this, void 0, void 0, function () {
    var dashboard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dashboard = floyd[dashboardOption]['tab'];
                return [4 /*yield*/, floydSite.clickSaveBtn(dashboard)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify executed date on my dashboard$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, report.executedDate()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify management agreement count "([^"]*)"$/, { timeout: 5 * 50000 }, function (management) { return __awaiter(_this, void 0, void 0, function () {
    var count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                count = floyd[management]['count'];
                return [4 /*yield*/, sitedetail.verifyDataUnderPropertyInformation(count)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify reports on my dashboard "([^"]*)"$/, { timeout: 5 * 50000 }, function (reports) { return __awaiter(_this, void 0, void 0, function () {
    var report;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                report = floyd[reports]['report'];
                return [4 /*yield*/, sitedetail.verifyLink(report)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click management agreement on my dashboard "([^"]*)"$/, { timeout: 5 * 50000 }, function (reportLink) { return __awaiter(_this, void 0, void 0, function () {
    var managementLink;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                managementLink = floyd[reportLink]['link'];
                return [4 /*yield*/, sitedetail.selectSite(managementLink)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify management agreement report data "([^"]*)"$/, { timeout: 5 * 50000 }, function (tableHeader) { return __awaiter(_this, void 0, void 0, function () {
    var values;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                values = floyd[tableHeader]['tableHeader'];
                return [4 /*yield*/, sitedetail.verifyDataUnderPropertyInformation(values)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify active tenant should be present under rent roll report "([^"]*)"$/, { timeout: 5 * 50000000 }, function (colName) { return __awaiter(_this, void 0, void 0, function () {
    var columnName, counter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                columnName = floyd[colName]['colName'];
                counter = floyd[colName]['count'];
                return [4 /*yield*/, report.verifyActiveTenant(columnName, counter)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^search the rent roll report list "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    var filterData, count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filterData = floyd[text]['siteNumber'];
                count = floyd[text]['count'];
                return [4 /*yield*/, manageAgreePage.searchBox(filterData, count)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify ascending and descending order of reports "([^"]*)"$/, { timeout: 5 * 50000 }, function (colName) { return __awaiter(_this, void 0, void 0, function () {
    var col, columnName, counter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                col = floyd[colName]['name'];
                columnName = floyd[colName]['colName'];
                counter = floyd[colName]['count'];
                return [4 /*yield*/, manageAgreePage.verifyOwnerOrder(columnName, counter)];
            case 1:
                _a.sent();
                return [4 /*yield*/, manageAgreePage.clickAscendingAndDescendingOrder(col)];
            case 2:
                _a.sent();
                return [4 /*yield*/, manageAgreePage.verifyDescendingOwnerOrder(columnName, counter)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify rent roll report should be paginated "([^"]*)"$/, { timeout: 5 * 50000 }, function (count) { return __awaiter(_this, void 0, void 0, function () {
    var siteData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                siteData = floyd[count]['sitesCount'];
                return [4 /*yield*/, manageAgreePage.verifySites(siteData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify rent roll report should be downloaded "([^"]*)"$/, { timeout: 5 * 50000 }, function (exportExcel) { return __awaiter(_this, void 0, void 0, function () {
    var exportFile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exportFile = floyd[exportExcel]['button'];
                return [4 /*yield*/, manageAgreePage.clickExportFile(exportFile)];
            case 1:
                _a.sent();
                return [4 /*yield*/, manageAgreePage.verifyDownloadFilePdf()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^filter the rent roll report list "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    var filterData, filterColumn, count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filterData = floyd[text]['siteNumber'];
                filterColumn = floyd[text]['sitecolumn'];
                count = floyd[text]['count'];
                return [4 /*yield*/, manageAgreePage.searchFilter(filterData, count, filterColumn)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify logo and rent roll present on page "([^"]*)"$/, { timeout: 5 * 50000 }, function (reports) { return __awaiter(_this, void 0, void 0, function () {
    var txt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                txt = floyd[reports]['attributeData'];
                return [4 /*yield*/, sitedetail.verifyAttributeOnLeasesTab(txt)];
            case 1:
                _a.sent();
                return [4 /*yield*/, report.verifyLogo()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify table header of rent roll report "([^"]*)"$/, { timeout: 5 * 50000 }, function (tableHeader) { return __awaiter(_this, void 0, void 0, function () {
    var thData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thData = floyd[tableHeader]['thReportHeader'];
                return [4 /*yield*/, sitedetail.advanceSearchTableHeader(thData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify that records should be displayed on rent roll report "([^"]*)"$/, { timeout: 5 * 50000 }, function (count) { return __awaiter(_this, void 0, void 0, function () {
    var siteData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                siteData = floyd[count]['recordCount'];
                return [4 /*yield*/, manageAgreePage.verifySites(siteData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify no parameter should be passed to generate rent roll report$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, report.verifyReport()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter start date on forecast report "([^"]*)"$/, { timeout: 5 * 50000 }, function (date) { return __awaiter(_this, void 0, void 0, function () {
    var startDate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startDate = floyd[date]['startDate'];
                return [4 /*yield*/, report.setStartDate(startDate)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Enter end date on forecast report "([^"]*)"$/, { timeout: 5 * 50000 }, function (date) { return __awaiter(_this, void 0, void 0, function () {
    var endDate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endDate = floyd[date]['endDate'];
                return [4 /*yield*/, report.setEndDate(endDate)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on generate report button "([^"]*)"$/, { timeout: 5 * 50000 }, function (generateReport) { return __awaiter(_this, void 0, void 0, function () {
    var report;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                report = floyd[generateReport]['button'];
                return [4 /*yield*/, manageAgreePage.clickExportFile(report)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify default start date on forecast report "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    var month;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                month = floyd[text]['monthStart'];
                return [4 /*yield*/, report.defaultStartDate(month)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify default end date on forecast report "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    var month;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                month = floyd[text]['monthEnd'];
                return [4 /*yield*/, report.defaultEndDate(month)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=reportsSteps.js.map