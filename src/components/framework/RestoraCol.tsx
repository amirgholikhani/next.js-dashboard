import Stack from '@mui/material/Stack'

export function RestoraCol(props: any) {
  const { children, ...otherProps } = props
  return <Stack {...otherProps}>{children}</Stack>
}
