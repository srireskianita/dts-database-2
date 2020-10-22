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
exports.Account = void 0;
var mongodb_1 = __importDefault(require("mongodb"));
var Account = /** @class */ (function () {
    function Account(db) {
        this.collection = db.collection('account');
    }
    Account.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.insertOne(data)];
                    case 1:
                        result = _a.sent();
                        console.log('Insert result %j', result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accounts, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.find().toArray()];
                    case 1:
                        accounts = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/, accounts];
                }
            });
        });
    };
    Account.prototype.getByID = function (accountID) {
        return __awaiter(this, void 0, void 0, function () {
            var account, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.findOne({ _id: new mongodb_1.default.ObjectID(accountID) })];
                    case 1:
                        account = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/, account];
                }
            });
        });
    };
    Account.prototype.update = function (accountID, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.updateOne({ _id: new mongodb_1.default.ObjectID(accountID) }, { $set: updateData })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.delete = function (accountID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.deleteOne({ _id: new mongodb_1.default.ObjectID(accountID) })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE2QjtBQVE3QjtJQUdFLGlCQUFZLEVBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFSyx3QkFBTSxHQUFaLFVBQWEsSUFBa0I7Ozs7Ozs7d0JBRVoscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUE5QyxNQUFNLEdBQUcsU0FBcUM7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUE7Ozs7d0JBRXZDLE1BQU0sT0FBSyxDQUFBOzs7OztLQUdkO0lBRUssd0JBQU0sR0FBWjs7Ozs7Ozt3QkFHZSxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBakQsUUFBUSxHQUFHLFNBQXNDLENBQUE7Ozs7d0JBRWpELE1BQU0sT0FBSyxDQUFBOzRCQUViLHNCQUFPLFFBQVEsRUFBQTs7OztLQUNoQjtJQUVLLHlCQUFPLEdBQWIsVUFBYyxTQUFrQjs7Ozs7Ozt3QkFHbEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUE7O3dCQUFoRixPQUFPLEdBQUcsU0FBc0UsQ0FBQTs7Ozt3QkFFaEYsTUFBTSxPQUFLLENBQUE7NEJBR2Isc0JBQU8sT0FBTyxFQUFBOzs7O0tBQ2Y7SUFFSyx3QkFBTSxHQUFaLFVBQWEsU0FBa0IsRUFBRSxVQUFnQzs7Ozs7Ozt3QkFFNUQscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDLEVBQUE7O3dCQUE1RixTQUE0RixDQUFBOzs7O3dCQUU3RixNQUFNLE9BQUssQ0FBQzs7Ozs7S0FHZjtJQUVLLHdCQUFNLEdBQVosVUFBYSxTQUFrQjs7Ozs7Ozt3QkFFM0IscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUE7O3dCQUF4RSxTQUF3RSxDQUFBOzs7O3dCQUV6RSxNQUFNLE9BQUssQ0FBQzs7Ozs7S0FFZDtJQUNILGNBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLDBCQUFPIn0=