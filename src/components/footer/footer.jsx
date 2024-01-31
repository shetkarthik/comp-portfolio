import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <div className="footer">

    <div className='d-flex justify-content-around fs-4'>
        <div className='m-1'>
            <a href="tel:8971806295" className="text-primary" target='_blank'>
                <i className="fa-solid fa-phone"></i>
            </a>
        </div>
        <div className='m-1'> 
            <a href="mailto:shetkarthik89@gmail.com" className="text-info" target='_blank'>
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
        <div className='m-1'>
            <a href="https://www.linkedin.com/in/karthik-shet-3049521a1/" className="text-success" target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
                
            </a>
        </div>
    </div>
</div>

  );
}

export default Footer;