import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/section/Header';
import Section1 from './components/section/Section1';
import Section2 from './components/section/Section2';
import Section3 from './components/section/Section3';
import Section4 from './components/section/Section4';
import Section5 from './components/section/Section5';
import Section6 from './components/section/Section6';
import Section7 from './components/section/Section7';
import Loading from './components/section/Loading';
import Footer from './components/section/Footer';
import script from './js/script';

function App() {
  useEffect(() => {
    const runScript = () => {
      script();
    };

    runScript();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Loading />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
