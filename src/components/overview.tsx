import { useMemo } from "react"
import { Overview, VietNam } from "../interface"
import Line from "./line"

const OverviewPanel = (props: {
  overviews: Overview[]
  today: VietNam
}) => {
  const overviews = useMemo(() => {
    const result = [...props.overviews]
    result.reverse()
    return result
  }, [props.overviews])

  return <div className="bg-white m-2 p-2 rounded-3">
    <div className="overview text-primary">{new Date().toDateString()}</div>

    <div className="d-flex justify-content-between mb-3 col-12 col-md-6 col-lg-3">
      <Line caption="Cases" value={props.today.cases} color="" isColumn={true} />
      <Line caption="Recovered" value={props.today.recovered} color="text-primary" isColumn={true} />
      <Line caption="Death" value={props.today.death} color="text-danger" isColumn={true} />
    </div>

    <div className="d-flex flex-wrap border-top">
      {overviews.map((date, idx) => {
        return <div key={date.date}
          className={"col-6 col-sm-6 col-md-3 col-lg-2 p-2 border border-top-0 margin--1"} >
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