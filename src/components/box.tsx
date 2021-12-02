import { ReactElement } from "react"

const Box = ({ children }: { children: ReactElement }) => {
  return <div className={"col-6 col-sm-6 col-md-3 col-lg-2 p-2 border border-top-0 margin--1"}>
    {children}
  </div>
}

export default Box