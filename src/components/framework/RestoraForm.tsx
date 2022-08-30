export function RestoraForm(props: any) {
  const { children, ...otherProps } = props
  return <form {...otherProps}>{children}</form>
}
