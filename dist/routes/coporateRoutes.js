"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coporateController_1 = require("../controllers/coporateController");
const auth_1 = require("../middleware/auth");
exports.registerCoporateRoutes = app => {
    var coporateController = new coporateController_1.CoporateController();
    app
        .route("/api/coporate/createCoporateData")
        .post([auth_1.default, coporateController.createCoporateData]);
    app
        .route("/api/coporate/updateCorporateData")
        .post([auth_1.default, coporateController.updateCorporateData]);
    app
        .route("/api/coporate/submitCorporateData")
        .post([auth_1.default, coporateController.submitCorporateData]);
    app
        .route("/api/coporate/returnCoporateData")
        .post([auth_1.default, coporateController.returnCoporateData]);
    app
        .route("/api/coporate/approveCoporateData")
        .post([auth_1.default, coporateController.approveCoporateData]);
    app
        .route("/api/coporate/getCoporateDataByMemebershipId/:membershipnumber")
        .get([auth_1.default, coporateController.getCoporateDataByMemebershipId]);
    app
        .route("/api/coporate/getCoporateMemeberListIssuedCertificates")
        .post([auth_1.default, coporateController.getCoporateMemeberListIssuedCertificates]);
    app
        .route("/api/coporate/getUnApprovedCoporateDataList")
        .post([auth_1.default, coporateController.getUnApprovedCoporateDataList]);
    app
        .route("/api/coporate/getUnSubmittedCoporateDataList")
        .post([auth_1.default, coporateController.getUnSubmittedCoporateDataList]);
};
//# sourceMappingURL=coporateRoutes.js.map