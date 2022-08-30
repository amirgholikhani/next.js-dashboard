import Box from '@mui/material/Box'

export function RestoraCard(props: any) {
  const { children, ...otherProps } = props
  return <Box {...otherProps}>{children}</Box>
}
