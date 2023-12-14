import React from "react"
import "./A.css"

const A = (props) => {
    const {rootText} = props
    return (
        <div className="a-component">A component - {rootText}</div>
    )
}

export default A;
