import { NativeSelect } from "@material-ui/core";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export function Lang() {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <NativeSelect
      id="select"
      value={i18next.language}
      disableUnderline={true}
      onChange={handleChange}
    >
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </NativeSelect>
  );
}
