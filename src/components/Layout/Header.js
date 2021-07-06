import HeaderCartButton from "./HeaderCartButton";
import mealsImages from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImages} alt="A table with food" />
      </div>
    </>
  );
};

export default Header;
