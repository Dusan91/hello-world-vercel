import { useState } from 'react';
import styles from '../styles/main.module.css';
import { useLanguage } from '../utils/useLanguage';
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [lang, setLang] = useState(language);

  const handleOnChange = e => {
    setLanguage(e.target.value);
    setLang(e.target.value);
  };
  const isSelected = value => language === value;
  return (
    <select
      name="cars"
      id="cars"
      className={styles.languageSelect}
      onChange={handleOnChange}
      value={lang}
    >
      <option value="Eng">Eng</option>
      <option value="Srb">Srb</option>
    </select>
  );
};

export default LanguageSwitcher;
