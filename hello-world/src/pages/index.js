import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
     <div style = {{ color:'purple' , fontSize:'40px'}}>
        <Link to="/contact/">Contact</Link> {/* highlight-line */}
        <Header headerText="Hello Gatsby!" />
        <h1>Welcome</h1> 
        <p>Hello Gatsby!</p>
     </div>
  )
}
