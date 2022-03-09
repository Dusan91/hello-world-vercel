import { ToolTwoTone } from '@ant-design/icons/lib/icons';
import styles from '../styles/main.module.css';
const Skills = ({ skills, labels }) => {
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.subHeader}>
        <ToolTwoTone />
        <span className={styles.subHeaderText}>{labels.skills}</span>
      </h2>
      <hr />

      <div className={styles.contentWrapperFlexSpace}>
        {skills &&
          skills.map((item, i) => (
            <h3 className={styles.tag} key={i}>
              {item}
            </h3>
          ))}
      </div>
    </div>
  );
};
export default Skills;
