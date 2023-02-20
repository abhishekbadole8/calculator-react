import React, { useState } from "react";
function Head() {
    const [input, setInput] = useState("")

console.log(input)


    return (
        <>
            <input className="head-Container"
                onChange={(e) => setInput(e.target.value)}>
            </input>
        </>
    )
}
export default Head;