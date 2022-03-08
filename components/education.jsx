import { HomeTwoTone } from '@ant-design/icons/lib/icons';
import styles from '../styles/main.module.css';
const Education = ({ education, labels, language }) => {
  const renderEducation = (item, i) => {
    return (
      <div key={i}>
        <h1>{item.course}</h1>
        <h4 className={styles.title}>
          {item.school}, {item.date}
        </h4>
      </div>
    );
  };
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.subHeader}>
        <HomeTwoTone />
        <span className={styles.subHeaderText}>{labels.education}</span>
      </h2>
      <hr />
      <div className={styles.contentWrapperFlexSpaceBetween}>
        {education &&
          education[language].map((item, i) => {
            return renderEducation(item, i);
          })}
      </div>
    </div>
  );
};
export default Education;
