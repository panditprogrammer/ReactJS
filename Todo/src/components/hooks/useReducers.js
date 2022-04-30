import React,{useReducer} from 'react'
import "./style.css"


// useReducer function in react 

const reducer = (state,action)=>{
    if(action.type === "inc"){
        state++;
    }
    if(action.type === "dec"){
        state--;
    }
    return state;
}


function UseReducer() {
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer,initialData);


    return (
        <>
            <div className="main">
                <div className="data"><h1>{state}</h1></div>
                <div className="btns">
                    <div className="buttons">
                        <button onClick={()=> dispatch({type:"inc"})}>increment</button>
                    </div>
                    <div className="buttons">
                        <button onClick={()=> dispatch({type:"dec"})}>decrement</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UseReducer;
