import Create from "@/components/Create";
import React from "react";
import { useTranslations } from "next-intl";

export default function Page() {
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
    Back: d("Back"),
  };
  return <Create actionText={d("Create")} mTranslations={mTranslations} dTranslations={dTranslations}/>;
}
