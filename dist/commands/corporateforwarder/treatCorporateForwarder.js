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
const corporateforwarder_1 = require("../../models/corporateforwarder");
const parameters_1 = require("../../parameters");
const mongoose = require("mongoose");
const corporateForwarder = mongoose.model("corporateForwarder", corporateforwarder_1.corporateForwarderSchema);
function treatCorporateForwarder(membershipnumber) {
    return __awaiter(this, void 0, void 0, function* () {
        var updaterec = {
            membershipnumber: membershipnumber,
            status: parameters_1.forwarderRecordStatus.Treated
        };
        yield corporateForwarder.findOneAndUpdate({ membershipnumber: membershipnumber }, updaterec);
    });
}
exports.treatCorporateForwarder = treatCorporateForwarder;
//# sourceMappingURL=treatCorporateForwarder.js.map