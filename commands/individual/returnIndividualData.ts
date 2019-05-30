import { IndividualDataSchema } from "../../models/individualdata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";
const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);
export async function returnIndividualData(membershipnumber: string) {
  const existingrecordByMembershipNumber: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  if (
    existingrecordByMembershipNumber.status !=
    dataCaptureRegistrationStatus.Submitted
  )
    throw "record No More Pending For Approval";

  await IndividualData.findOneAndUpdate(
    { membershipnumber: membershipnumber },
    { status: dataCaptureRegistrationStatus.Pending }
  );
}
