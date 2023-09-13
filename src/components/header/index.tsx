import styles from "./Header.module.scss";
import PrimaryNavbar from "@/components/header/primaryNavbar";
import SecondaryNavbar from "@/components/header/secondaryNavbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <PrimaryNavbar />
      <SecondaryNavbar />
    </div>
  );
};

export default Header;
