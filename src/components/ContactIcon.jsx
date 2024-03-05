import React from 'react';

function ContactIcons({ socialData }) {
  return (
    <div className="social">
      <ul>
        {socialData.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <span className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className={`bi bi-${item.platform}`} viewBox="0 0 16 16">
                  <path d={item.svgPath} />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactIcons;
