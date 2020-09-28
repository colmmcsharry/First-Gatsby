import React from "react"
import containerStyles from "./container.module.css"


/*so all the Container component does is make a div with margin 3rem auto and max-width 600px. 
the {children} will be whatever is wrapped in the <Container></Container>*/

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}