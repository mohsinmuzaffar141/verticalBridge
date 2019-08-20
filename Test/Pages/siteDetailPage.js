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
var maps = yaml.safeLoad(fs.readFileSync('./Test/testData/map.yml', 'utf8'));
var expect = chai.expect;
var until = protractor_1.protractor.ExpectedConditions;
var siteDetailPage = /** @class */ (function (_super) {
    __extends(siteDetailPage, _super);
    function siteDetailPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchMap = protractor_1.element(protractor_1.by.xpath('//input[@id="SearchAddress"]'));
        _this.resetTab = protractor_1.element(protractor_1.by.xpath('//span[text()="Reset Map"]'));
        _this.autoView = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-checkbox-inner-container"]//input[@type="checkbox"]'));
        _this.autoV = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-checkbox-inner-container"]'));
        _this.linkTitle = protractor_1.element(protractor_1.by.xpath('//div[@class="header-title"]'));
        _this.saerchFile = protractor_1.element(protractor_1.by.id('SearchDocument'));
        _this.search_btn = protractor_1.element(protractor_1.by.id('DocSearchBtn'));
        _this.editFile = protractor_1.element(protractor_1.by.xpath('//i[@class="fa fa-pencil-square-o fa-2x"]'));
        _this.siteInspection = protractor_1.element(protractor_1.by.xpath('//i[@class="fa fa-file-text-o fa-2x"]'));
        _this.managementAgreement = protractor_1.element(protractor_1.by.xpath('//div[text()="Management Agreement:"]'));
        return _this;
    }
    siteDetailPage.prototype.selectSite = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var siteNumber, site;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteNumber = cred[value]['siteNumber'];
                        site = protractor_1.element(protractor_1.by.xpath('//a[text()="' + siteNumber + '"]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(site), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, site.click()];
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
    siteDetailPage.prototype.verifySiteNumber = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var siteNumber, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        siteNumber = cred[value]['siteNumber'];
                        title = protractor_1.element(protractor_1.by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + siteNumber + '")]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(title), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, title.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var sp, req;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                sp = text.split(" ");
                                                req = sp[0];
                                                return [4 /*yield*/, expect(siteNumber).to.equals(req)];
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
    siteDetailPage.prototype.verifyName = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var site, title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = cred[value]['siteName'];
                        title = protractor_1.element(protractor_1.by.xpath('//div[@class="PageTitle"]//div[contains(text()," ' + site + '")]'));
                        return [4 /*yield*/, expect(title.getText()).to.eventually.contain(site)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyHeaderOnDetailedPage = function (listed) {
        return __awaiter(this, void 0, void 0, function () {
            var lists, i, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lists = listed.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < lists.length)) return [3 /*break*/, 5];
                        label = protractor_1.element(protractor_1.by.xpath('//div[@class="SectionHeader" and text()=" ' + lists[i] + ' "]'));
                        return [4 /*yield*/, label.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(label.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifySiteDetailsData = function (data, label) {
        return __awaiter(this, void 0, void 0, function () {
            var datas, labels, i, siteDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = data.split(',');
                        labels = label.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < datas.length)) return [3 /*break*/, 5];
                        siteDetail = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"' + datas[i] + '")]//following-sibling::div[contains(text(),"' + labels[i] + '")]'));
                        return [4 /*yield*/, siteDetail.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(siteDetail.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifySiteContacts = function (label, data) {
        return __awaiter(this, void 0, void 0, function () {
            var datas, labels, i, siteDetail, contactsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        datas = data.split(',');
                        labels = label.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < labels.length)) return [3 /*break*/, 6];
                        siteDetail = protractor_1.element(protractor_1.by.xpath('//mat-panel-title[text()=" ' + labels[i] + ' "]'));
                        return [4 /*yield*/, siteDetail.click()];
                    case 2:
                        _a.sent();
                        contactsData = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-expansion-panel-body"]//strong[text()="' + datas[i] + '"]'));
                        return [4 /*yield*/, siteDetail.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(contactsData.isDisplayed()).to.eventually.equal(true)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyTabs = function (tab) {
        return __awaiter(this, void 0, void 0, function () {
            var tabs, i, pageTabs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tabs = tab.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tabs.length)) return [3 /*break*/, 5];
                        pageTabs = protractor_1.element(protractor_1.by.xpath('//a[text()=" ' + tabs[i] + ' "]'));
                        return [4 /*yield*/, pageTabs.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(pageTabs.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyMapPin = function (siteNo) {
        return __awaiter(this, void 0, void 0, function () {
            var site, pageMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = cred[siteNo]['siteNumber'];
                        pageMap = protractor_1.element(protractor_1.by.xpath('//div[text()=": ' + site + '"]'));
                        return [4 /*yield*/, expect(pageMap.isDisplayed()).to.eventually.equal(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyMapData = function (maplabel) {
        return __awaiter(this, void 0, void 0, function () {
            var mapLabel, i, mapData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mapLabel = maplabel.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < mapLabel.length)) return [3 /*break*/, 5];
                        mapData = protractor_1.element(protractor_1.by.xpath('//strong[text()="' + mapLabel[i] + '"]'));
                        return [4 /*yield*/, mapData.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(mapData.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyLabelNotPreent = function (labelPresent) {
        return __awaiter(this, void 0, void 0, function () {
            var label, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        label = labelPresent.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < label.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, expect(protractor_1.element(protractor_1.by.xpath('//strong[text()="' + label[i] + '"]')).isPresent()).to.eventually.equal(false)];
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
    siteDetailPage.prototype.searchMapLocation = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var searchValue, loc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.searchMap), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        searchValue = maps[value]['siteSearch'];
                        return [4 /*yield*/, this.searchMap.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.searchMap.sendKeys(searchValue)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 4:
                        _a.sent();
                        loc = protractor_1.element(protractor_1.by.xpath('//p[text()="' + searchValue + '"]'));
                        return [4 /*yield*/, loc.click()];
                    case 5:
                        _a.sent();
                        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.clickResetTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.resetTab), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.resetTab.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.clickAutoViewTab = function () {
        return __awaiter(this, void 0, void 0, function () {
            var beforeClick, afterClick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.autoView), 5000, 'Element taking too long to appear in the DOM')];
                    case 1:
                        _a.sent();
                        beforeClick = this.autoView.getAttribute('aria-checked');
                        if (!beforeClick) return [3 /*break*/, 4];
                        console.log("1:Element is unchecked");
                        return [4 /*yield*/, this.autoV.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        afterClick = this.autoView.getAttribute('aria-checked');
                        if (!afterClick) return [3 /*break*/, 6];
                        console.log("2:Element is checked");
                        return [4 /*yield*/, this.autoV.click()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.selectTab = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            var tab, tabClick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = maps[tabName]['tabName'];
                        tabClick = protractor_1.element(protractor_1.by.xpath('//a[text()=" ' + tab + ' "]'));
                        return [4 /*yield*/, tabClick.isPresent().then(function (display) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!display) return [3 /*break*/, 3];
                                                return [4 /*yield*/, tabClick.click()];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                                            case 2:
                                                _a.sent();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                console.log(tab + " is not present");
                                                _a.label = 4;
                                            case 4: return [2 /*return*/];
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
    siteDetailPage.prototype.verifyContactsLabel = function (contactLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var contactLabels, i, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contactLabels = contactLabel.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < contactLabels.length)) return [3 /*break*/, 5];
                        label = protractor_1.element(protractor_1.by.xpath('//h2[text()="' + contactLabels[i] + '"]'));
                        return [4 /*yield*/, label.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(label.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyContactGroupData = function (thData) {
        return __awaiter(this, void 0, void 0, function () {
            var thdata, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thdata = thData.split(',');
                        //let tddata = tdData.split(',');
                        console.log(thdata.length);
                        _loop_1 = function (i) {
                            var headerData, tableData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        headerData = protractor_1.element(protractor_1.by.xpath('//tr[@class="tableMainHeader"]//th[' + i + ']'));
                                        return [4 /*yield*/, headerData.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(thdata[i - 1])];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                });
                                            })];
                                    case 1:
                                        _a.sent();
                                        tableData = protractor_1.element(protractor_1.by.xpath('//tr[@class="tableMainData ng-star-inserted"]//td[' + i + ']'));
                                        //tr[@class='tableMainData ng-star-inserted']//td[1]
                                        return [4 /*yield*/, tableData.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        console.log(text);
                                                        return [2 /*return*/];
                                                    });
                                                });
                                            })];
                                    case 2:
                                        //tr[@class='tableMainData ng-star-inserted']//td[1]
                                        _a.sent();
                                        return [4 /*yield*/, expect(tableData.getAttribute('href')).to.eventually.equal(null)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, expect(tableData.isDisplayed()).to.eventually.equal(true)];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= thdata.length)) return [3 /*break*/, 4];
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
    siteDetailPage.prototype.contactDataNOtPresent = function (contctData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, contactData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = maps[contctData]['contactData'];
                        contactData = protractor_1.element.all(protractor_1.by.xpath('//div[@class="ng-star-inserted" and text()="No records found"]'));
                        return [4 /*yield*/, contactData.getText().then(function (txt) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var i;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                i = 0;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i < txt.length)) return [3 /*break*/, 4];
                                                console.log(txt[i]);
                                                return [4 /*yield*/, expect(data).to.equal(txt[i])];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.contactDataDuplication = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, dataDuplication, i, contactData, i, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        dataDuplication = data.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < dataDuplication.length)) return [3 /*break*/, 4];
                        contactData = protractor_1.element(protractor_1.by.xpath('//td[contains(text(),"' + dataDuplication[i] + '")]'));
                        return [4 /*yield*/, contactData.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, arr.push(text)];
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
                        for (i = 0; i < arr.length; i++) {
                            for (j = i + 1; j < arr.length; j++) {
                                if (arr[i] == arr[j]) {
                                    console.log(arr[i]);
                                }
                            }
                        }
                        console.log("There is no duplication in values");
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyAttributeOnPropertTab = function (attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var attribute, _loop_2, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attribute = attributes.split(',');
                        _loop_2 = function (i) {
                            var attributeData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        attributeData = protractor_1.element(protractor_1.by.xpath('//mat-card-title[contains(text(), "' + attribute[i] + '")]'));
                                        return [4 /*yield*/, attributeData.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(attribute[i])];
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
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < attribute.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
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
    siteDetailPage.prototype.verifyDataUnderPropertyInformation = function (attributeData) {
        return __awaiter(this, void 0, void 0, function () {
            var attribute, i, attributeDatainfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attribute = attributeData.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < attribute.length)) return [3 /*break*/, 5];
                        attributeDatainfo = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"' + attribute[i] + '")]'));
                        return [4 /*yield*/, attributeDatainfo.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(attributeDatainfo.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyAttributeOnLeasesTab = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var attribute, _loop_3, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attribute = txt.split(',');
                        _loop_3 = function (i) {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = protractor_1.element(protractor_1.by.xpath('//h2[contains(text(),"' + attribute[i] + '")]'));
                                        return [4 /*yield*/, data.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(attribute[i])];
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
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < attribute.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_3(i)];
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
    siteDetailPage.prototype.verifyLeasesTabData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var leasesData, i, data_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        leasesData = data.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < leasesData.length)) return [3 /*break*/, 6];
                        data_1 = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"' + leasesData[i] + '")]'));
                        return [4 /*yield*/, data_1.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(data_1.getAttribute('href')).to.eventually.equal(null)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(data_1.isDisplayed()).to.eventually.equal(true)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyLeasesLabel = function (thData) {
        return __awaiter(this, void 0, void 0, function () {
            var thdata, _loop_4, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thdata = thData.split(',');
                        _loop_4 = function (i) {
                            var headerData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        headerData = protractor_1.element(protractor_1.by.xpath('//tr[@class="tableMainHeader"]//th[' + i + ']'));
                                        return [4 /*yield*/, headerData.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(thdata[i - 1])];
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
                        };
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= thdata.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_4(i)];
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
    siteDetailPage.prototype.verifyGroundRightsData = function (thData) {
        return __awaiter(this, void 0, void 0, function () {
            var thdata, _loop_5, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thdata = thData.split(',');
                        _loop_5 = function (i) {
                            var headerData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        headerData = protractor_1.element(protractor_1.by.xpath('(//table)[2]//tr[@class="tableMainHeader"]//th[' + i + ']'));
                                        return [4 /*yield*/, headerData.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(thdata[i - 1])];
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
                        };
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= thdata.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_5(i)];
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
    siteDetailPage.prototype.verifyDisplayMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var thdata, i, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thdata = message.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < thdata.length)) return [3 /*break*/, 5];
                        msg = protractor_1.element(protractor_1.by.xpath('//p[contains(text(),"' + thdata[i] + '")]'));
                        return [4 /*yield*/, msg.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(msg.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyLink = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var thdata, i, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thdata = link.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < thdata.length)) return [3 /*break*/, 5];
                        msg = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"' + thdata[i] + '")]'));
                        return [4 /*yield*/, msg.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(msg.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.verifyIndicatorColor = function (indicator) {
        return __awaiter(this, void 0, void 0, function () {
            var indicators, i, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        indicators = indicator.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < indicators.length)) return [3 /*break*/, 6];
                        msg = protractor_1.element(protractor_1.by.xpath('//mat-card-content//div[@class="ng-star-inserted"]//div[contains(text(),"' + indicators[i] + '")]'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(msg), 5000, 'Element taking too long to appear in the DOM')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, msg.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, expect(msg.isDisplayed()).to.eventually.equal(true)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.documentLabel = function (label) {
        return __awaiter(this, void 0, void 0, function () {
            var labels, i, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labels = label.split(',');
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i < labels.length)) return [3 /*break*/, 5];
                        msg = protractor_1.element(protractor_1.by.xpath('(//div[@class="node-content-wrapper"])[' + i + ']'));
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(msg), 15000, 'Element taking too long to appear in the DOM')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(msg).to.be.exist];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.fileSearch = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var files, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = maps[file]['fileDocument'];
                        doc = protractor_1.element(protractor_1.by.xpath('//span[text()="' + files + '"]'));
                        return [4 /*yield*/, this.saerchFile.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.saerchFile.sendKeys(files)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.search_btn.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(doc), 15000, 'Element taking too long to appear in the DOM')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, expect(files).to.be.exist];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.folderAndSubFolder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, folder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= 4)) return [3 /*break*/, 5];
                        folder = protractor_1.element(protractor_1.by.xpath('(//span[@class="toggle-children"])[' + i + ']'));
                        return [4 /*yield*/, folder.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, folder.click()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //     async optionsNotPresent(){
    //         let rowToRightClick=element(by.xpath('//span[@data-text="Blue"]'))
    //         await browser.actions().click(rowToRightClick, protractor.Button.RIGHT).perform();
    //        await expect.IsTrue(popup.Exists, "Write your own message here");
    //
    //     }
    siteDetailPage.prototype.editSiteNOtPresent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.editFile.isPresent()).to.eventually.equal(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.siteInspectionNOtPresent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.siteInspection.isPresent()).to.eventually.equal(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.managementAgreementNotPresent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.managementAgreement.isPresent()).to.eventually.equal(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.selectTabUnderHomePage = function (tabName) {
        return __awaiter(this, void 0, void 0, function () {
            var tab, tabClick;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tab = maps[tabName]['tab'];
                        tabClick = protractor_1.element(protractor_1.by.xpath('//div[text()="' + tab + '"]'));
                        return [4 /*yield*/, tabClick.isPresent().then(function (display) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!display) return [3 /*break*/, 3];
                                                return [4 /*yield*/, tabClick.click()];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                                            case 2:
                                                _a.sent();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                console.log(tab + " is not present");
                                                _a.label = 4;
                                            case 4: return [2 /*return*/];
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
    siteDetailPage.prototype.verifyContentUnderContactTab = function (txt) {
        return __awaiter(this, void 0, void 0, function () {
            var attribute, _loop_6, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attribute = txt.split(',');
                        _loop_6 = function (i) {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = protractor_1.element(protractor_1.by.xpath('//h3[contains(text(),"' + attribute[i] + '")]'));
                                        return [4 /*yield*/, data.getText().then(function (text) {
                                                return __awaiter(this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                console.log(text);
                                                                return [4 /*yield*/, expect(text).to.equal(attribute[i])];
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
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < attribute.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_6(i)];
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
    siteDetailPage.prototype.verifyListContentUnderContactTab = function (contactLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var data, contactLabels, i, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = maps[contactLabel]['listData'];
                        contactLabels = data.split(',');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < contactLabels.length)) return [3 /*break*/, 5];
                        label = protractor_1.element(protractor_1.by.xpath('//li[contains(text(),"' + contactLabels[i] + '")]'));
                        return [4 /*yield*/, label.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log(text);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, expect(label.isDisplayed()).to.eventually.equal(true)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    siteDetailPage.prototype.clickOnLinks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"561-406-4046")]'));
                        return [4 /*yield*/, link.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.switchTo().alert().then(function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var pop;
                                    return __generator(this, function (_a) {
                                        pop = protractor_1.browser.switchTo().alert().getText();
                                        console.log(pop);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return siteDetailPage;
}(BasePage_1.BasePage));
exports.siteDetailPage = siteDetailPage;
//# sourceMappingURL=siteDetailPage.js.map