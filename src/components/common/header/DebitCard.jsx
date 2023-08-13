// src/CardWithTimer.js
import React, { useState, useEffect, useRef } from 'react';
import './Debit.css';


const DebitCard = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('September 19, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })
  return (

    <div className='debit'>
    <div className='Header-card-col col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
      <div class="card">
        <div className='card-body'>

          <div class="timer-box">

            <div className='day'>{timerDays} Days</div>
            <div className='hour'>{timerHours} Hrs</div>
            <div className='min'>{timerMinutes} mins</div>
            <div className='sec'>{timerSeconds} sec</div>
          </div>
          <div className='line'><div className='line-color'></div></div>
          <div className='USDT-raised'> Claim and exchange listning 22</div>
          <br />
          <hr></hr>
          <br />
          <div className='sidess'>
            <span> ETH Balance: 0</span>
            <span>1 $MUD = 0.00082</span>
          </div>

          <div className='ETH-USDT-box'>
            <div className='itemm'><div className='item-img'>   <img src="https://www.spectre.ai/assets/images/assets/ETH-logo.png?v=2.13" height="30px" alt="item-1" /><span className='item-head'> ETH</span></div></div>
            <div className='itemm'><div className='item-img'>  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/FBMVEUAAAAmoXoloHoloXsloXsmoXoloXoloHompX4lonsloXoloXolo3wmoXomoXwloHgloXsmonsloHklonsmoXwmnnkmo3wnpH0mpX0mpH0monsknHkloHomo30mo30knXkmoXv///8pon37/f0Zm3Mno3wjoHkoqIAprYR3xKwgn3g3qIUdnXYVmnHY7ujv+fba7+knpn4oq4IproXg8u2U0b6NzrpnvqNauJtOspTs9/SIzLYvpYG039Jywqn2+/p7xq9Crow9rIkzp4SCybNuwajK6N+64dbR6+PB5Nmd1cRJsJDU7OWu3M6p2stXt5lHsJBgup4AkGQAjmAWkk1DAAAAIHRSTlMA/vz7j/jXKPXu6tDDumxhXUAWqXcahuvn060th6d4FQdkj2QAAAOWSURBVFjDtVfpeqIwFAXELtZOa/e9YQnQCLUiirivtctM25l5/3eZiMgNRSnWb84vyec5ublLci+3DJv74u5GLotQNrexK+5vciuhIO5kdV0vY4wQxmX6M7sjFtKyj4/OdUPHvMDzyAdPf2K6dH5znIZ+cmqU+UzABdClsnF6cvAV/8eZgQVgRzUEbJz9SKRf5m2gL5HIXy7n723ZQF8mYW/tLeOLdHv0JQRsi4v5h5Xk7cGdletF/Asjg1IiY1ws3B+lhlA5jJ2/kkErIFMRP/kf7E+pYEdisbmFQ//JiQg9ibfY+srr4AA1CSa4Qc8z+WsAX3PvElAnoGCEWX27XYYEII6UgGcVDlHenlfWic1EkDwpCWhTATDhasY/2MY8I/BTUpbtr0isAI8DE44ghOkEICGPfIGNwAPxI4TEEFGB8oZ//+ksH5EHKQETVgDxemGaxEakCLT2/RwPSmAArLyYcqSopgm9AxZEQYql2cEfyLLC1ndoFmcxWgwtFNDQEuDsJre/0AA8TftQwK+PxSbsc6IuxLhII6aqWnJjJnBvTauAaDimIugit+sLABtRqtYaeHW30+xKPhq9jlv3Bi1CZZAcFdiNZoFMLNnrNGvV2qg3/u0GR3Dq7rg3XWy6H5qlMRI8zYQc60O1X32pjb2hZqrsEaYfKkFFr1N9aw5VRgDnODYIpOb0WtROzfeaFnUiRlPHFGtOx5SZMHCM/aorVf9qLfrfIIwNxce9Nr+rWrL5ZyK9stnECpheSRnJlhVYgAZS4ET/k8bGtNRhVXKKBAHYI8jmx0TqTnoe9bdFQe6o56jrxv6XSobvo2dFeSuSyBFymGcU1H7zsaR0ncdf1VHH9fr9wWDQ99zO6KX96ChK47lXVBk+wrlPYaRxVOXXcbX95JS6UM7dBpWsuX1kUTqOhDFMJMhDGkNqsIlar/MoDFuzNYLmDoZEglQGBA8AGQYC96YWLsZSGYopoRphLV5Ma5czXCirCcCFwolG5rsCgn+lFdaxoDC71jMrCkAWwMOykgA8LPC0rS4ATxt3ZQjfERDsK27+upb5FQTgeb9lGoxVBaDBgBYnLtCgbPqyLhQQ7HysyYoJBNe6ExWAJovBnr0glPJ73YeX0OYlN5omtGbxRjNNqysHSGp112+2AdeVTLp2H/Zfe+BYf+SJD13GGkPXWmMf4CB58Ew1u96Eoy8fHX2Pjv//8B0f//kvxv9/fnulibtqWcAAAAAASUVORK5CYII=" height="30px" alt="item-1" /><span className='item-head'> USDT <br />BEP20</span></div></div>
            <div className='itemm'><div className='item-img'>   <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png" height="30px" alt="item-1" /><span className='item-head'>BNB</span></div></div>
            <div className='itemm'><div className='item-img'>   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA/FBMVEUAAAAmoXoloHoloXsloXsmoXoloXoloHompX4lonsloXoloXolo3wmoXomoXwloHgloXsmonsloHklonsmoXwmnnkmo3wnpH0mpX0mpH0monsknHkloHomo30mo30knXkmoXv///8pon37/f0Zm3Mno3wjoHkoqIAprYR3xKwgn3g3qIUdnXYVmnHY7ujv+fba7+knpn4oq4IproXg8u2U0b6NzrpnvqNauJtOspTs9/SIzLYvpYG039Jywqn2+/p7xq9Crow9rIkzp4SCybNuwajK6N+64dbR6+PB5Nmd1cRJsJDU7OWu3M6p2stXt5lHsJBgup4AkGQAjmAWkk1DAAAAIHRSTlMA/vz7j/jXKPXu6tDDumxhXUAWqXcahuvn060th6d4FQdkj2QAAAOWSURBVFjDtVfpeqIwFAXELtZOa/e9YQnQCLUiirivtctM25l5/3eZiMgNRSnWb84vyec5ublLci+3DJv74u5GLotQNrexK+5vciuhIO5kdV0vY4wQxmX6M7sjFtKyj4/OdUPHvMDzyAdPf2K6dH5znIZ+cmqU+UzABdClsnF6cvAV/8eZgQVgRzUEbJz9SKRf5m2gL5HIXy7n723ZQF8mYW/tLeOLdHv0JQRsi4v5h5Xk7cGdletF/Asjg1IiY1ws3B+lhlA5jJ2/kkErIFMRP/kf7E+pYEdisbmFQ//JiQg9ibfY+srr4AA1CSa4Qc8z+WsAX3PvElAnoGCEWX27XYYEII6UgGcVDlHenlfWic1EkDwpCWhTATDhasY/2MY8I/BTUpbtr0isAI8DE44ghOkEICGPfIGNwAPxI4TEEFGB8oZ//+ksH5EHKQETVgDxemGaxEakCLT2/RwPSmAArLyYcqSopgm9AxZEQYql2cEfyLLC1ndoFmcxWgwtFNDQEuDsJre/0AA8TftQwK+PxSbsc6IuxLhII6aqWnJjJnBvTauAaDimIugit+sLABtRqtYaeHW30+xKPhq9jlv3Bi1CZZAcFdiNZoFMLNnrNGvV2qg3/u0GR3Dq7rg3XWy6H5qlMRI8zYQc60O1X32pjb2hZqrsEaYfKkFFr1N9aw5VRgDnODYIpOb0WtROzfeaFnUiRlPHFGtOx5SZMHCM/aorVf9qLfrfIIwNxce9Nr+rWrL5ZyK9stnECpheSRnJlhVYgAZS4ET/k8bGtNRhVXKKBAHYI8jmx0TqTnoe9bdFQe6o56jrxv6XSobvo2dFeSuSyBFymGcU1H7zsaR0ncdf1VHH9fr9wWDQ99zO6KX96ChK47lXVBk+wrlPYaRxVOXXcbX95JS6UM7dBpWsuX1kUTqOhDFMJMhDGkNqsIlar/MoDFuzNYLmDoZEglQGBA8AGQYC96YWLsZSGYopoRphLV5Ma5czXCirCcCFwolG5rsCgn+lFdaxoDC71jMrCkAWwMOykgA8LPC0rS4ATxt3ZQjfERDsK27+upb5FQTgeb9lGoxVBaDBgBYnLtCgbPqyLhQQ7HysyYoJBNe6ExWAJovBnr0glPJ73YeX0OYlN5omtGbxRjNNqysHSGp112+2AdeVTLp2H/Zfe+BYf+SJD13GGkPXWmMf4CB58Ew1u96Eoy8fHX2Pjv//8B0f//kvxv9/fnulibtqWcAAAAAASUVORK5CYII=" height="30px" alt="item-1" /><span className='item-head'>USDT<br/> ERC</span></div></div>
            <div className='itemm'><div className='item-img'>  <img src="https://previews.123rf.com/images/belchonock/belchonock1510/belchonock151001695/46467293-vector-illustration-of-detailed-golden-credit-card-isolated-on-white.jpg" height="30px" alt="item-1" /><span className='item-head'> Card</span></div></div>
          </div>
        

          <div className="side-input">
            <span><label for="title"><b>Amount in ETH you pay:</b></label>
              <input type="text" placeholder="Enter Title" name="title" id="title" required></input></span>
            <span><label for="title"><b>Amount in $MDU you receive</b></label>
              <input type="text" placeholder="Enter Title" name="title" id="title" required></input></span>
          </div>
            <button class="buynow-button">BUY NOW</button>
          <div className='ETH-USDT-balance'>LISTING PRICE = $0.0002</div>


        </div>
      </div>

    </div>

    
  </div>

 
  
 
  )
}

export default DebitCard;
