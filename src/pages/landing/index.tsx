import "./style.scss";
import { useEffect } from "react"

import useCovidData from "../../hooks/useCovidData"
import Overview from "../../components/overview";
import { Covid19Data } from "../../interface";

export default () => {
  const [loaded, covid19Data] = useCovidData()

  useEffect(() => {
    console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ response`, covid19Data)
  }, [loaded])

  return <>
    {!loaded && <h6>Loading ...</h6>}
    {loaded && <div className="d-flex flex-fill bg-secondary flex-column">
      <Overview overviews={(covid19Data as Covid19Data).overview} />
    </div>}
  </>
}