import React from 'react';
//import PropTypes from 'prop-types';
import classnames from 'classnames';
const TextInputGroup = ({label,
    name,
    value,
    placeholder,
    type,
    onChange,error }) =>{
    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type= {type}
        name = {name}
        className= {classnames("form-control form-control-lg",{
            "is-invalid" : error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        {
            error && <div className="invalid-feedback">{error}</div>
        }
       
    </div>
    
    )


};

export default TextInputGroup;
