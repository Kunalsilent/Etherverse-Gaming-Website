import React from 'react';
import '../blog/Blog'; // Import the CSS file



const Hblog = () => {
  return (
    <>
 
      <div className='main'>
        <h3 className='head'>Timeline</h3>
        <div className='contain'>
          <ul>
            <li>
              <h3 className='heading'>   Whitepaper</h3>
              <h3 className='heading'> Token Contract</h3>
              <h3 className='heading'> Marketing and Research</h3>
              <h3 className='heading'>Website Integration</h3>
              <h3 className='heading'> SolidProof Contract Audit</h3>
              <h3 className='heading'> Team KYC</h3>
              <h3 className='heading'> Launch Public Presale</h3>
              <h3 className='heading'> Teaser Launch</h3>
              <h3 className='heading'> Partnerships with Gaming Guilds</h3>
              <span className='date'>Q3 2023</span>
              <span className='circle'></span>
            </li>
            <li>
              <h3 className='heading'>Launchpad NFT Marketplace</h3>
              <h3 className='heading'>Trailer Release</h3>
              <h3 className='heading'>Further Marketing Expansion</h3>
              <h3 className='heading'>CEX Listing</h3>
              <h3 className='heading'>DEX Listing</h3>
              <h3 className='heading'>Staking Platform in our website</h3>

              <span className='date'>Q4 2023</span>
              <span className='circle'></span>
            </li>
            <li>
              <h3 className='heading'>Coin Market Cap Listing</h3>
              <h3 className='heading'>Coin Geko Listing</h3>
              <h3 className='heading'>Cross-chain Expansion</h3>
              <h3 className='heading'>Partnerships and Events</h3>
              <h3 className='heading'>IOS and Android Apps Development</h3>
              <h3 className='heading'>Launch of MetaDogeUnity [Chapter 1]</h3>
              <h3 className='heading'>Further Expansion of Game Starts</h3>

              <span className='date'>Q1 2024</span>
              <span className='circle'></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hblog;

