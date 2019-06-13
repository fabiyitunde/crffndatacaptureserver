import { IndividualDataSchema } from "../../models/individualdata";
import { dataCaptureRegistrationStatus } from "../../parameters";
import * as mongoose from "mongoose";

import { getStateList, getLGAList, getCategory } from "../../queries/parameterQueries";
const IndividualData = mongoose.model("IndividualData", IndividualDataSchema);
export async function updateIndividualData(
  mongo_id: string,
  membershipnumber: string,
  title: string,
  surname: string,
  othernames: string,
  category: any,
  address: string,
  email: string,
  phonenumber: string,
  statecode: string,
  lgacode: string,
  typeofid: string,
  idcardnumber: string
) {
  const existingrecordByMongoId: any = await IndividualData.findOne({
    _id: mongo_id
  });
  const existingrecordByMembershipNumber: any = await IndividualData.findOne({
    membershipnumber: membershipnumber
  });
  if (existingrecordByMembershipNumber) {
    if (existingrecordByMembershipNumber._id != existingrecordByMongoId._id)
      throw "This Membership Number Already Assigned";
  }
  if (existingrecordByMongoId.status != dataCaptureRegistrationStatus.Pending)
    throw "The Record Is No More Pending";
  const statelist: any[] = await getStateList();
  const lgalist: any[] = await getLGAList();
  const categoryobj: any = getCategory(category);
  const existingstate: any = statelist.find(a => a.code == statecode);
  const existinglga: any = lgalist.find(a => a.code == lgacode);
  var updaterec: any = {
    membershipnumber: membershipnumber,
    title: title,
    surname: surname,
    othernames:  othernames,
    category: { code: category.code, description: category.description},
    address: address,
    email: email,
    phonenumber: phonenumber,
    state: { code: existingstate.code, description: existingstate.description },
    lga: { code: existinglga.code, description: existinglga.description },   
    typeofid: typeofid,
    idcardnumber: idcardnumber,
    status: dataCaptureRegistrationStatus.Pending,
  };
  await IndividualData.findOneAndUpdate({ _id: mongo_id }, updaterec);
}
