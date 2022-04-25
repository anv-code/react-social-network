import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (
    <div>
      <div>
        <ProfileInfo
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          savePhoto={props.savePhoto}
          saveProfile={props.saveProfile}
        />
      </div>
      <MyPostsContainer
        profile={props.profile}
        isOwner={props.isOwner}
      />
    </div>
  );
};

export default Profile;
