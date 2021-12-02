import { Location } from "../interface"
import Box from "./box"
import Line from "./line"
import Panel from "./panel"

const Covid19ByLocation = (props: {
  locations: Location[]
}) => {
  return <Panel>
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
}

export default Covid19ByLocation