import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.leftSide}>
        <div className={styles.logoBlock}>
          auth
          {/* <LogoIcon fill="white" width="160" height="160" /> */}
          <h1 className={styles.title}>Добро пожаловать</h1>
        </div>

        {/* <div className={styles.subtitleBlock}>
          © Soliq Servis. Все права защищены
        </div> */}
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
