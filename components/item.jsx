import styles from '../styles/main.module.css';
const Item = ({ label, handleOnClick, icon, name }) => {
  return (
    <li
      className={(styles.navbarLink, 'tooltip')}
      onClick={() => handleOnClick(name)}
    >
      <span className="tooltiptext">{label}</span>
      {icon}
    </li>
  );
};
export default Item;
