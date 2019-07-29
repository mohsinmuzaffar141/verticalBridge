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
var ManagementAgreementDataPage = /** @class */ (function (_super) {
    __extends(ManagementAgreementDataPage, _super);
    function ManagementAgreementDataPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectpartner = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper' and text()='Select Partner View']"));
        _this.searchfield = protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-form-field-infix']//input)[1]"));
        _this.selectbtn = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper' and text()='Select']"));
        _this.mysite_btn = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-button-wrapper" and text()="My Sites"]'));
        _this.filter_btn = protractor_1.element(protractor_1.by.xpath('//span[text()="Filter On/Off"]'));
        _this.filter_box = protractor_1.element(protractor_1.by.xpath('//input[@id="filter-siteNo"]'));
        _this.verifySite = protractor_1.element(protractor_1.by.xpath('//div[@id="reportSummary"]//div'));
        _this.search_txt = protractor_1.element(protractor_1.by.xpath('//input[@id="GlobalSearchInput"]'));
        _this.searchIcon = protractor_1.element(protractor_1.by.xpath('//mat-icon[@id="SearchIcon"]'));
        _this.verfySearch = protractor_1.element(protractor_1.by.xpath('(//tbody[@class="ui-table-tbody"])[2]'));
        _this.removeFilter_btn = protractor_1.element(protractor_1.by.xpath('//span[@class="filterX hidden showX"]'));
        return _this;
    }
    ManagementAgreementDataPage.prototype.clickonsearchbutton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.selectpartner), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectpartner.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.searchfield), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.entersearchvalue = function (searchvalue) {
        return __awaiter(this, void 0, void 0, function () {
            var data, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchfield.click()];
                    case 1:
                        _a.sent();
                        data = cred[searchvalue]['name'];
                        return [4 /*yield*/, this.searchfield.sendKeys(data)];
                    case 2:
                        _a.sent();
                        value = protractor_1.element(protractor_1.by.xpath('//span[text()=" ' + data + ' "]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(value), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, value.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.selectbtn), 5000, 'Element taking too long to appear in the DOM')];
                    case 5:
                        _a.sent();
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.clickselectbutton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectbtn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = protractor_1.element(protractor_1.by.xpath("//h1[text()='RMR Group']")).getText();
                        title = "RMR Group";
                        return [4 /*yield*/, expect(path).to.eventually.equal(title)];
                    case 1:
                        //await expect(path).to.equal(title);
                        if (_a.sent()) {
                            console.log("Passed");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.clickMySites = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.mysite_btn), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mysite_btn.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyAgreementData = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var agreementData, managmentAgreemnet;
            return __generator(this, function (_a) {
                agreementData = cred[value]['managementData'];
                managmentAgreemnet = protractor_1.element(protractor_1.by.xpath('//div[@class="col-portfolioName ng-star-inserted" and text()="' + agreementData + '"]'));
                expect(managmentAgreemnet.isDisplayed()).to.eventually.equals(agreementData);
                return [2 /*return*/];
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyOwnerName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerNameData, ownerName;
            return __generator(this, function (_a) {
                ownerNameData = cred[name]['owner_name'];
                ownerName = protractor_1.element(protractor_1.by.xpath('//div[@class="col-ownerName ng-star-inserted" and text()="' + ownerNameData + '"]'));
                expect(ownerName.isDisplayed()).to.eventually.equals(ownerNameData);
                return [2 /*return*/];
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyNoOfsites = function (siteNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var sitesData, numberofSites;
            return __generator(this, function (_a) {
                sitesData = cred[siteNumber]['numberOfSites'];
                numberofSites = protractor_1.element(protractor_1.by.xpath('//div[@class="col-siteCount ng-star-inserted" and text()="' + sitesData + '"]'));
                expect(numberofSites.isDisplayed()).to.eventually.equals(sitesData);
                return [2 /*return*/];
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyRevenue = function (revenue) {
        return __awaiter(this, void 0, void 0, function () {
            var revenueData, revenueValue;
            return __generator(this, function (_a) {
                revenueData = cred[revenue]['revenue'];
                revenueValue = protractor_1.element(protractor_1.by.xpath('//div[@class="col-siteCount ng-star-inserted" and text()="' + revenueData + '"]'));
                expect(revenueValue.isDisplayed()).to.eventually.equals(revenueData);
                return [2 /*return*/];
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyOwnerOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        table = protractor_1.element.all(protractor_1.by.xpath('//tr[@class="ui-selectable-row ui-state-highlight ng-star-inserted"]'));
                        return [4 /*yield*/, table.then(function (txt) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var NAMES, i, ownerName, arr;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                NAMES = [];
                                                i = 1;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i <= txt.length)) return [3 /*break*/, 4];
                                                ownerName = protractor_1.element(protractor_1.by.xpath('(//div[@class="col-ownerName ng-star-inserted"])[' + i + ']'));
                                                return [4 /*yield*/, ownerName.getText().then(function (text) {
                                                        return __awaiter(this, void 0, void 0, function () {
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, NAMES.push(text)];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3:
                                                i++;
                                                return [3 /*break*/, 1];
                                            case 4:
                                                arr = NAMES.sort(function (a, b) { return a - b; });
                                                if (NAMES === arr) {
                                                    console.log("Owner Name is in Ascending Order");
                                                }
                                                else {
                                                    console.log("Error Occurred");
                                                }
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
        });
    };
    ManagementAgreementDataPage.prototype.getPortfolioList = function (portfolioName) {
        return __awaiter(this, void 0, void 0, function () {
            var ListData, portfolioList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ListData = cred[portfolioName]['name'];
                        return [4 /*yield*/, this.searchfield.click()];
                    case 1:
                        _a.sent();
                        portfolioList = protractor_1.element.all(protractor_1.by.xpath('//span[@class="mat-option-text"]'));
                        return [4 /*yield*/, portfolioList.filter(function (ele) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        return [2 /*return*/, ele.isDisplayed()];
                                    });
                                });
                            }).then(function (filteredElement) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("filteredElement");
                                                console.log(filteredElement.length);
                                                return [4 /*yield*/, expect(filteredElement.toString()).to.eventually.contain(ListData)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.clickFilterBtn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.filter_btn), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.filter_btn.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.filter_box.isEnabled()).to.eventually.equals(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifySites = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var siteData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteData = cred[count]['sitesCount'];
                        return [4 /*yield*/, this.verifySite.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var sp, req;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                sp = text.split('of');
                                                req = sp[1].split(" ");
                                                console.log(text);
                                                console.log(req[1]);
                                                return [4 /*yield*/, expect(req[1]).to.equals(siteData)];
                                            case 1:
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
        });
    };
    ManagementAgreementDataPage.prototype.searchbox = function (searchValue) {
        return __awaiter(this, void 0, void 0, function () {
            var filterData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterData = cred[searchValue]['siteNumber'];
                        return [4 /*yield*/, this.search_txt.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.search_txt.sendKeys(filterData)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.searchIcon.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.verfySearch), 5000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(this.verfySearch.getText()).to.eventually.contain(filterData)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.searchFilter = function (searchValue) {
        return __awaiter(this, void 0, void 0, function () {
            var filterData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filterData = cred[searchValue]['siteNumber'];
                        return [4 /*yield*/, this.filter_box.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.filter_box.sendKeys(filterData)];
                    case 2:
                        _a.sent();
                        protractor_1.browser.sleep(2000);
                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.verfySearch), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(this.verfySearch.getText()).to.eventually.contain(filterData)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyFilterPresent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.filter_box.isPresent()).to.eventually.equals(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifySiteNumber = function (siteNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var data, siteNo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cred[siteNumber]['siteNumber'];
                        siteNo = protractor_1.element(protractor_1.by.xpath('//div[@class="ng-star-inserted"]/a[text()="' + data + '"]'));
                        return [4 /*yield*/, siteNo.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(text).to.equals(data)];
                                            case 1:
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
        });
    };
    ManagementAgreementDataPage.prototype.verifySiteData = function (sitedata) {
        return __awaiter(this, void 0, void 0, function () {
            var data, siteData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = cred[sitedata]['name'];
                        siteData = protractor_1.element(protractor_1.by.xpath('//td[@class="ng-star-inserted"]//div[text()=" ' + data + ' "]'));
                        return [4 /*yield*/, siteData.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(text).to.equals(data)];
                                            case 1:
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
        });
    };
    ManagementAgreementDataPage.prototype.verifySiteOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        table = protractor_1.element.all(protractor_1.by.xpath('//tr[@class="ui-selectable-row ng-star-inserted"]'));
                        return [4 /*yield*/, table.then(function (txt) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var NAMES, i, ownerName, arr;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                NAMES = [];
                                                i = 1;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i <= txt.length)) return [3 /*break*/, 4];
                                                ownerName = protractor_1.element(protractor_1.by.xpath('(//div[@class="col-siteName ng-star-inserted"])[' + i + ']'));
                                                return [4 /*yield*/, ownerName.getText().then(function (text) {
                                                        return __awaiter(this, void 0, void 0, function () {
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0: return [4 /*yield*/, NAMES.push(text)];
                                                                    case 1:
                                                                        _a.sent();
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        });
                                                    })];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3:
                                                i++;
                                                return [3 /*break*/, 1];
                                            case 4:
                                                arr = NAMES.sort(function (a, b) { return a - b; });
                                                if (NAMES === arr) {
                                                    console.log("Site Name is in Ascending Order");
                                                }
                                                else {
                                                    console.log("Error Occurred");
                                                }
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
        });
    };
    ManagementAgreementDataPage.prototype.removeFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeFilter_btn.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ManagementAgreementDataPage;
}(BasePage_1.BasePage));
exports.ManagementAgreementDataPage = ManagementAgreementDataPage;
//# sourceMappingURL=ManagementAgreementDataPage.js.map