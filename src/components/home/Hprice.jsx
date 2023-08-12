import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"
import { revenue } from "../../dummydata"
const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='' title='MetaDogeUnity Pass' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
      <section className='hprice padding'>
        <Heading subtitle='' title='MetaDogeUnity Revenue Streams' />
        <div className='price container grid'>
        <div className='items shadow'>
        <p>
          <ul>
            <li>FT Sales and Trading Fees:</li>
            <li>In-Game Purchases</li>
            <li>$MDU Token Usage</li>
            <li>Events and Ticket Sales</li>
            <li>Advertising and Sponsorships</li>
            <li>Land and Virtual Estate Sales</li>
            <li>Strategic Partnerships and Licensing</li>
            <li>Lottery Platform</li>
          </ul>
        </p>
        </div>
        </div>
      </section>
    </>
  )
}

export default Hprice
