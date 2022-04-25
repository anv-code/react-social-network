import React from 'react';
import {reset} from 'redux-form';
import {useDispatch} from 'react-redux';
import Post from './Post/Post';
import AddNewPostFormRedux from './AddNewPost/AddNewPost';
import style from './MyPosts.module.css';


const MyPosts = React.memo(props => {
  const dispatch = useDispatch();

  if (!props.profile) {
    return null;
  }

  if (!props.isOwner) {
    return null;
  }

  const postsElements = props.posts.map(p => <Post
    message={p.message}
    likesCount={p.likesCount}
    key={p.id} id={p.id}
    delete={props.deletePost}
    photosSmall={props.profile.photos.small}
    fullName={props.profile.fullName}
  />).reverse();

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
    dispatch(reset('ProfileAddNewPostForm'));
  };

  return (
    <div className={style.postsBlock}>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <h2>Мои публикации:</h2>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
