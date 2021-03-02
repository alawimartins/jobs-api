const size = {
  xs: '320px',
  sm: '600px',
  lg: '768px',
}
const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`
}
export default { size, device }