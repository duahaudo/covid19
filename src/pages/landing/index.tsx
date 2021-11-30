import "./style.scss";
import { useEffect } from "react"
import useCovidData from "../../hooks/useCovidData"

export default () => {
  const [loaded, response] = useCovidData()

  useEffect(() => {
    console.log(`👉  SLOG (${new Date().toLocaleTimeString()}): 🏃‍♂️ response`, response)
  }, [loaded])

  return <div className="d-flex flex-fill bg-secondary main-wrapper">Hello world</div>
}