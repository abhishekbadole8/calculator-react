import React, { useState } from "react";
function Body() {
    const [value, setValue] = useState("")
    function handelClick(e) {
        setValue(e.taget.value)
        console.log(e.taget.value)
    }


    return (
        <>
            <div className="body-Container">
                <div>
                    <button onClick={handelClick} >AC</button>
                    <button onClick={handelClick} value="+">+/-</button>
                    <button onClick={handelClick} value="%">%</button>
                    <button onClick={handelClick} value="/">/</button>
                </div>
                <div>
                    <button onClick={handelClick}>7 </button>
                    <button onClick={handelClick}>8 </button>
                    <button onClick={handelClick}>9 </button>
                    <button onClick={handelClick}>X </button>
                </div>
                <div>
                    <button onClick={handelClick}>4 </button>
                    <button onClick={handelClick}>5 </button>
                    <button onClick={handelClick}>6 </button>
                    <button onClick={handelClick}>- </button>
                </div>
                <div>
                    <button onClick={handelClick}>1 </button>
                    <button onClick={handelClick}>2 </button>
                    <button onClick={handelClick}>3 </button>
                    <button onClick={handelClick}>+ </button>
                </div>
                <div>
                    <button onClick={handelClick}>0</button>
                    <button onClick={handelClick}>.</button>
                    <button onClick={handelClick}>=</button>
                </div>
            </div>
        </>
    )
}
export default Body;