import React from 'react';
import PropTypes from 'prop-types';

function Footer(props){
  return (
    <footer
      className={props.callback ? 'footerWithCallback' : 'footerWithoutCallback'}
    >
      {props.callback && Object.keys(props.errors).length === 0 &&
        (
          <p>Formulário enviado com sucesso</p>
        )
      }
      <button
        disabled={props.enableSendButton}
      >
        Enviar
      </button>
    </footer>
  )
}

Footer.propTypes = {
  callback: PropTypes.bool.isRequired,
  errors: PropTypes.shape({}).isRequired,
  enableSendButton: PropTypes.bool.isRequired,
};

export default Footer;