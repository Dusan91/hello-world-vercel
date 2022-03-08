import Image from 'next/image';
import styles from '../styles/main.module.css';
import ProfileImg from '../assets/1.png';
import { InfoCircleTwoTone } from '@ant-design/icons/lib/icons';
const AboutMe = ({ aboutMe, labels, language }) => {
  return (
    <div className={styles.contentWrapperFlexSpaceBetween}>
      <div className={styles.content}>
        <h2 className={styles.subHeader}>
          <InfoCircleTwoTone />
          <span className={styles.subHeaderText}>{labels.aboutMe}</span>
        </h2>
        <hr />
        <p className={styles.text}>{aboutMe[language]}</p>
      </div>
      <Image
        src={ProfileImg.src}
        width={450}
        height={450}
        className={styles.image}
      />
    </div>
  );
};

export default AboutMe;
