import Link from "next/link";
import { useRouter } from "next/router";
import { RestoraCard, RestoraRow } from "@/components/framework";
import { MenuItemProps } from "@/context/menu-item.interface";
import styles from "@/styles/sidebar/menu-item.module.scss";

function MenuItem({ link, text, icon }: MenuItemProps) {
  const router = useRouter();
  const active = router.asPath === link;
  return (
    <RestoraCard>
      <Link href={link} passHref>
        <div
          className={[styles.wrapper, active ? styles.active : ""].join(" ")}
        >
          <RestoraRow spacing={2} alignItems="center">
            <div>{icon}</div>
            <div>{text}</div>
          </RestoraRow>
        </div>
      </Link>
    </RestoraCard>
  );
}

export default MenuItem;
