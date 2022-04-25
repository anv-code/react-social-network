import React from 'react';
import {Field} from 'redux-form';
import {Input} from 'antd';
import styles from './FormsControls.module.css';


export const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><Input.TextArea autoSize={true} {...input} {...restProps}/></FormControl>;
};

export const InputForm = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><Input {...input} {...restProps}/></FormControl>;
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {text}
  </div>
);
