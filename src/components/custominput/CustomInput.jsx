import React from 'react';

import './custominput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {/* this don't need handle submit, because this don't have func of submitting form */}
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        /* we implement func of design when user enter text */
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}{/* if there is a label prop we will have label if not, we won't label tag */}
      </label>
    ) : null}
  </div>
);

export default FormInput;
