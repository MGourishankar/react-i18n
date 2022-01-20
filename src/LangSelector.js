import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export const LangSelector = () => {
    const { i18n, t } = useTranslation();
    const [name, setName] = useState('');

    i18n.loadNamespaces('common', () => {
        console.log('common loaded ' + t?.('common:NAME'));
        if(!name)
            setName(t?.('common:NAME'));
    });

    const changeLng = (event) => {
        console.log(event.target.value);
        i18n.changeLanguage(event.target.value);
        setName(t?.('common:NAME'));
    }
    return (
        <>
            <select value={i18n.language} onChange={changeLng}>
                <option value="en">EN</option>
                <option value="nl">NL</option>
            </select>
            <br />
            <div>{name}</div>
        </>
    )
}