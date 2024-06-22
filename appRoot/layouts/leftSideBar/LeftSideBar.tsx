"use client";

import { paths } from "@/app/config";

import styles from "./leftSideBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LeftSideBarLinks } from "./LeftSideBarLinks";

export const LeftSideBar = () => {
  return (
    <aside className={styles.left_sidebar}>
      <nav className={styles.navigation}>
        <Link href={paths.home}>
          <Image src='/icons/logo.svg' alt='logo' width={23} height={27} />
          <Link href={paths.home}>
            <h1 className={styles.title}>Home</h1>
          </Link>
        </Link>

        <LeftSideBarLinks />
      </nav>
    </aside>
  );
};
