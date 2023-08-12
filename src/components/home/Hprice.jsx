import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='' title='MetaDogeUnity Pass' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
