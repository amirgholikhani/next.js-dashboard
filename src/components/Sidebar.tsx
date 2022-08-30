import { RestoraCard, RestoraCol } from "@/components/framework";
import Group from "@mui/icons-material/Group";
import ListAlt from "@mui/icons-material/ListAlt";
import Home from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";
import MenuItem from "@/components/Sidebar/MenuItem";
import styles from "@/styles/sidebar.module.scss";

function Sidebar() {
  const { t } = useTranslation();
  const menus = [
    { link: "/", text: t("dashboard"), icon: <Home /> },
    { link: "/customers", text: t("customers"), icon: <Group /> },
    { link: "/reserves", text: t("reserves"), icon: <ListAlt /> },
  ];
  return (
    <RestoraCard className={styles.main}>
      <RestoraCol spacing={3}>
        <RestoraCol className={styles.header}>{t("welcome")}</RestoraCol>
        <RestoraCol spacing={2} className={styles.menus}>
          {menus.map((menu) => {
            return (
              <MenuItem
                key={menu.link}
                link={menu.link}
                text={menu.text}
                icon={menu.icon}
              />
            );
          })}
        </RestoraCol>
      </RestoraCol>
    </RestoraCard>
  );
}

export default Sidebar;
