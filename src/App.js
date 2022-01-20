import React from 'react';
import './App.css';
import { LangSelector } from './LangSelector';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
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
