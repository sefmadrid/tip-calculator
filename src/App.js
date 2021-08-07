import './sass/App.scss';
import logo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

import Header from './components/Header';
import IconInput from './components/IconInput';
import TotalSection from "./components/TotalSection";
import TipPercentOptions from "./components/TipPercentOptions";

const App = () => {
  return (
    <div className="App">
        <Header logo={logo}/>
        <div id="calculator">
            <div id="input">
                <IconInput icon={dollarIcon} label="Bill" id="bill" name="bill" placeholder="0"/>
                <TipPercentOptions/>
                <IconInput icon={personIcon} label="Number of People" id="number-of-people" name="number-of-people" placeholder="0"/>
            </div>
            <div id="total">
                <TotalSection text="Tip Amount" value="0.00"/>
                <TotalSection id="total-section" text="Total" value="0.00"/>
                <button id="reset-button">RESET</button>
            </div>
        </div>
    </div>
  );
}

export default App;
