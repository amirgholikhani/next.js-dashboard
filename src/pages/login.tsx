import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { RegisterOptions, useForm } from 'react-hook-form'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  RestoraCard,
  RestoraCol,
  RestoraContainer,
  RestoraItem,
} from '@/components/framework'
import { createStyles, makeStyles } from '@mui/styles'
import { Button, IconButton, TextField, Theme } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IOCContainer, IocTypes } from '@/api/services/IOCContainer'
import { AuthRepository } from '@/api/Auth/AuthRepository'
import MainLayout from '@/components/MainLayout'
import { SendLoginDTO } from '@/models/services/auth.interface'
import ClearIcon from '@/assets/images/clear-icon.png'
import Background from '@/assets/images/login/background.png'
import styles from '@/styles/login-form.module.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorText: {
      color: theme.palette.error.main,
      fontSize: '10px',
      margin: '2px 5px 0 6px',
    },
    clearIcon: {
      position: 'absolute',
      top: '11px',
      right: '10px',
      '& > button': {
        width: '20px',
        height: '20px',
        padding: '0 !important',
      },
    },
    eyeIcon: {
      position: 'absolute',
      top: '11px',
      left: '20px',
      '& > button': {
        width: '20px',
        height: '20px',
        padding: '0 !important',
      },
    },
  })
)

function Login() {
  const [loading, setLoading] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const { t } = useTranslation()
  const classes = useStyles()
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm()

  const authenticate = async (data: any) => {
    const { username, password } = data
    const branchId = 1
    const userAgent = 'Chrome/104.0.0.0 Mobile'
    const payload: SendLoginDTO = {
      data: { username, password, branchId, userAgent },
    }
    setLoading(true)
    try {
      const response = await IOCContainer.getInstance<AuthRepository>(
        IocTypes.AuthRepository
      ).login(payload)

      console.log(response)
      router.push('/')
    } catch (error: any) {
      const status = error?.response?.status
      if (status === 400) {
      }
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (data: any) => {
    authenticate(data)
  }

  const handleClearInput = (field: string) => {
    setValue(field, '', { shouldDirty: true })
  }

  return (
    <RestoraCard className={styles.wrapperFullHeight}>
      <RestoraContainer className={styles.wrapperFullHeight}>
        <RestoraItem lg={6}>
          <RestoraCard className={styles.wrapperFullHeight}>
            <RestoraCol
              className={styles.wrapperFullHeight}
              justifyContent="center"
              alignItems="center"
            >
              <RestoraCard className={styles.formWrapper}>
                <form
                  className={styles.wrapperFullHeight}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <RestoraCol
                    spacing={4}
                    className={styles.wrapperFullHeight}
                    justifyContent="center"
                  >
                    <RestoraCard className={styles.inputWrapper}>
                      <TextField
                        id="input-username"
                        label={t('username')}
                        placeholder={t('username')}
                        fullWidth
                        {...register('username', {
                          required: true,
                        })}
                        type="text"
                        error={errors?.username && true}
                      />
                      {errors?.username?.type ===
                        ('required' as RegisterOptions) && (
                        <p className={classes.errorText}>
                          {t('messages.required', { field: t('username') })}
                        </p>
                      )}
                      {errors?.username?.type ===
                        ('pattern' as RegisterOptions) && (
                        <p className={classes.errorText}>
                          {t('messages.pattern', { field: t('username') })}
                        </p>
                      )}
                      {watch('username') && (
                        <span className={classes.clearIcon}>
                          <IconButton
                            onClick={() => handleClearInput('username')}
                          >
                            <Image src={ClearIcon} alt={t('clear')} />
                          </IconButton>
                        </span>
                      )}
                    </RestoraCard>
                    <RestoraCard className={styles.inputWrapper}>
                      <TextField
                        id="input-password"
                        label={t('password')}
                        placeholder={t('password')}
                        fullWidth
                        {...register('password', {
                          required: true,
                        })}
                        type={showPassword ? 'text' : 'password'}
                        error={errors?.password && true}
                      />
                      {errors?.password?.type ===
                        ('required' as RegisterOptions) && (
                        <p className={classes.errorText}>
                          {t('messages.required', { field: t('password') })}
                        </p>
                      )}
                      {errors?.password?.type ===
                        ('pattern' as RegisterOptions) && (
                        <p className={classes.errorText}>
                          {t('messages.pattern', { field: t('password') })}
                        </p>
                      )}
                      {watch('password') && (
                        <span className={classes.clearIcon}>
                          <IconButton
                            onClick={() => handleClearInput('password')}
                          >
                            <Image src={ClearIcon} alt={t('clear')} />
                          </IconButton>
                        </span>
                      )}
                      {watch('password') && !showPassword && (
                        <span className={classes.eyeIcon}>
                          <IconButton
                            onClick={() => setShowPassword(true)}
                          >
                            <VisibilityOff />
                          </IconButton>
                        </span>
                      )}
                      {watch('password') && showPassword && (
                        <span className={classes.eyeIcon}>
                          <IconButton
                            onClick={() => setShowPassword(false)}
                          >
                            <Visibility />
                          </IconButton>
                        </span>
                      )}
                    </RestoraCard>
                    <Button
                      disabled={loading}
                      fullWidth
                      type="submit"
                      variant="contained"
                    >
                      {t('continue')}
                    </Button>
                  </RestoraCol>
                </form>
              </RestoraCard>
            </RestoraCol>
          </RestoraCard>
        </RestoraItem>
        <RestoraItem lg={6} className={styles.wrapperFullHeight}>
          <RestoraCard className={styles.imageWrapper}>
            <Image layout="responsive" className={styles.image} src={Background} alt="background" />
          </RestoraCard>
        </RestoraItem>
      </RestoraContainer>
    </RestoraCard>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Login
