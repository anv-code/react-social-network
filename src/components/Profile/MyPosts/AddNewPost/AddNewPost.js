import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {Button} from 'antd';
import style from './../MyPosts.module.css';


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.addNewPostForm}>
      <div className={style.addNewPostFormInput}>
        <Field component={Textarea} name='newPostText' placeholder='Что нового?' validate={[]}/>
      </div>
      <div>
        <Button htmlType='submit' type='primary'>Опубликовать</Button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default AddNewPostFormRedux;
