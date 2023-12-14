import React from "react"
import "./B.css"

const B = (props) => {
    const {rootText} = props
    return (
        <div className="b-component">B component - {rootText}</div>
    )
}

export default B;
