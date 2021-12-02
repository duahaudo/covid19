import axios from "axios"
import { useEffect, useState } from "react"
import { Covid19Data, LOCAL_STORAGE_KEY } from "../interface"

const url = `https://static.pipezero.com/covid/data.json`
const timeout_6h = 6 * 60 * 60 * 1000

const useCovidData = (): [boolean, Covid19Data?] => {
  const [loaded, setLoaded] = useState(false)
  const [response, setResponse] = useState<Covid19Data>()

  // get data from cache
  useEffect(() => {
    const covid19Data = localStorage.getItem(LOCAL_STORAGE_KEY.COVID19_DATA)
    const lastQuery = localStorage.getItem(LOCAL_STORAGE_KEY.TIME_STAMP)
    if (covid19Data && lastQuery) {
      const diff = Date.now() - Number(lastQuery)
      if (diff < timeout_6h) {
        setResponse(JSON.parse(covid19Data))
      }
    } else {
      // trigger load
      setLoaded(false)
    }
  }, [])

  // reload each 6h
  useEffect(() => {
    const fetchRealData = () => {
      axios.get(url).then(res => {
        setResponse(res.data as Covid19Data)

        const _timestamp = Date.now()

        localStorage.setItem(LOCAL_STORAGE_KEY.TIME_STAMP, _timestamp.toString())
        localStorage.setItem(LOCAL_STORAGE_KEY.COVID19_DATA, JSON.stringify(res.data))
        setLoaded(true)

      }).finally(() => {
      })

    }
    setInterval(fetchRealData, timeout_6h) // 6h
    if (!loaded) {
      fetchRealData()
    }

    return () => {
      console.log("remove hook")
    }
  }, [loaded])

  return [loaded, response]
}

export default useCovidData