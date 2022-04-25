import React, {createElement, useState} from 'react';
import {Comment, Tooltip, Avatar} from 'antd';
import moment from 'moment';
import {LikeOutlined, LikeFilled} from '@ant-design/icons';
import style from './Post.module.css';

const Post = (props) => {
  const [likes, setLikes] = useState(props.likesCount);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(props.likesCount + 1);
    setAction('liked');
  };

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,
    <button className={style.deleteButton} onClick={() => {
      props.delete(props.id);
    }}>
      удалить
    </button>
  ];

  return (
    <Comment
      actions={actions}
      author={<b>{props.fullName}</b>}
      avatar={<Avatar src={props.photosSmall} alt={props.fullName}/>}
      content={
        <p>
          {props.message}
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;

