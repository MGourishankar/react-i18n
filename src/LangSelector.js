import React from "react";
import { useTranslation } from 'react-i18next';

export const LangSelector = () => {
        const { i18n } = useTranslation();

        const changeLng = (event) => {
            console.log(event.target.value);
            i18n.changeLanguage(event.target.value);
        }
        return (
            <select value={i18n.language} onChange={changeLng}>
                <option value="en">EN</option>
                <option value="nl">NL</option>
            </select>
        )
}