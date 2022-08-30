import Grid from '@mui/material/Grid'

export function RestoraContainer(props: any) {
  const { children, ...otherProps } = props
  return <Grid container {...otherProps}>{children}</Grid>
}
