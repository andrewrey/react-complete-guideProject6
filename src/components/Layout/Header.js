import "./Header.module.css";
import mealsImages from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImages} alt="A table with food" />
      </div>
    </>
  );
};

export default Header;
