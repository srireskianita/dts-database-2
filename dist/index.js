"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// register root file untuk menggunakan sourcemap
require("source-map-support/register");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongodb_1 = __importDefault(require("mongodb"));
var customer_1 = require("./customer");
var account_1 = require("./account");
var transaction_1 = require("./transaction");
//use Mongoose
//import mongoose from 'mongoose'
//import { Customer, CustomerType } from './mongoose'
function initApp() {
    return __awaiter(this, void 0, void 0, function () {
        var app, connection, db, customerModel, accountModel, transactionModel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = express_1.default();
                    return [4 /*yield*/, mongodb_1.default.connect("" + process.env.MONGODB_URI, { useUnifiedTopology: true })];
                case 1:
                    connection = _a.sent();
                    db = connection.db("" + process.env.MONGODB_NAME);
                    customerModel = new customer_1.Customer(db);
                    accountModel = new account_1.Account(db);
                    transactionModel = new transaction_1.Transaction(db);
                    app.use(body_parser_1.default.json());
                    //Customer
                    app.post('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_1 = _a.sent();
                                        return [2 /*return*/, next(error_1)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.get('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var customers, error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.getAll()];
                                    case 1:
                                        customers = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_2 = _a.sent();
                                        return [2 /*return*/, next(error_2)];
                                    case 3: return [2 /*return*/, res.send(customers)];
                                }
                            });
                        });
                    });
                    app.get('/customer/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var customer, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.getByID(req.params.id)];
                                    case 1:
                                        customer = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_3 = _a.sent();
                                        return [2 /*return*/, next(error_3)];
                                    case 3: return [2 /*return*/, res.send(customer)];
                                }
                            });
                        });
                    });
                    app.put('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_4 = _a.sent();
                                        return [2 /*return*/, next(error_4)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.delete('/customer', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_5;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, customerModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_5 = _a.sent();
                                        return [2 /*return*/, next(error_5)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    //Account
                    app.post('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_6;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_6 = _a.sent();
                                        return [2 /*return*/, next(error_6)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.get('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var accounts, error_7;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.getAll()];
                                    case 1:
                                        accounts = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_7 = _a.sent();
                                        return [2 /*return*/, next(error_7)];
                                    case 3: return [2 /*return*/, res.send(accounts)];
                                }
                            });
                        });
                    });
                    app.get('/account/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var account, error_8;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.getByID(req.params.id)];
                                    case 1:
                                        account = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_8 = _a.sent();
                                        return [2 /*return*/, next(error_8)];
                                    case 3: return [2 /*return*/, res.send(account)];
                                }
                            });
                        });
                    });
                    app.put('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_9;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_9 = _a.sent();
                                        return [2 /*return*/, next(error_9)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.delete('/account', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_10;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, accountModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_10 = _a.sent();
                                        return [2 /*return*/, next(error_10)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    //Transaction
                    app.post('/transaction', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_11;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.create(req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_11 = _a.sent();
                                        return [2 /*return*/, next(error_11)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.get('/transaction', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var transactions, error_12;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.getAll()];
                                    case 1:
                                        transactions = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_12 = _a.sent();
                                        return [2 /*return*/, next(error_12)];
                                    case 3: return [2 /*return*/, res.send(transactions)];
                                }
                            });
                        });
                    });
                    app.get('/transaction/:id', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var transaction, error_13;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.getByID(req.params.id)];
                                    case 1:
                                        transaction = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_13 = _a.sent();
                                        return [2 /*return*/, next(error_13)];
                                    case 3: return [2 /*return*/, res.send(transaction)];
                                }
                            });
                        });
                    });
                    app.put('/transaction', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_14;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.update(req.params.id, req.body)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_14 = _a.sent();
                                        return [2 /*return*/, next(error_14)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.delete('/transaction', function (req, res, next) {
                        return __awaiter(this, void 0, void 0, function () {
                            var error_15;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, transactionModel.delete(req.params.id)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_15 = _a.sent();
                                        return [2 /*return*/, next(error_15)];
                                    case 3:
                                        res.send({ success: true });
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    app.use(function (err, req, res, next) {
                        res.status(500).send({
                            success: false,
                            message: err.message
                        });
                    });
                    app.listen(process.env.PORT || 8000, function () {
                        console.log("App listen on port " + (process.env.PORT || 8000));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
initApp();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBaUQ7QUFDakQsdUNBQW9DO0FBRXBDLGtEQUEyQjtBQUMzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsb0RBQTZCO0FBQzdCLDREQUFvQztBQUVwQyxvREFBNkI7QUFDN0IsdUNBQW1EO0FBQ25ELHFDQUFnRDtBQUNoRCw2Q0FBNEQ7QUFFNUQsY0FBYztBQUNkLGlDQUFpQztBQUNqQyxxREFBcUQ7QUFHckQsU0FBZSxPQUFPOzs7Ozs7b0JBQ2QsR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQTtvQkFHRixxQkFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBYSxFQUFFLEVBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBQTs7b0JBQTVGLFVBQVUsR0FBRyxTQUErRTtvQkFDNUYsRUFBRSxHQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQWMsQ0FBQyxDQUFBO29CQUNsRCxhQUFhLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO29CQUNoQyxZQUFZLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO29CQUM5QixnQkFBZ0IsR0FBRyxJQUFJLHlCQUFXLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBRTVDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO29CQUUxQixVQUFVO29CQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQWUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJOzs7Ozs7O3dDQUUvQyxxQkFBTSxhQUFhLENBQUMsTUFBTSxD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