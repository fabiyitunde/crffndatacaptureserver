"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const parameters_1 = require("../models/parameters");
const StateTable = mongoose.model("StateTable", parameters_1.statetableSchema);
const LGATable = mongoose.model("LGATable", parameters_1.lgatableSchema);
exports.getStateList = () => __awaiter(this, void 0, void 0, function* () {
    return yield StateTable.find().sort("description");
});
exports.getLGAList = () => __awaiter(this, void 0, void 0, function* () {
    return yield LGATable.find().sort("description");
});
//# sourceMappingURL=parameterQueries.js.map