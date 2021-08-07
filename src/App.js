import './sass/App.scss';
import logo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

import Header from './components/Header';
import IconInput from './components/IconInput';


function App() {
  return (
    <div className="App">
        <Header logo={logo}/>
        <div id="calculator">
            <div id="input">
                <IconInput logo={dollarIcon} label="Bill" id="bill" name="bill" placeholder="0"/>
                <div className="field">
                    <label htmlFor="tip-percent">Select Tip %</label>
                    <div id="tip-percent-options-group">
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="five_percent" name="tip-percent" value={5}/>
                            <label htmlFor="five_percent">5%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="ten_percent" name="tip-percent" value={10}/>
                            <label htmlFor="ten_percent">10%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="fifteen_percent" name="tip-percent" value={15}/>
                            <label htmlFor="fifteen_percent">15%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="twenty_five_percent" name="tip-percent" value={25}/>
                            <label htmlFor="twenty_five_percent">25%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="fifty_percent" name="tip-percent" value={50}/>
                            <label htmlFor="fifty_percent">50%</label>
                        </span>
                        <span className="tip-percent-options custom-option">
                            <input type="text" placeholder="Custom"/>
                        </span>
                    </div>
                </div>
                <IconInput logo={personIcon} label="Number of People" id="number-of-people" name="number-of-people" placeholder="0"/>
            </div>
            <div id="total">
                <div className="total-section">
                    <span className="text">Tip Amount
                        <small>/ person</small>
                    </span>
                    <span className="value">
                        $0.00
                    </span>
                </div>
                <div className="total-section" id="total-section">
                    <span className="text">Total
                        <small>/ person</small>
                    </span>
                    <span className="value">
                        $0.00
                    </span>
                </div>
                <button id="reset-button">RESET</button>
            </div>
        </div>
    </div>
  );
}

export default App;
