import { useEffect, useState } from "react";
import Covid19ByLocation from "../../components/location";
import Overview from "../../components/overview";
import Today from "../../components/today";
import useCovidData from "../../hooks/useCovidData";
import { LOCAL_STORAGE_KEY, PAGE } from "../../interface";
import "./style.scss";


export default () => {
  const [loaded, covid19Data] = useCovidData()
  const [view, setView] = useState<PAGE>(PAGE.Overview)

  useEffect(() => {
    console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ response`, covid19Data)
    const view = localStorage.getItem(LOCAL_STORAGE_KEY.PAGE)
    if (view) {
      setView(view as PAGE)
    }

  }, [loaded])

  return <>
    {!loaded && <h6>Loading ...</h6>}
    {loaded && covid19Data && <div className="d-flex flex-fill flex-column">
      <Today today={covid19Data.today?.internal} setView={setView} view={view} />
      <div className="d-flex flex-fill flex-column scroll">
        {view === PAGE.Overview && <Overview overviews={covid19Data.overview} />}
        {view === PAGE.Details && < Covid19ByLocation locations={covid19Data.locations} />}
      </div>
    </div>}
  </>
}