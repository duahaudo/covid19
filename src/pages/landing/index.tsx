import "./style.scss";
import { useEffect } from "react"

import { Covid19Data } from "../../interface";
import useCovidData from "../../hooks/useCovidData"
import Overview from "../../components/overview";
import Covid19ByLocation from "../../components/location";

export default () => {
  const [loaded, covid19Data] = useCovidData()

  useEffect(() => {
    console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ response`, covid19Data)
  }, [loaded])

  return <>
    {!loaded && <h6>Loading ...</h6>}
    {loaded && covid19Data && <div className="d-flex flex-fill bg-secondary flex-column scroll">
      <Overview
        today={covid19Data.today?.internal}
        overviews={covid19Data.overview} />
      <Covid19ByLocation locations={covid19Data.locations} />
    </div>}
  </>
}