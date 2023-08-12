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
    const countdownDate = new Date('August 15, 2023 00:00:00').getTime();

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

              <div className='day'>{timerDays}</div>
              <div className='hour'>{timerHours}</div>
              <div className='min'>{timerMinutes}</div>
              <div className='sec'>{timerSeconds}</div>
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
              <div className='itemm'><div className='item-img'>   <img src="https://avatars.githubusercontent.com/u/6250754?s=200&v=4" height="30px" alt="item-1" /><span className='item-head'> ETH</span></div></div>
              <div className='itemm'><div className='item-img'>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21TD3B4cT6KaBjN8YEmNQQzh_fcGCitDBJA&usqp=CAU" height="30px" alt="item-1" /><span className='item-head'> USDT <br />BEP20</span></div></div>
              <div className='itemm'><div className='item-img'>   <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" height="30px" alt="item-1" /><span className='item-head'>BNB</span></div></div>
              <div className='itemm'><div className='item-img'>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvvF9aPDzVTNPU-JOpo0znA3BdMMRDYjyJS6X_cCPH2UGHWWy5slULfa2LwjN0ed1aI4&usqp=CAU" height="30px" alt="item-1" /><span className='item-head'> Card</span></div></div>
            </div>
            {/* <div className='ETH-DR-payment'>
              <div class="payment-info">
                <div class="payment-info-top">
                  <p class="payment-info-top-text">Amount in ETH you pay</p>
                </div>
                <div class="payment-info-bottom">
                  <div class="payment-info-logo">
                  </div>
                  <div class="payment-info-input">
                    <input class="input-form form-control" name="destination-currency-input" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>
              <div class="payment-info">
                <div class="payment-info-top">
                  <p class="payment-info-top-text">Amount in $MDU you receive</p>
                </div>
                <div class="payment-info-bottom">
                  <div class="payment-info-logo">
                  </div>
                  <div class="payment-info-input">
                    <input class="input-form form-control" name="destination-currency-input" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" />
                  </div>
                </div>
              </div>
            </div> */}

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
