import React, { Component, useState } from 'react';
import Menu from "./menuApi"
import MenuCard from "./menuCard";
import Navbar from "./Navbar";


const all_category = [
    ...new Set(
        Menu.map((curElement) => {
            return curElement.category;
        })
    ), "all"
];

// console.log(all_category);

// main Component 
const Rest = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuItems, setMenuItems] = useState(all_category);

    // function for filter the category  when click on menu
    const filter_item = (category) => {

        if (category === "all") {
            setMenuData(Menu);
            return;
        }
        
        const updatedList = Menu.filter((curElement) => {
            return curElement.category == category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filter_item={filter_item} menuItems={menuItems} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Rest
