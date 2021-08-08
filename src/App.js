import React, { useState, useEffect } from 'react';

import './sass/App.scss';
import logo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

import Header from './components/Header';
import IconInput from './components/IconInput';
import TotalSection from "./components/TotalSection";
import TipPercentOptions from "./components/TipPercentOptions";

const App = () => {
    const [bill, setBill] = useState(0);
    const [tip_percent, setTipPercent] = useState('');
    const [number_of_people, setNumberOfPeople] = useState(0);

    const [total_tip, setTotalTip] = useState(0);
    const [tip_per_person, setTipPerPerson] = useState(0);

    useEffect(() => {
        setTotalTip(computeTotalTip(bill, isNaN(tip_percent) ? 0 : tip_percent))
        setTipPerPerson(computeTipPerPerson(total_tip, number_of_people))
    }, [bill, tip_percent, number_of_people, total_tip])

    const reset = () => {
        setBill(0);
        setTipPercent('');
        setNumberOfPeople(0);
    }

    const computeTotalTip = (bill, tip_percent) => {
        return ((tip_percent / 100) * bill).toFixed(2)
    }

    const computeTipPerPerson = (total_tip, number_of_people) => {
        if(!total_tip || !number_of_people)
        {
            return (0).toFixed(2)
        }

        return (total_tip / number_of_people).toFixed(2)
    }

    return (
        <div className="App">
            <Header logo={logo}/>
            <div id="calculator">
                <div id="input">
                    <IconInput icon={dollarIcon} label="Bill" id="bill" name="bill" placeholder="0" value={bill} onChange={setBill}/>
                    <TipPercentOptions value={tip_percent} onChange={setTipPercent}/>
                    <IconInput icon={personIcon} label="Number of People" id="number-of-people" name="number-of-people" placeholder="0" value={number_of_people} onChange={setNumberOfPeople}/>
                </div>
                <div id="total">
                    <TotalSection text="Tip Amount" value={total_tip}/>
                    <TotalSection id="total-section" text="Total" value={tip_per_person}/>
                    <button id="reset-button" onClick={reset}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
