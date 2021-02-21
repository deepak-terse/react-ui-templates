import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/FormInput.module.scss'

export default function SelectInput(props: any) {
    console.log(styles.input);
    return <select 
        name = {props.name}
        value = {props.value}
        className = {props.className}
        onChange = {props.onChange}>
            <option value="select">{props.placeholder}</option>
            {props.options.map((option: any) =>
                <option key={option.key} value={option.key}>{option.value}</option>
            )}
    </select>
}

SelectInput.defaultProps = {
    type: "select",
    className: styles.input,
    options : [
        {   value: 'foo', key: 'Foo'},
        {   value: 'bar', key: 'Bar'},
        {   value: 'baz', key: 'Baz'}
    ]
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['select']),
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired
}