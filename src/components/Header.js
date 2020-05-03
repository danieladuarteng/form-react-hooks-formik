import React from 'react';
import PropTypes from 'prop-types';

function Header(props){
  return (
    <header>
      <h1>
        {props.title}<br/>
        {props.subTitle}<br/>
        <strong>{props.interTitle}</strong>
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  interTitle: PropTypes.string.isRequired,
}

export default Header;