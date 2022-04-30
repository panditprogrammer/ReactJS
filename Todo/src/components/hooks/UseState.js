import React from 'react'
import "./style.css"

function UseState() {

    const  initialData = 0;
    const [myData, setmyData] = React.useState(initialData);

    return (
        <>
            <div className="main">

                <div className="data"><h1>{myData}</h1></div>

                <div className="btns">
                    <div className="buttons">
                        <button onClick={()=> myData >0 ? setmyData(myData-1) : setmyData(0)}>decrement</button>
                    </div>

                    <div className="buttons">
                        <button onClick={()=> setmyData(myData+1)}>increment</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseState
