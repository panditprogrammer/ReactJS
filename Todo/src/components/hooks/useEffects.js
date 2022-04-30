import React,{useEffect,useState} from 'react'
import "./style.css"

function UseState() {
    const [myData, setmyData] = useState(0);

    useEffect(() => {
        document.title = `Count(${myData})`;
    });


    return (
        <>
            <div className="main">
                <div className="data"><h1>{myData}</h1></div>
                <div className="btns">
                    <div className="buttons">
                        <button onClick={() => setmyData(myData + 1)}>increment</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseState
