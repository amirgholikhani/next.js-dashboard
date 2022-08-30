import React from "react";
import {useRouter} from "next/router";
import {
  RestoraCard,
  RestoraCol,
  RestoraContainer,
  RestoraItem,
} from "@/components/framework";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {Drawer} from "@mui/material";
import styles from "@/styles/layout.module.scss";

function Layout({ children }: any) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  React.useEffect(() => {
    if (window && !localStorage.getItem('token') && router.asPath !== '/login') {
      router.push('/login')
    }
  }, [])

  return (
    <RestoraCard className={styles.wrapper}>
      <RestoraContainer className={styles.containerWrapper}>
        <RestoraItem className={styles.sidebar} lg={3} xl={2.4}>
          <Sidebar />
        </RestoraItem>
        <RestoraItem className={styles.contentWrapper} xs={12} lg={9} xl={9.6}>
          <RestoraCard className={styles.contentWrapper}>
            <RestoraCol className={styles.contentWrapper}>
              <RestoraCard>
                <Header openDrawer={open} toggleDrawer={(open) => toggleDrawer(open)} />
              </RestoraCard>
              <RestoraCard className={styles.content}>{children}</RestoraCard>
            </RestoraCol>
          </RestoraCard>
        </RestoraItem>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => toggleDrawer(false)}
          classes={{paper: styles.drawer}}
        >
          <Sidebar />
        </Drawer>
      </RestoraContainer>
    </RestoraCard>
  );
}

export default Layout;
