import { useMemo } from "react"
import { Overview, VietNam } from "../interface"
import Box from "./box"
import Line from "./line"
import Panel from "./panel"

const OverviewPanel = (props: {
  overviews: Overview[]
}) => {
  const overviews = useMemo(() => {
    const result = [...props.overviews]
    result.reverse()
    return result
  }, [props.overviews])

  return <Panel>
    <div className="d-flex flex-wrap border-top">
      {overviews.map((date) => {
        return <Box key={date.date}>
          <>
            <Line caption="Date" value={date.date} />
            <Line caption="Cases" value={date.cases} />
            <Line caption="Recovered" value={date.recovered} color="text-primary" />
            <Line caption="Death" value={date.death} color="text-danger" />
          </>
        </Box>
      })}
    </div>
  </Panel>
}

export default OverviewPanel