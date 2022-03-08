import styles from '../styles/main.module.css';

const Header = ({ user, labels }) => {
  const handleNavigateTo = () => window.open(user.linkedin);
  return (
    <div className={styles.header}>
      <h4 className={styles.title}>{user.name}</h4>
      <h1 className={styles.title}>{user.position}</h1>
      <div className={styles.buttonRoundWrapper}>
        <button className={styles.buttonRound} onClick={handleNavigateTo}>
          {labels.hireMe} &#8594;
        </button>
      </div>
    </div>
  );
};

export default Header;
