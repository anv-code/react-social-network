import React from 'react';
import {Redirect} from 'react-router-dom';
import AddMessageFormRedux from './AddMessageForm/AddMessageForm';
import style from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';


const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'}/>;

  return (
    <div className={style.dialogs}>
      <button onClick={props.getDialogs}>GET DIALOGS</button>
      <div className={style.dialogsItems}>
        {/*{dialogsElements}*/}
      </div>
      <div className={style.messages}>
        <div>
          {/*{messagesElements}*/}
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
