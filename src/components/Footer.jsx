import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className="footer mt-auto text-center py-3 bg-dark text-bg-light text-light">
      Copyright &copy; {new Date().getFullYear()} UET Literary Society
      </div>

      <div className="socials">
        <p className="youtube"></p>
        <p className="facebook"></p>
        <p className="instagram"></p>
      </div>
    </footer>
  );
};

export default Footer;