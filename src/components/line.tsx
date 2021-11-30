
const Line = ({ caption, value, color, isColumn }: {
  caption?: string
  value: number | string
  color?: string
  isColumn?: boolean
}) => {
  return <div className={"d-flex justify-content-between " + (isColumn ? "flex-column align-items-center" : "")}>
    {caption && <div className="text-secondary">{caption}</div>}
    <div className={color}>{typeof value === "number" ? value.toLocaleString() : value}</div>
  </div>
}

export default Line