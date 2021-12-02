import { ReactElement } from "react"

const Panel = ({ children }: { children: ReactElement }) => {
  return <div className="bg-white m-3 p-2 rounded-3 shadow-lg">
    {children}
  </div>
}

export default Panel