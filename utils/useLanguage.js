import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

const LanguageCtx = createContext({
  language: 'Eng',
  setLanguage: () => {},
});

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('Eng');
  const value = useMemo(() => ({
    language,
    setLanguage,
  }));
  return <LanguageCtx.Provider {...props} value={value} />;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageCtx);
  if (!ctx) {
    throw new Error('useLanguage is not inside LanguageProvider');
  }

  return ctx;
};
