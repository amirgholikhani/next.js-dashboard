import Stack from '@mui/material/Stack'

export function RestoraRow(props: any) {
  const { children, ...otherProps } = props
  return <Stack direction="row" {...otherProps}>{children}</Stack>
}
