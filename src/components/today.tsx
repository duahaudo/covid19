import { Dispatch, SetStateAction, useCallback } from "react"
import moment from "moment"
import { LOCAL_STORAGE_KEY, PAGE, Overview } from "../interface"
import Line from "./line"
import Panel from "./panel"

const Today = (props: {
  today: Overview,
  view: PAGE
  setView: Dispatch<SetStateAction<PAGE>>
}) => {
  const { setView, today } = props
  const getClassName = useCallback(
    (view: PAGE) => {
      return view === props.view ? "text-primary" : "text-secondary"
    },
    [props.view]
  )

  const setCurrentView = useCallback(
    (view) => {
      setView(view)
      localStorage.setItem(LOCAL_STORAGE_KEY.PAGE, view)
    },
    [setView],
  )

  return <Panel>
    <>
      <div className="overview fs-6 p-3 pb-0 d-flex justify-content-between ">
        <div className="text-primary">{moment(today.date, "DD-MM").format("ddd, MMM DD YYYY")}</div>
        <div className="d-flex">
          <div role="button" onClick={() => setCurrentView(PAGE.Overview)}
            className={getClassName(PAGE.Overview)}>Overview</div>
          <div role="button" onClick={() => setCurrentView(PAGE.Details)}
            className={"ms-3 " + getClassName(PAGE.Details)}>Details</div>
        </div>
      </div>
      <div className="d-flex justify-content-between p-3 col-12 col-md-6 col-lg-3">
        <Line caption="Cases" value={props.today.cases} color="" isColumn={true} />
        <Line caption="Recovered" value={props.today.recovered} color="text-primary" isColumn={true} />
        <Line caption="Death" value={props.today.death} color="text-danger" isColumn={true} />
      </div>
    </>
  </Panel>
}

export default Today