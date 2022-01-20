import React, { useEffect } from 'react';
import './App.css';
import { LangSelector } from './LangSelector';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch('assets/lng.json', { headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }}).then((res) => res.json()).then((data) => i18n.changeLanguage(data.lng));
  }, [i18n])

  return (
    <div className="App">
      <header className="App-header">
        <LangSelector />
        Hello, {t?.('TITLE', { ns: 'translations'})} 
      </header>
    </div>

  );
}

export default App;
