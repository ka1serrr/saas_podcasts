"use client";

import { sideBarLinks } from "@/appRoot/config";
import styles from "./leftSideBar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared";

export const LeftSideBarLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {sideBarLinks.map((link) => {
        const isActive = pathName === link.path;

        return (
          <Link key={link.path} href={link.path} className={cn(styles.link, { [styles.link_active]: isActive })}>
            <Image src={link.photoUrl} alt={link.photoAlt} width={20} height={20} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </>
  );
};
