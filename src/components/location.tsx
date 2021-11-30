import { Location } from "../interface"
import Line from "./line"

const Covid19ByLocation = (props: {
  locations: Location[]
}) => {
  return <div className="bg-white m-2 p-2 rounded-3">
    <h4 className="overview text-primary">Details</h4>

    <div className="d-flex flex-wrap border-top">
      {props.locations.map((location, idx) => {
        return <div key={location.name} className={"col-6 p-2 border border-top-0 " + (idx % 2 === 1 ? "border-start-0" : "")}>
          <Line value={location.name} color="text-primary mb-2" />
          <Line caption="Cases" value={location.cases} />
          <Line caption="Recovered" value={location.recovered} color="text-primary" />
          <Line caption="Death" value={location.death} color="text-danger" />
        </div>
      })}

    </div>
  </div>
}

export default Covid19ByLocation