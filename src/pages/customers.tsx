import { useTranslation } from "react-i18next";
import { RestoraCard, RestoraCol, RestoraRow } from "@/components/framework";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import List from "@/components/Customers/List";

function Customers() {
  const { t } = useTranslation();
  return (
    <RestoraCard>
      <RestoraCol spacing={3}>
        <RestoraRow justifyContent="space-between" alignItems="center">
          <div>
            <h2>{t("customers")}</h2>
          </div>
          <Button startIcon={<Add />} variant="contained" color="primary">
            {t("add")}
          </Button>
        </RestoraRow>
        <RestoraCard>
          <List />
        </RestoraCard>
      </RestoraCol>
    </RestoraCard>
  );
}

export default Customers;
