import Grid from '@mui/material/Grid'

export function RestoraFormItem(props: any) {
  const { children, ...otherProps } = props
  return (
    <Grid item xs={12} {...otherProps}>
      {children}
    </Grid>
  )
}
