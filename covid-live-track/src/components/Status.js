import React, { useEffect, useState } from 'react'
import Card from './Card';

function Status() {

    const [state, setState] = useState("");
    const [confirmed, setConfirmed] = useState(0);
    const [deceased, setdeceased] = useState(0);
    const [recovered, setrecovered] = useState(0);
    const [tested, settested] = useState(0);
    const [vaccinated1, setvaccinated1] = useState(0);
    const [vaccinated2, setvaccinated2] = useState(0);
    const [Population, setPopulation] = useState(0);
    const [webUrl, setWebUrl] = useState("");


    const getStateStatus = async () => {
        try {
            const result = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            let stateWise = await result.json();
            // create option tag for state
            for (const value in stateWise) {
                let option = document.createElement("option");
                option.setAttribute("value", value);
                option.innerText = value;
                document.getElementById("state").appendChild(option);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const setStateChange = async (state, district = null) => {
        try {
            const result = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            let stateWise = await result.json();

            setConfirmed(stateWise[state].total.confirmed)
            setdeceased(stateWise[state].total.deceased)
            setrecovered(stateWise[state].total.recovered)
            settested(stateWise[state].total.tested)
            setvaccinated1(stateWise[state].total.vaccinated1)
            setvaccinated2(stateWise[state].total.vaccinated2)
            setState(state)
            setPopulation(stateWise[state].meta.population);
            setWebUrl(stateWise[state].meta.tested.source);
        }

        catch (error) {
            console.log(error)
        }
    }

    getStateStatus();
    const selectStateHandler = (e) => {
        setStateChange(e.target.value);
    }

    // run only first time 
    useEffect(() => {
        getStateStatus("AN");
        setStateChange("AN");
    }, [])

    return (
        <>
            <div className="menu">
                <div className='menu_item'>
                    <label htmlFor="">State</label>
                    <select name="state" id="state" onChange={selectStateHandler}></select>
                </div>
                <div className="menu_item"><label htmlFor="url">Source:</label><a href={webUrl} target={"_blank"}>{webUrl}</a></div>
            </div>
            <div className='status'>
                <Card h2={Population} h3="Total Population" bg="light"></Card>
                <Card h2={confirmed} h3="Total Confirmed" bg="lightgreen"></Card>
                <Card h2={deceased} h3="Total Deceased" bg="orangered"></Card>
                <Card h2={recovered} h3="Total Recovered" bg="darkorchid"></Card>
                <Card h2={tested} h3="Total Tested" bg="tan"></Card>
                <Card h2={vaccinated1} h3="Total Vaccinated 1"></Card>
                <Card h2={vaccinated2} h3="Total Vaccinated 2"></Card>
                <Card h3="State" h2={state}></Card>

            </div>
        </>
    )
}

export default Status   