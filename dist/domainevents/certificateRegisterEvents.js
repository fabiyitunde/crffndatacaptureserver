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
const postal = require("postal");
const parameters_1 = require("../parameters");
exports.raiseCertificateRegisterApprovedEvent = (membershipnumber) => __awaiter(this, void 0, void 0, function* () {
    // const corporateforwarder = await getCorporateForwarderByMembershipNumber(membershipnumber);
    // var eventobj: any = {};
    // eventobj = corporateforwarder;
    const channel = postal.channel(parameters_1.postalChannels.crffnDataCapture);
    channel.publish(parameters_1.postalTopics.certificateRegisterApproved, membershipnumber);
});
//# sourceMappingURL=certificateRegisterEvents.js.map