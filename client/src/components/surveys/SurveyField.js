// SurveyField contains logic to render a single 
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div style={{ marginTop: '20px', fontSize: '1.1rem'}}>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }}/>
      <div className="red-text" style={{ marginBottom: '15px' }}>
       {touched && error}
      </div>
    </div>
  );
}