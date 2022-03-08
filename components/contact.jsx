import { ContactsTwoTone } from '@ant-design/icons/lib/icons';
import styles from '../styles/main.module.css';
const Contact = ({ contact, labels }) => {
  return (
    <div className={styles.contentWrapper}>
      <h2 className={styles.subHeader}>
        <ContactsTwoTone />
        <span className={styles.subHeaderText}>{labels.contact}</span>
      </h2>
      <hr />
      <div className={styles.contentWrapperFlexSpaceBetween}>
        <div>
          <h1>{labels.email}</h1>
          <h4 className={styles.title}>
            <a href={`mailto:{contact.email}`}>{contact.email}</a>
          </h4>
        </div>
        <div>
          <h1>{labels.linkedin}</h1>
          <h4 className={styles.title}>
            <a href={contact.linkedin} target="_blank">
              {labels.goToLinkedin}
            </a>
          </h4>
        </div>
        <div>
          <h1>{labels.phone}</h1>
          <h4 className={styles.title}>{contact.phone}</h4>
        </div>
      </div>
    </div>
  );
};
export default Contact;
