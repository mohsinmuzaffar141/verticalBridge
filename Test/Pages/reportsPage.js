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
var reports = /** @class */ (function (_super) {
    __extends(reports, _super);
    function reports() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.date = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Executed On")]'));
        _this.table = protractor_1.element(protractor_1.by.xpath('//div[text()=" Site Number "]'));
        _this.logo = protractor_1.element(protractor_1.by.xpath('(//img[@id="Logo"])[2]'));
        _this.startDate = protractor_1.element(protractor_1.by.xpath('//div[text()=" Start Date "]//following-sibling::div//span//input'));
        _this.endDate = protractor_1.element(protractor_1.by.xpath('//div[text()=" End Date "]//following-sibling::div//span//input'));
        _this.defaultDateStart = protractor_1.element(protractor_1.by.xpath('//a[contains(@class, "ui-state-active") and @draggable="false"]'));
        return _this;
    }
    reports.prototype.executedDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.date.getText().then(function (text) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log(text);
                                    return [2 /*return*/];
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.date.isPresent()).to.eventually.equal(true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    reports.prototype.verifyActiveTenant = function (columnName, counter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    reports.prototype.verifyLogo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(this.logo.isPresent()).to.eventually.equal(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    reports.prototype.verifyReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.table), 50000000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, expect(this.table.isPresent()).to.eventually.equal(true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    reports.prototype.setStartDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.startDate.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, 'a'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.startDate.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.startDate.sendKeys(date)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    reports.prototype.setEndDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.endDate.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, 'a'))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.endDate.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.endDate.sendKeys(date)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    reports.prototype.defaultStartDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var labels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labels = date.split(',');
                        return [4 /*yield*/, this.startDate.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.defaultDateStart), 50000000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.defaultDateStart.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var _loop_1, i;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log(text);
                                                return [4 /*yield*/, expect(text).to.equal('1')];
                                            case 1:
                                                _a.sent();
                                                _loop_1 = function (i) {
                                                    var msg;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                msg = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + labels[i] + '")]'));
                                                                return [4 /*yield*/, msg.getText().then(function (display) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        console.log(display);
                                                                                        return [4 /*yield*/, expect(display).to.equal(labels[i])];
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
                                                _a.label = 2;
                                            case 2:
                                                if (!(i < labels.length)) return [3 /*break*/, 5];
                                                return [5 /*yield**/, _loop_1(i)];
                                            case 3:
                                                _a.sent();
                                                _a.label = 4;
                                            case 4:
                                                i++;
                                                return [3 /*break*/, 2];
                                            case 5: return [2 /*return*/];
                                        }
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
    reports.prototype.defaultEndDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var labels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labels = date.split(',');
                        return [4 /*yield*/, this.endDate.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.defaultDateStart), 50000000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.defaultDateStart.getText().then(function (text) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var _loop_2, i;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log(text);
                                                return [4 /*yield*/, expect(text).to.equal('31')];
                                            case 1:
                                                _a.sent();
                                                _loop_2 = function (i) {
                                                    var msg;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                msg = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + labels[i] + '")]'));
                                                                return [4 /*yield*/, msg.getText().then(function (display) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            return __generator(this, function (_a) {
                                                                                switch (_a.label) {
                                                                                    case 0:
                                                                                        console.log(display);
                                                                                        return [4 /*yield*/, expect(display).to.equal(labels[i])];
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
                                                _a.label = 2;
                                            case 2:
                                                if (!(i < labels.length)) return [3 /*break*/, 5];
                                                return [5 /*yield**/, _loop_2(i)];
                                            case 3:
                                                _a.sent();
                                                _a.label = 4;
                                            case 4:
                                                i++;
                                                return [3 /*break*/, 2];
                                            case 5: return [2 /*return*/];
                                        }
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
    return reports;
}(BasePage_1.BasePage));
exports.reports = reports;
//# sourceMappingURL=reportsPage.js.map