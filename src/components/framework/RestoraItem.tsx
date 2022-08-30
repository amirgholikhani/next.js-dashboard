import Grid from '@mui/material/Grid'

export function RestoraItem(props: any) {
  const { children, ...otherProps } = props
  return (
    <Grid item {...otherProps}>
      {children}
    </Grid>
  )
}