import React, { useEffect, useState } from 'react'
import "./style.css";

const Todo = () => {

    // get the localStorage data 
    const getLocalTodo =()=>{
        const todoLists = localStorage.getItem("todo");
        if(todoLists)
            return JSON.parse(todoLists);
        return [];
    };

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalTodo());
    const [isEdit, setIsEdit] = useState(null);
    const [updateBtn, setUpdateBtn] = useState(true);

    // add the todo item 
    const addItem = () => {
        if (!inputData) {
            alert("Field cannot be Empty!");
        }else if(inputData && updateBtn){
            
            setItems(
                items.map((CE)=>{
                        if(CE.id === isEdit){
                            return {...CE,name: inputData};
                        }
                        return CE;
                })
            )
                setInputData("");
                setUpdateBtn(false);
                setIsEdit(null);
        }
        else {
            // add id with data 
            const IdNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            };
            setItems([...items, IdNewInputData]);
            setInputData("");
        }
    };


    // edit todo item 
    const editItem = (index)=>{
        const item_edit = items.find((CE)=>{
            return CE.id === index;
        });
        setInputData(item_edit.name);
        setIsEdit(index);
        setUpdateBtn(true);
    };

    // delete todo item 
    const deletedItem = (index) => {
        const updateItems = items.filter((curelem) => {
            return curelem.id != index;
        });

        setItems(updateItems);
    };

    // delete all todos 
    const clearAll = () => {
        setItems([]);
    };

    // add todo in localStorage 
    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(items));
    });


    return (
        <>
            <div className="main">
                <div className="head">
                    <figure>
                        <img src="./images/todo.png" alt="todo image" />
                        <figcaption>Add Todo Items</figcaption>
                    </figure>
                </div>

                <div className="form">
                    <input type="text"
                        value={inputData}
                        placeholder="Add item"
                        onChange={(event) => setInputData(event.target.value)}
                    />
                    <input type="submit" value={ isEdit === null ? "add": "update" } id="tdBtn" onClick={addItem} />
                </div>
                <div className="todoHead">
                    <h1>Todo </h1> <button className="clearAll" onClick={clearAll}>Clear All</button>
                </div>
                <div className="contents">
                    {items.map((curEle,index) => {
                        return (
                            <div className="items" key={curEle.id}>
                                <div className="data_item"><p><strong>{index+1}</strong>  {curEle.name}</p></div>
                                <div className="btns">
                                    <span onClick={() => editItem(curEle.id)} title="Edit Todo" ><i class="far fa-edit"></i></span>
                                    <span onClick={() => deletedItem(curEle.id)} title="Delete Todo"><i class="fas fa-trash-alt"></i></span>
                                </div>
                            </div>
                        );

                    })}

                </div>

            </div>

        </>
    )
}

export default Todo;
