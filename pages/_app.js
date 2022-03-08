import Footer from '../components/footer';
import LanguageSwitcher from '../components/languageSwitcher';
import '../styles/_global.css';
import { LanguageProvider, useLanguage } from '../utils/useLanguage';

const App = ({ Component, pageProps }) => {
  const { language } = useLanguage();
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
