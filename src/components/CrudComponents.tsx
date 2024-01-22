"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface CrudComponentsProps {
  user: {
    id: number;
    fullName: string;
    email: string;
  };
  translations: {
    edit: string;
    delete: string;
  };
}
// Just Getting props and handling them
export default function CrudComponents({ user, translations }: CrudComponentsProps) {
  // I Like to style this way in generale or if im using tailwind, it is cleaner in general
  const styles = {
    li: "w-full flex justify-between gap-x-2",
    dataContainer:
      "flex w-4/5 h-min-screen justify-between gap-x-2 items-center font-semibold",
    data: "flex items-center justify-start bg-white dark:bg-gray-800 p-1 rounded-xl dark:text-gray-200 shadow-2xl overflow-x-auto max-[450px]:text-[8px] max-[700px]:text-[12px] max-[700px]:pt-2 h-full",
    buttonContainer: "flex items-center h-8 w-1/5 pl-1 gap-x-1 font-semibold",
    button: "w-1/2 h-full rounded-lg transition duration-300 ease-in-out",
  };

  const locale = useLocale();
  // Using the useRouter hook to redirect to the relevant page
  const router = useRouter();
  // Button Loading for better user experience
  const [editLoading, setEditLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  return (
    <li className={`${styles.li}`}>
      <div className={`${styles.dataContainer}`}>
        <p className={`${styles.data} w-[30%] pl-2`}>{user.fullName}</p>
        <p className={`${styles.data} w-[70%] pl-2`}>{user.email}</p>
      </div>
      <div className={`${styles.buttonContainer}`}>
        <button
          disabled={editLoading}
          onClick={() => {
            setEditLoading(true);
            router.push(`${locale}/edit/${user.id}`);
          }}
          className={`${styles.button} bg-yellow-500 hover:bg-yellow-600 text-white`}
        >
          <span className="hidden md:block">{translations.edit}</span>
          <FontAwesomeIcon icon={faPenToSquare} className="md:hidden" />
        </button>
        <button
          disabled={deleteLoading}
          onClick={() => {
            setDeleteLoading(true);
            router.push(`${locale}/delete/${user.id}`);
          }}
          className={`${styles.button} bg-red-500 hover:bg-red-600 text-white`}
        >
          <span className="hidden md:block">{translations.delete}</span>
          <FontAwesomeIcon icon={faTrashCan} className="md:hidden" />
        </button>
      </div>
    </li>
  );
}
