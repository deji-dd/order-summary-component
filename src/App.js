import "./App.css";
import hero from "./hero.svg";
import music from "./music.svg";

function App() {
  return (
    <div className="card div mx-auto my-0">
      <div>
        <img className="img" alt="hero" width="100%" src={hero}></img>
      </div>
      <div className="card-body">
        <div className="text mx-auto">
          <h3>Order Summary</h3>
          <p className="mt-3 mb-0">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="plan mx-auto mt-4 row">
          <div className="icon-div ms-2 me-1">
            <img alt="music icon" className="music-icon" src={music}></img>
          </div>
          <div className="col">
            <h6 className="plan-text mb-0">Annual Plan</h6>
            <p className="mb-0 mt-1">$59.99/year</p>
          </div>
          <div className="col-4 button-div">
            <button className="button mb-0">Change</button>
          </div>
        </div>
        <div className="mx-auto btn-div">
          <button className="btn">Proceed to Payment</button>
        </div>
        <div className="mx-auto last-div">
          <button className="last-btn">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
