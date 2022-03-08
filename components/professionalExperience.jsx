import { BulbTwoTone } from '@ant-design/icons/lib/icons';
import Image from 'next/image';
import styles from '../styles/main.module.css';
import getLabels from '../utils/getLanguageLabels';
const ProfessionalExperience = ({ expiriece, labels, language }) => {
  const renderCompany = (item, i) => {
    return (
      <div className={`${styles.flexRow} ${styles.peWrapper}`} key={i}>
        <Image src={`/${item.img}`} width={200} height={200} />
        <div className={styles.flexColumn}>
          <h1 className={styles.smallPadding}>{item.company}</h1>
          <h2 className={styles.smallPadding}>{item.position}</h2>
          <p className={(styles.smallPadding, styles.textRigth)}>
            {item.date[language]}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.subHeader}>
        <BulbTwoTone />
        <span className={styles.subHeaderText}>
          {labels.professionalExperience}
        </span>
      </h2>
      <hr />
      <div className={styles.contentWrapperFlexSpaceBetween}>
        {expiriece &&
          expiriece.map((item, i) => {
            return renderCompany(item, i);
          })}
      </div>
    </div>
  );
};
export default ProfessionalExperience;
