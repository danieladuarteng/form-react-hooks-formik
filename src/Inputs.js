import React from 'react';
import PropTypes from 'prop-types';

function Inputs(props){
  return (
    <>
      <fieldset>
        <legend>Quais stickers:</legend>

          <input
            id='react'
            type='checkbox'
            name='stickers.react'
            aria-labelledby='label-react'
            aria-describedby='Option react'
            onChange={props.handleChange}
            value={props.react}
            required={props.enableStickerOptions}
          />
          <label id='label-react'  htmlFor='react'>
            React
          </label>

          <div>
            <input
              id='vue'
              type='checkbox'
              name='stickers.vue'
              aria-labelledby='label-vue'
              aria-describedby='Option vue'
              onChange={props.handleChange}
              value={props.vue}
              required={props.enableStickerOptions}
            />
            <label id='label-vue' htmlFor='vue'>
              Vue
            </label>
          </div>

          <div>
            <input
              id='angular'
              type='checkbox'
              name='stickers.angular'
              aria-labelledby='label-angular'
              aria-describedby='Option angular'
              onChange={props.handleChange}
              value={props.angular}
              required={props.enableStickerOptions}
            />
            <label id='label-angular ' htmlFor='angular'>
              Angular
            </label>
          </div>
      </fieldset>

        <fieldset>
          <legend>Quantos stickers de cada?</legend>
          <div className='counter'>
            <button
              disabled={props.enableStickersButton}
              onClick={e => {
                e.preventDefault();
                props.setCount(props.count - 1);
                props.setFieldValue('count', props.count -1);
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                <path d='M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z' />
              </svg>
            </button>

            <output className={props.count === 0 ? 'countInvalid': undefined} name='count'>{props.count}</output>

            <button
              onClick={e => {
                e.preventDefault();
                props.setCount(props.count + 1);
                props.setFieldValue('count', props.count +1);
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'>
                <path d='M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z' />
              </svg>
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Observações:</legend>
            <textarea
              name='description'
              onChange={props.handleChange}
              defaultValue={props.description}
              placeholder='Alguma dúvida? Recado?'
            />
        </fieldset>
    </>
  )
}

Inputs.propTypes = {
  count: PropTypes.number.isRequired,
  react: PropTypes.bool.isRequired,
  vue: PropTypes.bool.isRequired,
  angular: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  enableStickerOptions: PropTypes.bool.isRequired,
  enableStickersButton: PropTypes.bool.isRequired,
  setCount: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default Inputs;