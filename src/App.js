import { useState } from 'react';
import './App.css';
import { ReactComponent as Logo } from './assets/exo.svg';
function App() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className={`App ${animate && 'swing'}`}>
      <div>
      <div className="container">
        <div className="hexagon-1 content rgb-animate"></div>
        <div className="hexagon-1 hex"></div>
        <div className="eDash content rgb-animate"></div>
        <div className="eDash xLeft content rgb-animate"></div>
        <div className="eDash xRight content rgb-animate"></div>
      </div>
      <div className="handle-container">
      <div className="handle"></div>
      <div className="handle handle1"></div>
      <button className="exo-button" onClick={() => setAnimate(prevVal => !prevVal)}>
      <Logo width="50px" height="50px" className='exo-logo'/>
      </button>
      </div>
      </div>
    </div>
  );
}

export default App;
