import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { formik } from './Form.formik';
import Header from './Header';
import Inputs from './Inputs';
import Footer from './Footer';
import './Form.css';

function Form(props) {
  const [count, setCount] = useState(0);

  const {
    values: {
      stickers: { react, vue, angular},
      description,
    },
    callback,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue
  } = props;

  const enableSendButton = () => {
    let result = true;

    if (react || angular || vue) result = false;
    if(count <= 0) result = true;
    if(Object.keys(errors).length !== 0) result = true;

    return result;
  }

  const enableStickerOptions = () => {
    let result = true;

    if (react || angular || vue) result = false;

    return result;
  }

  const enableStickersButton = () => {
    let result = false;

    if(count <= 0 ) result = true;

    return result;
  }

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <Header
        title='Formulário'
        subTitle='para compra de'
        interTitle='Pacote de Stickers'
      />

      <Inputs
        errors={errors}
        count={count}
        react={react}
        vue={vue}
        angular={angular}
        description={description}
        handleChange={handleChange}
        enableStickerOptions={enableStickerOptions()}
        enableStickersButton={enableStickersButton()}
        setCount={setCount}
        setFieldValue={setFieldValue}
      />

      <Footer
        callback={callback}
        errors={errors}
        enableSendButton={enableSendButton()}
      />
    </form>
  );
}


Form.propTypes = {
  callback: PropTypes.bool,
  errors: PropTypes.shape({}),
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  setFieldValue:PropTypes.func,
  values: PropTypes.shape({
    stickers:  PropTypes.shape({
      react:PropTypes.bool,
      vue:PropTypes.bool,
      angular:PropTypes.bool,
    }),
    description: PropTypes.string,
    count: PropTypes.number,
  })
};

Form.defaultProps = {
  callback: false,
  errors: {},
  handleSubmit: () => {},
  handleChange: () => {},
  setFieldValue:() => {},
  values:{
    stickers:  {
      react:false,
      vue:false,
      angular:false,
    },
    description: '',
    count: 0,
  }
};


export default withFormik(formik)(Form);
