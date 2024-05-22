import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = ({ footer }) => {
  return (
    <div className={footer}>
      Copyright {getFullYear()} - {getFooterCopy()}
    </div>
  );
};

export default Footer;
