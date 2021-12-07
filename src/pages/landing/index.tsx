import { useEffect, useMemo, useState } from "react";
import Covid19ByLocation from "../../components/location";
import Overview from "../../components/overview";
import Today from "../../components/today";
import useCovidData from "../../hooks/useCovidData";
import { LOCAL_STORAGE_KEY, PAGE } from "../../interface";
import "./style.scss";


const Landing = () => {
  const [loaded, covid19Data] = useCovidData()
  const { overview } = covid19Data || {}
  const [view, setView] = useState<PAGE>(PAGE.Overview)

  useEffect(() => {
    const view = localStorage.getItem(LOCAL_STORAGE_KEY.PAGE)
    if (view) {
      setView(view as PAGE)
    }

  }, [loaded])

  const overviewData = useMemo(() => {
    if (overview) {
      const result = [...overview]
      result.reverse()
      return result
    }
    return []
  }, [overview])

  return <>
    {!loaded && <h6>Loading ...</h6>}
    {loaded && covid19Data && <div className="d-flex flex-fill flex-column pt-3">
      <Today today={overviewData[0]} setView={setView} view={view} />
      <div className="d-flex flex-fill flex-column scroll">
        {view === PAGE.Overview && <Overview overviews={overview || []} />}
        {view === PAGE.Details && < Covid19ByLocation locations={covid19Data.locations} />}

        <div className="p-3 pt-0">
          Stiger Dieu
        </div>
      </div>
    </div>}
  </>
}

export default Landing