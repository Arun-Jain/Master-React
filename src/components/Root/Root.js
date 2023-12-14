import React from "react";
import A from "../A/A"
import B from "../B/B"
import "./Root.css"

const Root = () => {
    const rootText = "Parent Value"
    return (
        <div className="root-component">Root Component
            <A rootText={rootText} />
            <B rootText={rootText} />
        </div>
    )
}

export default Root;
