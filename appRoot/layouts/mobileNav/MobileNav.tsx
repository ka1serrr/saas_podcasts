import styles from "./mobileNav.module.scss";
import Image from "next/image";

export const MobileNav = () => {
  return (
    <div className={styles.wrapper}>
      <Image src='/icons/logo.svg' alt='Menu icon' width={30} height={30} />
      MobileNav
    </div>
  );
};
