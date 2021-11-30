import axios from "axios"
import { useEffect, useState } from "react"
import { Covid19Data } from "../interface"

const url = `https://static.pipezero.com/covid/data.json`

const useCovidData = (): [boolean, Covid19Data?] => {
  const [loaded, setLoaded] = useState(false)
  const [response, setResponse] = useState<Covid19Data>()

  useEffect(() => {
    axios.get(url).then(res => {
      setResponse(res.data as Covid19Data)
    }).finally(() => {
      setLoaded(true)
    })
  }, [])

  return [loaded, response]
}

export default useCovidData