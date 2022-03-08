import styles from '../styles/main.module.css';
import navbarsData from '../utils/navBarData';
import Item from './item';

const Navbar = ({ handleOnClick, labels }) => {
  const navBarData = navbarsData(labels);
  return (
    <ul className={styles.navbarLinks}>
      {navBarData.map((item, i) => (
        <Item
          key={i}
          label={item.label}
          handleOnClick={handleOnClick}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </ul>
  );
};

export default Navbar;
