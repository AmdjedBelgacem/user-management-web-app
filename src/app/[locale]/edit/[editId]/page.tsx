import Edit from "@/components/Edit";
import React from "react";
import { useTranslations } from "next-intl";

export default function Page({ params }: { params: { slug: string } }) {
  const m = useTranslations("MasterView");
  const mTranslations = {
    id: m("ID"),
    fullName: m("FullName"),
    email: m("Email"),
  };

  const d = useTranslations("DetailedView");
  const dTranslations = {
    username: d("Username"),
    gender: d("Gender"),
    birthDate: d("BirthDate"),
    phoneNumber: d("PhoneNumber"),
    male: d("Male"),
    female: d("Female"),
    notAssigned: d("NotAssigned"),
    createAUser: d("CreateAUser"),
    EditAUser: d("EditAUser"),
    Back: d("Back"),
  };
  return <Edit actionText={d("Save")} params={params} mTranslations={mTranslations} dTranslations={dTranslations}/>;
}
