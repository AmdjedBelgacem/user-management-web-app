import MasterView from "@/components/MasterView";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("MasterView");
  const translations = {
    title: t("title"),
    id: t("ID"),
    fullName: t("FullName"),
    email: t("Email"),
    operations: t("Operations"),
    new: t("New"),
    edit: t("Edit"),
    delete: t("Delete"),
    noUser: t("NoUser"),
  };
  return <MasterView translations={translations }/>;
}