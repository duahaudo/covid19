
const Line = ({ caption, value, color }: {
  caption?: string
  value: number | string
  color?: string
}) => {
  return <div className="d-flex justify-content-between">
    {caption && <div className="text-secondary">{caption}</div>}
    <div className={color}>{value}</div>
  </div>
}

export default Line