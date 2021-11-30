import axios from "axios"
import { useEffect, useState } from "react"

const url = `https://static.pipezero.com/covid/data.json`

export default () => {
  const [loaded, setLoaded] = useState(false)
  const [response, setResponse] = useState([])

  useEffect(() => {
    axios.get(url).then(res => {
      setResponse(res.data as any)
    }).finally(() => {
      setLoaded(true)
    })
  }, [])

  return [loaded, response]
}