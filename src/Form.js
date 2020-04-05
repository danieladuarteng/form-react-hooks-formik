import React, { useState } from "react";
import { withFormik } from "formik";
import { formik } from './Form.formik';
import "./Form.css";

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

  const enableStickerOptions = () =>{
    let result = true;

    if (react || angular || vue) result = false;

    return result;
  }

  const enableStickersButton = () =>{
    let result = false;

    if(count <= 0 ) result = true;

    return result;
  }

  return (
    <form autoComplete="off" noValidate
      onSubmit={handleSubmit}>
      <div className="box">
        <div className="header">
          <h1>
            <p>Formulário</p>
            <p>para compra de</p>
            <span>Pacote de Stickers</span>
          </h1>
        </div>

        <fieldset>
          <legend>Quais stickers:</legend>

            <input
              id="react"
              type="checkbox"
              name="stickers.react"
              aria-labelledby="label-react"
              aria-describedby="Option react"
              onChange={handleChange}
              value={react}
              required={enableStickerOptions()}
            />
            <label id="label-react"  htmlFor="react">
              React
            </label>

          <div>
            <input
              id="vue"
              type="checkbox"
              name="stickers.vue"
              aria-labelledby="label-vue"
              aria-describedby="Option vue"
              onChange={handleChange}
              value={vue}
              required={enableStickerOptions()}
            />
            <label id="label-vue" htmlFor="vue">
              Vue
            </label>
          </div>
          <div>
            <input
              id="angular"
              type="checkbox"
              name="stickers.angular"
              aria-labelledby="label-angular"
              aria-describedby="Option angular"
              onChange={handleChange}
              value={angular}
              required={enableStickerOptions()}
            />
            <label id="label-angular " htmlFor="angular">
              Angular
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Quantos stickers de cada?</legend>
          <div className="counter">
            <button
              disabled={enableStickersButton()}
              onClick={e => {
                e.preventDefault();
                setCount(count - 1);
                setFieldValue('count', count -1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
                <path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" />
              </svg>
            </button>

            <output className={count === 0 ? "countInvalid": undefined} name="count">{count}</output>

            <button
              onClick={e => {
                e.preventDefault();
                setCount(count + 1);
                setFieldValue('count', count +1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42">
                <path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" />
              </svg>
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Observações:</legend>
            <textarea
              name="description"
              onChange={handleChange}
              defaultValue={description}
              placeholder="Alguma dúvida? Recado?"
            />
        </fieldset>

        <footer className={callback ? "footerWithCallback" : "footerWithoutCallback"}>
          {callback && Object.keys(errors).length === 0 && (<p>Formulário enviado com sucesso</p>)}
          <button disabled={enableSendButton()}>Enviar</button>
        </footer>
      </div>
    </form>
  );
}

export default withFormik(formik)(Form);
