import { LoadingWrapperProps } from '@/models/loadingWrapper.interface'
import style from '@/styles/loading.module.scss'
import { RestoraCard } from '@/components/framework'

function LoadingWrapper({ loading, dense, children }: LoadingWrapperProps) {
  const minHeight = dense ? 'auto' : '200px'

  return (
    <RestoraCard sx={{ height: '100%' }}>
      {loading ? (
        <RestoraCard sx={{ minHeight }} className={style.spinnerWrapper}>
          <RestoraCard className={style.spinner}>
            <div className={style.bounce1}></div>
            <div className={style.bounce2}></div>
            <div className={style.bounce3}></div>
          </RestoraCard>
        </RestoraCard>
      ) : (
        children
      )}
    </RestoraCard>
  )
}

export default LoadingWrapper
