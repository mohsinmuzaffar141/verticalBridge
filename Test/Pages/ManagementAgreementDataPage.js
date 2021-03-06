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
        _this.selectPartner = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper' and text()='Select Partner View']"));
        _this.searchField = protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-form-field-infix']//input)[1]"));
        _this.selectBtn = protractor_1.element(protractor_1.by.xpath("//span[@class='mat-button-wrapper' and text()='Select']"));
        _this.mySite_btn = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-button-wrapper" and text()="My Sites"]'));
        _this.filter_btn = protractor_1.element(protractor_1.by.xpath('//span[text()="Filter On/Off"]'));
        _this.filter_box = protractor_1.element(protractor_1.by.xpath('//input[@id="filter-siteNo"]'));
        _this.verifySite = protractor_1.element(protractor_1.by.xpath('//div[@id="reportSummary"]//div'));
        _this.search_txt = protractor_1.element(protractor_1.by.xpath('//input[@id="GlobalSearchInput"]'));
        _this.searchIcon = protractor_1.element(protractor_1.by.xpath('//mat-icon[@id="SearchIcon"]'));
        _this.removeFilter_btn = protractor_1.element(protractor_1.by.xpath('//span[@id="x-siteNo"]'));
        _this.text = protractor_1.element(protractor_1.by.xpath('//h2[text()="Select Partner View"]'));
        _this.cancel = protractor_1.element(protractor_1.by.xpath('//span[text()="Cancel"]'));
        _this.table = protractor_1.element(protractor_1.by.xpath('//div[@class="ui-scrollpanel-content"]'));
        return _this;
    }
    ManagementAgreementDataPage.prototype.clickOnSearchButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.selectPartner), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectPartner.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.searchField), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.enterSearchValue = function (searchValue) {
        return __awaiter(this, void 0, void 0, function () {
            var data, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchField.click()];
                    case 1:
                        _a.sent();
                        data = cred[searchValue]['name'];
                        return [4 /*yield*/, this.searchField.sendKeys(data)];
                    case 2:
                        _a.sent();
                        value = protractor_1.element(protractor_1.by.xpath('//span[text()=" ' + data + ' "]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(value), 5000, 'Element taking too long to appear in the DOM')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, value.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.selectBtn), 5000, 'Element taking too long to appear in the DOM')];
                    case 5:
                        _a.sent();
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.clickSelectButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectBtn.click()];
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
    ManagementAgreementDataPage.prototype.clickMySites = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.mySite_btn), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mySite_btn.click()];
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
    ManagementAgreementDataPage.prototype.verifyAgreementData = function (value, colName) {
        return __awaiter(this, void 0, void 0, function () {
            var managementAgreement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        managementAgreement = protractor_1.element(protractor_1.by.xpath('//div[@class="' + colName + ' ng-star-inserted" and contains(text(),"' + value + '")]'));
                        return [4 /*yield*/, managementAgreement.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(text).to.equals(value)];
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
    ManagementAgreementDataPage.prototype.verifyOwnerName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var ownerNameData, ownerName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ownerNameData = cred[name]['owner_name'];
                        ownerName = protractor_1.element(protractor_1.by.xpath('//div[@class="col-ownerName ng-star-inserted" and contains(text(),"' + ownerNameData + '")]'));
                        return [4 /*yield*/, ownerName.getText().then(function (value) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(value).to.equals(ownerNameData)];
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
    ManagementAgreementDataPage.prototype.verifyNoOfSites = function (siteNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var sitesData, numberOfSites;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sitesData = cred[siteNumber]['numberOfSites'];
                        numberOfSites = protractor_1.element(protractor_1.by.xpath('//div[@class="col-siteCount ng-star-inserted" and contains(text(),"' + sitesData + '")]'));
                        return [4 /*yield*/, numberOfSites.getText().then(function (value) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(value).to.equals(sitesData)];
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
    ManagementAgreementDataPage.prototype.verifyRevenue = function (revenue) {
        return __awaiter(this, void 0, void 0, function () {
            var revenueData, revenueValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        revenueData = cred[revenue]['revenue'];
                        revenueValue = protractor_1.element.all(protractor_1.by.xpath('//div[@class="right ng-star-inserted"]'));
                        return [4 /*yield*/, revenueValue.getText().then(function (value) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var i;
                                    return __generator(this, function (_a) {
                                        for (i = 0; i < value.length; i++) {
                                            console.log(value[i]);
                                        }
                                        return [2 /*return*/];
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
    ManagementAgreementDataPage.prototype.verifyOwnerOrder = function (colName, counter) {
        return __awaiter(this, void 0, void 0, function () {
            var NAMES, table, unsortedArr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        NAMES = [];
                        table = protractor_1.element.all(protractor_1.by.xpath('(//tbody[@class="ui-table-tbody"])[' + counter + ']//tr'));
                        return [4 /*yield*/, table.then(function (txt) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var i, ownerName;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                i = 1;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i <= txt.length)) return [3 /*break*/, 4];
                                                ownerName = protractor_1.element(protractor_1.by.xpath('(//div[@class="col-' + colName + ' ng-star-inserted"])[' + i + ']'));
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
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        console.log('Sorted Array sorted default: ' + NAMES);
                        console.log("==========================================");
                        unsortedArr = [];
                        unsortedArr = NAMES.sort();
                        return [4 /*yield*/, expect(unsortedArr).to.be.equal(NAMES)];
                    case 2:
                        _a.sent();
                        console.log('Sorted Array sorted: ' + unsortedArr);
                        console.log("==========================================");
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyDescendingOwnerOrder = function (colName, counter) {
        return __awaiter(this, void 0, void 0, function () {
            var NAMES, table, unsortedArr, unsortedArr1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        NAMES = [];
                        table = protractor_1.element.all(protractor_1.by.xpath('(//tbody[@class="ui-table-tbody"])[' + counter + ']//tr'));
                        return [4 /*yield*/, table.then(function (txt) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var i, ownerName;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                i = 1;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i <= txt.length)) return [3 /*break*/, 4];
                                                ownerName = protractor_1.element(protractor_1.by.xpath('(//div[@class="col-' + colName + ' ng-star-inserted"])[' + i + ']'));
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
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.sent();
                        console.log('Sorted Array sorted Default: ' + NAMES);
                        console.log("==========================================");
                        unsortedArr = [];
                        unsortedArr1 = [];
                        unsortedArr = NAMES.sort();
                        unsortedArr1 = unsortedArr.reverse();
                        return [4 /*yield*/, expect([unsortedArr1]).to.not.equal([NAMES])];
                    case 2:
                        _a.sent();
                        console.log('Sorted Array unSorted: ' + unsortedArr1);
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
                        return [4 /*yield*/, this.searchField.click()];
                    case 1:
                        _a.sent();
                        portfolioList = protractor_1.element.all(protractor_1.by.xpath('//span[@class="mat-option-text"]'));
                        return [4 /*yield*/, portfolioList.getText().then(function (ele) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var i;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                i = 0;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i < ele.length)) return [3 /*break*/, 4];
                                                console.log(ele[i]);
                                                return [4 /*yield*/, expect(ele).to.contain(ListData)];
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
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.text.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.cancel.click()];
                    case 4:
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
                    case 0: return [4 /*yield*/, expect(this.filter_box.isEnabled()).to.eventually.equal(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifySites = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifySite.getText().then(function (text) {
                            return __awaiter(this, void 0, void 0, function () {
                                var sp, req;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            sp = text.split('of');
                                            req = sp[1].split(" ");
                                            console.log(text);
                                            console.log(req[1]);
                                            return [4 /*yield*/, expect(req[1]).to.equals(count)];
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
    ManagementAgreementDataPage.prototype.searchBox = function (searchValue, count) {
        return __awaiter(this, void 0, void 0, function () {
            var verifySearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.search_txt.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.search_txt.sendKeys(searchValue)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.searchIcon.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.table), 5000000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        verifySearch = protractor_1.element(protractor_1.by.xpath('(//tbody[@class="ui-table-tbody"])[' + count + ']'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(verifySearch), 5000000, 'Element taking too long to appear in the DOM')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, verifySearch.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, expect(text).to.contain(searchValue)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.searchFilter = function (searchValue, count, column) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, verifySearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = protractor_1.element(protractor_1.by.xpath('//input[@id="filter-' + column + '"]'));
                        return [4 /*yield*/, filter.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, filter.sendKeys(searchValue)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                        return [4 /*yield*/, protractor_1.browser.sleep(35000)];
                    case 4:
                        _a.sent();
                        verifySearch = protractor_1.element(protractor_1.by.xpath('(//tbody[@class="ui-table-tbody"])[' + count + ']'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(verifySearch), 5000, 'Element taking too long to appear in the DOM')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, verifySearch.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log(text);
                                                return [4 /*yield*/, expect(text).to.contain(searchValue)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            })];
                    case 6:
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
                    case 0: return [4 /*yield*/, expect(this.filter_box.isPresent()).to.eventually.equal(true)];
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
    ManagementAgreementDataPage.prototype.clickAscendingAndDescendingOrder = function (column) {
        return __awaiter(this, void 0, void 0, function () {
            var colName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        colName = protractor_1.element(protractor_1.by.xpath('//div[text()=" ' + column + ' "]'));
                        return [4 /*yield*/, colName.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(35000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.clickExportFile = function (exportFile) {
        return __awaiter(this, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        button = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + exportFile + '")]'));
                        return [4 /*yield*/, button.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(35000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyDownloadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var downloadsFolder, filepath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        downloadsFolder = require('downloads-folder');
                        filepath = downloadsFolder() + '\\My Sites-Export.xlsx';
                        return [4 /*yield*/, expect(fs.existsSync(filepath)).to.be.true];
                    case 1:
                        _a.sent();
                        if (!fs.existsSync(filepath)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs.unlinkSync(filepath)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyDownloadFilePdf = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var downloadsFolder, filepath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        downloadsFolder = require('downloads-folder');
                        filepath = downloadsFolder() + file;
                        return [4 /*yield*/, expect(fs.existsSync(filepath)).to.be.true];
                    case 1:
                        _a.sent();
                        if (!fs.existsSync(filepath)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fs.unlinkSync(filepath)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.verifyMySiteAccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var site;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = protractor_1.element(protractor_1.by.id('smalltext'));
                        return [4 /*yield*/, expect(site.isPresent()).to.eventually.equal(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagementAgreementDataPage.prototype.viewManagementList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = protractor_1.element(protractor_1.by.id('ReportHeaderLeft'));
                        return [4 /*yield*/, data.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
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
    return ManagementAgreementDataPage;
}(BasePage_1.BasePage));
exports.ManagementAgreementDataPage = ManagementAgreementDataPage;
//# sourceMappingURL=ManagementAgreementDataPage.js.map