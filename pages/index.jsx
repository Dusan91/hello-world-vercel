import Image from 'next/image';
import { Fragment, useRef } from 'react';
// import API from '../services/api';
import Header from '../components/header';
import styles from '../styles/main.module.css';
import AboutMe from '../components/aboutMe';
import ProfessionalExperience from '../components/professionalExperience';
import Projects from '../components/projects';
import Education from '../components/education';
import Skills from '../components/skills';
import Navbar from '../components/navbar';
import handleScrollTo from '../utils/handleScrollTo';
import { useLanguage } from '../utils/useLanguage';
import getLabels from '../utils/getLanguageLabels';
import Contact from '../components/contact';
import DB from '../db.json';
const Home = ({ userData, expiriece, projects, skills }) => {
  const { language } = useLanguage();
  const labels = getLabels(language);
  const topRef = useRef();
  const amRef = useRef();
  const peRef = useRef();
  const pRef = useRef();
  const sRef = useRef();
  const eRef = useRef();
  const cRef = useRef();
  const userInfo = {
    name: userData.name,
    position: userData.position,
    linkedin: userData.linkedin,
  };
  return (
    <Fragment>
      <Navbar
        handleOnClick={handleScrollTo({
          topRef,
          amRef,
          peRef,
          pRef,
          sRef,
          eRef,
          cRef,
        })}
        labels={labels}
      />
      <div className={styles.container}>
        <div className={styles.refContainer} ref={topRef}>
          <Header user={userInfo} labels={labels} />
        </div>
        <div className={styles.refContainer} ref={amRef}>
          <AboutMe
            aboutMe={userData.aboutMe}
            labels={labels}
            language={language}
          />
        </div>
        <div className={styles.refContainer} ref={peRef}>
          <ProfessionalExperience
            expiriece={expiriece}
            labels={labels}
            language={language}
          />
        </div>
        <div className={styles.refContainer} ref={pRef}>
          <Projects projects={projects} labels={labels} />
        </div>
        <div className={styles.refContainer} ref={sRef}>
          <Skills skills={skills} labels={labels} />
        </div>
        <div className={styles.refContainer} ref={eRef}>
          <Education
            education={userData.education}
            labels={labels}
            language={language}
          />
        </div>
        <div className={styles.refContainer} ref={cRef}>
          <Contact
            contact={{ ...userData.contactData, linkedin: userData.linkedin }}
            labels={labels}
          />
        </div>
      </div>
    </Fragment>
  );
};

Home.getInitialProps = async () => {
  // const userData = await API.getUserData();
  // const expiriece = await API.getExpiriece();
  // const projects = await API.getProjects();
  // const skills = await API.getSkills();
  const data = JSON.parse(JSON.stringify(DB));
  const userData = data.userData;
  const expiriece = data.professionalExpirence;
  const projects = data.projects;
  const skills = data.skills;
  return {
    userData: userData,
    expiriece: expiriece,
    projects: projects,
    skills: skills,
  };
};

export default Home;
