"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var chai = require("chai").use(require("chai-as-promised"));
//data variables
var yaml = require('js-yaml');
var fs = require('fs');
var cred = yaml.safeLoad(fs.readFileSync('./Test/testData/users.yml', 'utf8'));
var expect = chai.expect;
var until = protractor_1.protractor.ExpectedConditions;
var floydSitePage = /** @class */ (function (_super) {
    __extends(floydSitePage, _super);
    function floydSitePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plusIcon = protractor_1.element(protractor_1.by.xpath('//*[name()="svg" and @data-icon="plus"]'));
        _this.portName = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="name"]'));
        return _this;
    }
    floydSitePage.prototype.clickHeading = function (heading) {
        return __awaiter(this, void 0, void 0, function () {
            var label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        label = protractor_1.element(protractor_1.by.xpath('//h2[text()="' + heading + '"]'));
                        return [4 /*yield*/, label.isPresent().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!text) return [3 /*break*/, 2];
                                                return [4 /*yield*/, label.click()];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.clickPlusIcon = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.plusIcon), 500000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.plusIcon.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.clickPortfolioType = function (portfolio) {
        return __awaiter(this, void 0, void 0, function () {
            var selectPortfotioType, portfolioType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectPortfotioType = protractor_1.element(protractor_1.by.xpath('(//div[@class="mat-select-arrow"])[2]'));
                        portfolioType = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + portfolio + '")]'));
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, selectPortfotioType.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(portfolioType), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, portfolioType.click()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.portfolioName = function (portfolio) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.portName), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.portName.sendKeys(portfolio)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.clickSaveBtn = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var saveBtn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        saveBtn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + text + '")]'));
                        return [4 /*yield*/, saveBtn.isPresent().then(function (display) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!display) return [3 /*break*/, 3];
                                                return [4 /*yield*/, saveBtn.click()];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.verifyTabsFloydSite = function (tabs) {
        return __awaiter(this, void 0, void 0, function () {
            var tab, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = tabs.split(',');
                        _loop_1 = function (i) {
                            var label;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        label = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"' + tab[i] + '")]'));
                                        return [4 /*yield*/, label.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, label.click()];
                                                            case 1:
                                                                _a.sent();
                                                                return [4 /*yield*/, expect(text).to.equal(tab[i])];
                                                            case 2:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tab.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    floydSitePage.prototype.attributeFloydSite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var portfolioName, portfolioType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        portfolioName = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Portfolio Name"]'));
                        portfolioType = protractor_1.element(protractor_1.by.xpath('//mat-select[@aria-label="Portfolio type"]'));
                        return [4 /*yield*/, expect(portfolioName.isDisplayed()).to.eventually.equals(true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(portfolioType.isDisplayed()).to.eventually.equals(true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return floydSitePage;
}(BasePage_1.BasePage));
exports.floydSitePage = floydSitePage;
//# sourceMappingURL=floydSitePage.js.map