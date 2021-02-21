import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FormInput.module.scss'

export default function RadioInput(props: any) {
    console.log(styles.input);
    return <input 
        type = {props.type}
        name = {props.name}
        placeholder = {props.placeholder}
        value = {props.value}
        className = {props.className}
        onChange = {props.onChange}
        />
}

RadioInput.defaultProps = {
    type: "radio",
    className: styles.input
}

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['radio']),
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}