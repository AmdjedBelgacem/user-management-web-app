import Delete from "@/components/Delete";
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
    DeleteAUser: d("DeleteAUser"),
    Back: d("Back"),
  };
  return (
    <Delete
      actionText={d("Delete")}
      params={params}
      mTranslations={mTranslations}
      dTranslations={dTranslations}
    />
  );
}
