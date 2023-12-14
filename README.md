### How to pass props from Parent to child component
```
Root.js

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
```

```
A.js

import React from "react"
import "./A.css"

const A = (props) => {
    const {rootText} = props
    return (
        <div className="a-component">A component - {rootText}</div>
    )
}

export default A;
```

```
B.js

import React from "react"
import "./B.css"

const B = (props) => {
    const {rootText} = props
    return (
        <div className="b-component">B component - {rootText}</div>
    )
}

export default B;
```
