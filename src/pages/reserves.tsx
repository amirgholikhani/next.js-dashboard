import { useTranslation } from "react-i18next";
import { RestoraCard, RestoraRow } from "@/components/framework";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

function Reserves() {
  const { t } = useTranslation();
  return (
    <RestoraCard>
      <RestoraRow justifyContent="space-between" alignItems="center">
        <div>
          <h2>{t("reserves")}</h2>
        </div>
        <Button startIcon={<Add />} variant="contained" color="primary">
          {t("add")}
        </Button>
      </RestoraRow>
    </RestoraCard>
  );
}

export default Reserves;
