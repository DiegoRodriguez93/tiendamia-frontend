import Navbar from "../Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
