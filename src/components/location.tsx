import { useMemo } from "react"
import { Location } from "../interface"
import Box from "./box"
import { Options } from "./chart"
import Line from "./line"
import Panel from "./panel"
import Chart from "./chart"

const Covid19ByLocation = (props: {
  locations: Location[]
}) => {

  const options = useMemo<Options>(() => {
    return {
      labels: props.locations.map(item => item.name),
      datasets: [
        {
          label: "Death total",
          data: props.locations.map(item => item.death),
          backgroundColor: [
            "rgb(220, 53, 69)"
          ]
        }
      ]
    }
  }, [props.locations])

  return <>
    <Panel>
      <Chart type="doughnut" options={options} height={400} />
    </Panel>
    <Panel>
      <div className="d-flex flex-wrap border-top">
        {props.locations.map((location) => {
          return <Box key={location.name}>
            <>
              <Line value={location.name} color="text-primary mb-2" />
              <Line caption="Total" value={location.cases} />
              <Line caption="Today" value={location.casesToday} color="text-danger" />
              <Line caption="Death" value={location.death} color="text-danger" />
            </>
          </Box>
        })}

      </div>
    </Panel>
  </>
}

export default Covid19ByLocation