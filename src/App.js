import './sass/App.scss';
import logo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

function App() {
  return (
    <div className="App">
        <header>
            <img src={logo} alt="Logo" />
        </header>
        <div id="calculator">
            <div id="input">
                <div className="field">
                    <label htmlFor="bill">Bill</label>
                    <span className="icon-input">
                        <img className="icon" src={dollarIcon} alt="dollar icon"/>
                        <input type="text" name="bill" id="bill" defaultValue={0}/>
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="tip-percent">Select Tip %</label>
                    <div id="tip-percent-options-group">
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="five_percent" name="tip-percent" value={5} />
                            <label htmlFor="five_percent">5%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="ten_percent" name="tip-percent" value={10} />
                            <label htmlFor="ten_percent">10%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="fifteen_percent" name="tip-percent" value={15} />
                            <label htmlFor="fifteen_percent">15%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="twenty_five_percent" name="tip-percent" value={25} />
                            <label htmlFor="twenty_five_percent">25%</label>
                        </span>
                        <span className="tip-percent-options radio-option">
                            <input type="radio" id="fifty_percent" name="tip-percent" value={50} />
                            <label htmlFor="fifty_percent">50%</label>
                        </span>
                        <span className="tip-percent-options custom-option">
                            <input type="text" placeholder="Custom"/>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="number-of-people">Number of People</label>
                    <span className="icon-input">
                            <img className="icon" src={personIcon} alt="person icon"/>
                            <input type="text" name="number-of-people" id="number-of-people" defaultValue={0}/>
                        </span>
                </div>
            </div>
            <div id="total">
                <div className="total-section">
                    <span className="text">Tip Amount
                        <small>/ person</small>
                    </span>
                    <span className="value">
                        $4.27
                    </span>
                </div>
                <div className="total-section">
                    <span className="text">Total
                        <small>/ person</small>
                    </span>
                    <span className="value">
                        $32.79
                    </span>
                </div>
                <button id="reset-button">RESET</button>
            </div>
        </div>
    </div>
  );
}

export default App;
