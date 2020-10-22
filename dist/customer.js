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
exports.Customer = void 0;
var mongodb_1 = __importDefault(require("mongodb"));
var Customer = /** @class */ (function () {
    function Customer(db) {
        this.collection = db.collection('customer');
    }
    Customer.prototype.create = function (data) {
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
    Customer.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.find().toArray()];
                    case 1:
                        customers = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/, customers];
                }
            });
        });
    };
    Customer.prototype.getByID = function (customerID) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.findOne({ _id: new mongodb_1.default.ObjectID(customerID) })];
                    case 1:
                        customer = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/, customer];
                }
            });
        });
    };
    Customer.prototype.update = function (customerID, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.updateOne({ _id: new mongodb_1.default.ObjectID(customerID) }, { $set: updateData })];
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
    Customer.prototype.delete = function (customerID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.deleteOne({ _id: new mongodb_1.default.ObjectID(customerID) })];
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
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTZCO0FBZTdCO0lBR0Usa0JBQVksRUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVLLHlCQUFNLEdBQVosVUFBYSxJQUFtQjs7Ozs7Ozt3QkFFYixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTlDLE1BQU0sR0FBRyxTQUFxQzt3QkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQTs7Ozt3QkFFdkMsTUFBTSxPQUFLLENBQUE7Ozs7O0tBR2Q7SUFFSyx5QkFBTSxHQUFaOzs7Ozs7O3dCQUdnQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBbEQsU0FBUyxHQUFHLFNBQXNDLENBQUE7Ozs7d0JBRWxELE1BQU0sT0FBSyxDQUFBOzRCQUViLHNCQUFPLFNBQVMsRUFBQTs7OztLQUNqQjtJQUVLLDBCQUFPLEdBQWIsVUFBYyxVQUFtQjs7Ozs7Ozt3QkFHbEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLEVBQUE7O3dCQUFsRixRQUFRLEdBQUcsU0FBdUUsQ0FBQTs7Ozt3QkFFbEYsTUFBTSxPQUFLLENBQUE7NEJBR2Isc0JBQU8sUUFBUSxFQUFBOzs7O0tBQ2hCO0lBRUsseUJBQU0sR0FBWixVQUFhLFVBQW1CLEVBQUUsVUFBaUM7Ozs7Ozs7d0JBRTlELHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQyxFQUFBOzt3QkFBN0YsU0FBNkYsQ0FBQTs7Ozt3QkFFOUYsTUFBTSxPQUFLLENBQUM7Ozs7O0tBR2Y7SUFFSyx5QkFBTSxHQUFaLFVBQWEsVUFBbUI7Ozs7Ozs7d0JBRTVCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUMsQ0FBQyxFQUFBOzt3QkFBekUsU0FBeUUsQ0FBQTs7Ozt3QkFFMUUsTUFBTSxPQUFLLENBQUM7Ozs7O0tBRWQ7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSw0QkFBUSJ9