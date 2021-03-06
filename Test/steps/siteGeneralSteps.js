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
var siteDetailPage_1 = require("../Pages/siteDetailPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var site = yaml.safeLoad(fs.readFileSync('./Test/testData/siteGeneral.yml', 'utf8'));
var map = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var sitedetail = new siteDetailPage_1.siteDetailPage();
cucumber_1.Then(/^verify edit and site inspection icon are not present on site header "([^"]*)"$/, { timeout: 5 * 50000 }, function (clickable) { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = site[clickable]['tabData'];
                return [4 /*yield*/, sitedetail.editSiteNOtPresent()];
            case 1:
                _a.sent();
                return [4 /*yield*/, sitedetail.siteInspectionNOtPresent()];
            case 2:
                _a.sent();
                return [4 /*yield*/, sitedetail.verifyLeasesTabData(data)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify management agreement are not present on property tab "([^"]*)"$/, { timeout: 5 * 50000 }, function (propertyData) { return __awaiter(_this, void 0, void 0, function () {
    var thData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thData = map[propertyData]['thProperty'];
                return [4 /*yield*/, sitedetail.managementAgreementNotPresent()];
            case 1:
                _a.sent();
                return [4 /*yield*/, sitedetail.verifyContactGroupData(thData)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify links to linkedIn page and newsroom page "([^"]*)"$/, { timeout: 5 * 50000 }, function (links) { return __awaiter(_this, void 0, void 0, function () {
    var link;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                link = site[links]['linkText'];
                return [4 /*yield*/, sitedetail.verifyLink(link)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify click to call function under contact tab$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sitedetail.clickOnLinks()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify footer on home page "([^"]*)"$/, { timeout: 5 * 50000 }, function (footer) { return __awaiter(_this, void 0, void 0, function () {
    var footerText;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                footerText = site[footer]['footerText'];
                return [4 /*yield*/, sitedetail.verifyDataUnderPropertyInformation(footerText)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify help tab on home page$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sitedetail.verifyHelpTab()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify search box on main menu$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sitedetail.mainMenuSearch()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify search box will display suggestions to match the text "([^"]*)"$/, { timeout: 5 * 50000 }, function (text) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sitedetail.verifySearchSuggestion(text)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify table header of advance search "([^"]*)"$/, { timeout: 5 * 50000 }, function (tableHeader) { return __awaiter(_this, void 0, void 0, function () {
    var thData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thData = site[tableHeader]['thAdvanceSearch'];
                return [4 /*yield*/, sitedetail.advanceSearchTableHeader(thData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^click on advance search$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, sitedetail.clickOnAdvanceSearch()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify labels of advance search "([^"]*)"$/, { timeout: 5 * 50000 }, function (label) { return __awaiter(_this, void 0, void 0, function () {
    var txt1, txt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                txt1 = site[label]['advanceLabel'];
                txt = site[label]['advanceLabelHeader'];
                return [4 /*yield*/, sitedetail.verifyLabelsUnderAdvanceSearch(txt)];
            case 1:
                _a.sent();
                return [4 /*yield*/, sitedetail.verifyDataUnderPropertyInformation(txt1)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify advance search should have refinement criteria "([^"]*)"$/, { timeout: 5 * 50000 }, function (searchCriteria) { return __awaiter(_this, void 0, void 0, function () {
    var txt1, txt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                txt1 = site[searchCriteria]['advanceLabel'];
                txt = site[searchCriteria]['advanceLabelHeader'];
                return [4 /*yield*/, sitedetail.advanceSearchRefinementCriteria(txt)];
            case 1:
                _a.sent();
                return [4 /*yield*/, sitedetail.verifyDataUnderPropertyInformation(txt1)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=siteGeneralSteps.js.map