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
    const [bill, setBill] = useState('');
    const [tip_percent, setTipPercent] = useState('');
    const [number_of_people, setNumberOfPeople] = useState('');

    const [tip_per_person, setTipPerPerson] = useState('0.00');
    const [total_per_person, setTotalPerPerson] = useState('0.00');

    useEffect(() => {
        setTipPerPerson(computeTipPerPerson(bill, isNaN(Number(tip_percent)) ? 0 : tip_percent, number_of_people))
        setTotalPerPerson(computeTotalPerPerson(bill, tip_per_person, number_of_people))
    }, [bill, tip_percent, number_of_people, tip_per_person])

    const reset = () => {
        setBill('');
        setTipPercent('');
        setNumberOfPeople('');
    }

    const computeTipPerPerson = (bill, tip_percent, number_of_people) => {
        return (((tip_percent / 100) * bill) / number_of_people).toFixed(2)
    }

    const computeTotalPerPerson = (bill, tip_per_person, number_of_people) => {
        return (Number((bill / number_of_people)) + Number(tip_per_person)).toFixed(2)
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
                    <TotalSection text="Tip Amount" value={tip_per_person}/>
                    <TotalSection id="total-section" text="Total" value={total_per_person}/>
                    <button id="reset-button" onClick={reset} disabled={ bill === '' && tip_percent === '' && number_of_people === '' }>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default App;
