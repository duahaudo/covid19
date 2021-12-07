import { useMemo } from "react"
import { Overview } from "../interface"
import Box from "./box"
import Line from "./line"
import Panel from "./panel"
import Chart, { Options } from "./chart"

const OverviewPanel = (props: {
  overviews: Overview[]
}) => {
  const { overviews } = props

  const options = useMemo<Options>(() => {
    const data = [...overviews]
    return {
      labels: data.map(item => item.date),
      datasets: [
        {
          label: "Death",
          data: data.map(item => item.death),
          borderColor: "rgb(220,53,69)",
          color: "rgb(220,53,69)"
        }
      ]
    }
  }, [overviews])

  return <>
    <Panel>
      <Chart type="line" options={options} />
    </Panel>
    <Panel>
      <div className="d-flex flex-wrap border-top">
        {props.overviews.map((date) => {
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
  </>
}

export default OverviewPanel