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
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var manageAgreepage = new ManagementAgreementDataPage_1.ManagementAgreementDataPage();
//const login: LoginPage = new LoginPage();
cucumber_1.When(/^I click to the select partner view button$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.clickonsearchbutton()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^selects the "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.entersearchvalue(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click the select button$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.clickselectbutton()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on my sites button$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.clickMySites()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify managment agreement data "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifyAgreementData(text)];
            case 1:
                _a.sent();
                return [4 /*yield*/, manageAgreepage.verifyOwnerName(text)];
            case 2:
                _a.sent();
                return [4 /*yield*/, manageAgreepage.verifyNoOfsites(text)];
            case 3:
                _a.sent();
                return [4 /*yield*/, manageAgreepage.verifyRevenue(text)];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify owner name should be sorted in ascending order "([^"]*)"$/, { timeout: 5 * 50000 }, function (colName) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifyOwnerOrder(colName)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify revenue "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifyRevenue(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^I click on relationship "([^"]*)"$/, { timeout: 5 * 50000 }, function (portfolioName) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.getPortfolioList(portfolioName)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on filter on\/off tab$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.clickFilterBtn()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify filter is enabled$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifyFilter()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify that sites should be displayed "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifySites(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^search the management agreement list "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.searchbox(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on ascending and descending order tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (colName) { return __awaiter(_this, void 0, void 0, function () {
    var col;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                col = cred[colName]['name'];
                return [4 /*yield*/, manageAgreepage.verifyOwnerOrder(colName)];
            case 1:
                _a.sent();
                return [4 /*yield*/, manageAgreepage.clickAscendingAndDescendingOrder(col)];
            case 2:
                _a.sent();
                return [4 /*yield*/, manageAgreepage.verifyDescendingOwnerOrder(colName)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on export to excel button "([^"]*)"$/, { timeout: 5 * 50000 }, function (exportExcel) { return __awaiter(_this, void 0, void 0, function () {
    var exportfile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exportfile = cred[exportExcel]['button'];
                return [4 /*yield*/, manageAgreepage.clickEcportFile(exportfile)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify the file should be downloaded$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, manageAgreepage.verifyDownloadFile()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=ManagemantAgreementSteps.js.map