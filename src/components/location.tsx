import { Location } from "../interface"
import Line from "./line"

const Covid19ByLocation = (props: {
  locations: Location[]
}) => {
  return <div className="bg-white m-2 p-2 rounded-3">
    {/* <h4 className="overview text-primary">by location</h4> */}

    <div className="d-flex flex-wrap border-top">
      {props.locations.map((location, idx) => {
        return <div key={location.name} className={"col-6 col-sm-6 col-md-3 col-lg-2 p-2 border border-top-0 margin--1"}>
          <Line value={location.name} color="text-primary mb-2" />
          <Line caption="Total" value={location.cases} />
          <Line caption="Today" value={location.casesToday} color="text-danger" />
          <Line caption="Death" value={location.death} color="text-danger" />
        </div>
      })}

    </div>
  </div>
}

export default Covid19ByLocation