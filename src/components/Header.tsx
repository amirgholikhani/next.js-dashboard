import React from "react";
import IconButton from "@mui/material/IconButton";
import { RestoraCard, RestoraRow } from "@/components/framework";
import Search from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {HeaderProps} from "@/models/header.interface";
import Notifications from "@mui/icons-material/Notifications";
import Group from "@mui/icons-material/Group";
import styles from "@/styles/header.module.scss";

function Header({openDrawer, toggleDrawer}: HeaderProps) {

  const handleOpenDrawer = () => {
    toggleDrawer(true)
  }

  return (
    <RestoraCard className={styles.main}>
      <RestoraRow justifyContent="space-between">
        <RestoraCard>
          <IconButton
            className={styles.menuIcon}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleOpenDrawer}
            sx={{ ...(openDrawer && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </RestoraCard>
        <RestoraRow spacing={2}>
          <div>
            <IconButton>
              <Search className={styles.icon} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Group className={styles.icon} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Notifications className={styles.icon} />
            </IconButton>
          </div>
        </RestoraRow>
      </RestoraRow>
    </RestoraCard>
  );
}

export default Header;
