
import React from 'react'
import PropTypes from 'prop-types'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './upButton.css'

export const UpButton  = ({label,cssClass,...props }) => {
  return (<ButtonComponent  cssClass={cssClass} {...props}>{label}</ButtonComponent>)
}

UpButton.propTypes = {}
 