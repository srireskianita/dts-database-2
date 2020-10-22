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
exports.Transaction = void 0;
var mongodb_1 = __importDefault(require("mongodb"));
var Transaction = /** @class */ (function () {
    function Transaction(db) {
        this.collection = db.collection('transaction');
    }
    Transaction.prototype.create = function (data) {
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
    Transaction.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transactions, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.find().toArray()];
                    case 1:
                        transactions = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/, transactions];
                }
            });
        });
    };
    Transaction.prototype.getByID = function (transactionID) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.findOne({ _id: new mongodb_1.default.ObjectID(transactionID) })];
                    case 1:
                        transaction = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/, transaction];
                }
            });
        });
    };
    Transaction.prototype.update = function (transactionID, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.updateOne({ _id: new mongodb_1.default.ObjectID(transactionID) }, { $set: updateData })];
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
    Transaction.prototype.delete = function (transactionID) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.collection.deleteOne({ _id: new mongodb_1.default.ObjectID(transactionID) })];
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
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTZCO0FBUTdCO0lBR0UscUJBQVksRUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVLLDRCQUFNLEdBQVosVUFBYSxJQUFzQjs7Ozs7Ozt3QkFFaEIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUE5QyxNQUFNLEdBQUcsU0FBcUM7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUE7Ozs7d0JBRXZDLE1BQU0sT0FBSyxDQUFBOzs7OztLQUdkO0lBRUssNEJBQU0sR0FBWjs7Ozs7Ozt3QkFHbUIscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQXJELFlBQVksR0FBRyxTQUFzQyxDQUFBOzs7O3dCQUVyRCxNQUFNLE9BQUssQ0FBQTs0QkFFYixzQkFBTyxZQUFZLEVBQUE7Ozs7S0FDcEI7SUFFSyw2QkFBTyxHQUFiLFVBQWMsYUFBc0I7Ozs7Ozs7d0JBR2xCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQyxFQUFBOzt3QkFBeEYsV0FBVyxHQUFHLFNBQTBFLENBQUE7Ozs7d0JBRXhGLE1BQU0sT0FBSyxDQUFBOzRCQUdiLHNCQUFPLFdBQVcsRUFBQTs7OztLQUNuQjtJQUVLLDRCQUFNLEdBQVosVUFBYSxhQUFzQixFQUFFLFVBQW9DOzs7Ozs7O3dCQUVwRSxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUMsRUFBQTs7d0JBQWhHLFNBQWdHLENBQUE7Ozs7d0JBRWpHLE1BQU0sT0FBSyxDQUFDOzs7OztLQUdmO0lBRUssNEJBQU0sR0FBWixVQUFhLGFBQXNCOzs7Ozs7O3dCQUUvQixxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUMsRUFBQTs7d0JBQTVFLFNBQTRFLENBQUE7Ozs7d0JBRTdFLE1BQU0sT0FBSyxDQUFDOzs7OztLQUVkO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGtDQUFXIn0=