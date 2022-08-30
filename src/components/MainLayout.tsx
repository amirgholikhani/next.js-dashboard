import LoadingPageWrapper from "@/components/LoadingPageWrapper";
import {RestoraCard} from "@/components/framework";

function MainLayout({ children }: any) {
  return (
    <RestoraCard sx={{ height: '100%' }}>
      <LoadingPageWrapper>{children}</LoadingPageWrapper>
    </RestoraCard>
  )
}
export default MainLayout;