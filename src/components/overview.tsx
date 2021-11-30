import { Overview } from "../interface"


const Line = ({ caption, value, color }: {
  caption: string
  value: number | string
  color?: string
}) => {
  return <div className="d-flex justify-content-between">
    <div className="text-secondary">{caption}</div>
    <div className={color}>{value}</div>
  </div>
}

const OverviewPanel = (props: {
  overviews: Overview[]
}) => {
  return <div className="bg-white m-1 p-2">
    <h4 className="overview text-primary">Overview</h4>

    <div className="d-flex flex-wrap border-top">
      {props.overviews.map((date, idx) => {
        return <div key={date.date} className={"col-6 p-2 border border-top-0 " + (idx % 2 === 1 ? "border-start-0" : "")}>
          <Line caption="Date" value={date.date} />
          <Line caption="Cases" value={date.cases} />
          <Line caption="Recovered" value={date.recovered} color="text-primary" />
          <Line caption="Death" value={date.death} color="text-danger" />
        </div>
      })}

    </div>
  </div>
}

export default OverviewPanel