import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const CustomFormLabel = styled((props) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Typography
      variant='h6'
      {...props}
      component='label'
      htmlFor={props.htmlFor}
      marginRight='3px'
    />
    {props.required && <span style={{ color: '#fc4b6c' }}>*</span>}
  </div>
))(() => ({
  marginBottom: '5px',
  marginTop: '5px',
  display: 'block',
}));

export default CustomFormLabel;