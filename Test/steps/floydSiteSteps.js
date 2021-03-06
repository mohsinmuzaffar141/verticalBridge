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
var floydSitePage_1 = require("../Pages/floydSitePage");
var siteDetailPage_1 = require("../Pages/siteDetailPage");
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var floyd = yaml.safeLoad(fs.readFileSync('./Test/testData/floydSite.yml', 'utf8'));
var chai = require("chai").use(require("chai-as-promised"));
var expect = chai.expect;
var floydSite = new floydSitePage_1.floydSitePage();
var sitedetail = new siteDetailPage_1.siteDetailPage();
cucumber_1.When(/^Click on additional features link "([^"]*)"$/, { timeout: 5 * 50000 }, function (link) { return __awaiter(_this, void 0, void 0, function () {
    var hyperlink;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hyperlink = floyd[link]['hyperLink'];
                return [4 /*yield*/, sitedetail.selectSite(hyperlink)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When(/^Click on add a portfolio "([^"]*)"$/, { timeout: 5 * 50000 }, function (addPortfolio) { return __awaiter(_this, void 0, void 0, function () {
    var portfolio;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portfolio = floyd[addPortfolio]['portfolio'];
                return [4 /*yield*/, floydSite.clickHeading(portfolio)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on plus icon button$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, floydSite.clickPlusIcon()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on portfolio type "([^"]*)"$/, { timeout: 5 * 50000 }, function (portfolioType) { return __awaiter(_this, void 0, void 0, function () {
    var portfolio;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portfolio = floyd[portfolioType]['portfolio'];
                return [4 /*yield*/, floydSite.clickPortfolioType(portfolio)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Select portfolio name "([^"]*)"$/, { timeout: 5 * 50000 }, function (portfolioName) { return __awaiter(_this, void 0, void 0, function () {
    var portfolio;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                portfolio = floyd[portfolioName]['portfolioName'];
                return [4 /*yield*/, floydSite.portfolioName(portfolio)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^Click on save button "([^"]*)"$/, { timeout: 5 * 50000 }, function (btnName) { return __awaiter(_this, void 0, void 0, function () {
    var buttonName;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buttonName = floyd[btnName]['buttonName'];
                return [4 /*yield*/, floydSite.clickSaveBtn(buttonName)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify portfolio should be created "([^"]*)"$/, { timeout: 5 * 50000 }, function (confirmationMessage) { return __awaiter(_this, void 0, void 0, function () {
    var txt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                txt = floyd[confirmationMessage]['confirmationMessage'];
                return [4 /*yield*/, sitedetail.advanceSearchRefinementCriteria(txt)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify tabs for portfolio "([^"]*)"$/, { timeout: 5 * 50000 }, function (tabs) { return __awaiter(_this, void 0, void 0, function () {
    var tab;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tab = floyd[tabs]['tabs'];
                return [4 /*yield*/, floydSite.verifyTabsFloydSite(tab)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^verify attributes on floyd site$/, { timeout: 5 * 50000 }, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, floydSite.attributeFloydSite()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=floydSiteSteps.js.map