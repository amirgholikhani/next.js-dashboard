import React from 'react'
import { useRouter } from 'next/router'
import LoadingWrapper from '@/components/LoadingWrapper'

function LoadingPageWrapper({ children }: any) {
  const router = useRouter()

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleStart = () => setLoading(true)

    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return <LoadingWrapper loading={loading}>{children}</LoadingWrapper>
}

export default LoadingPageWrapper
