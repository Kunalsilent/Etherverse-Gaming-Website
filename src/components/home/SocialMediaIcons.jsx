import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css';

const socialMediaData = [
  { icon: faFacebook, link: 'https://www.facebook.com/yourpage' },
  { icon: faTwitter, link: 'https://www.twitter.com/yourpage' },
  { icon: faInstagram, link: 'https://www.instagram.com/yourpage' },
  // Add more social media platforms and links as needed
];

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      {socialMediaData.map((platform, index) => (
        <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={platform.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
