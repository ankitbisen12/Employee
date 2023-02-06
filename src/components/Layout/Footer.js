import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.inner__footer}>
        <div className={classes.fttr}>
          <p>
            <i class="far fa-copyright"></i> Copyright 2019-2025| Made By Ankit Bisen 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
