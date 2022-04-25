import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Cras sapien mi, placerat tempus vulputate a, maximus et augue. Duis suscipit dapibus aliquam. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel lacus sit amet felis tincidunt congue. Nunc eu posuere enim. Praesent pretium lacinia ligula at porta' +
        '\n',
      likesCount: 11
    },
    {
      id: 2,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis maximus quam, sed interdum sem sagittis id. In iaculis ultrices ligula, in luctus arcu semper at. Integer mi sapien, fermentum nec pulvinar nec, imperdiet sed mi. Aliquam tempor, est sed gravida sagittis, turpis orci tempor eros, eget blandit tellus risus a leo. Donec eu tristique turpis, eget maximus purus. Morbi eleifend at diam non bibendum. Vivamus nec maximus nisi. In sagittis sollicitudin dui vel fringilla. Phasellus rutrum justo in velit pharetra dapibus' +
        '\n',
      likesCount: 10
    },
    {
      id: 3,
      message: 'Nunc quis viverra magna. Ut vel dolor elementum erat posuere gravida. Morbi sollicitudin scelerisque urna id ultricies. Nullam at quam tristique, condimentum libero quis, facilisis magna. Aenean euismod urna ac sem vehicula consequat. Nulla sit amet lorem non tellus commodo semper at in erat. Nunc id quam a lacus auctor euismod. Proin et ante velit. Mauris fringilla, felis non commodo convallis, quam nunc feugiat nisl, eu ultrices magna magna sed arcu. Sed tempus, lorem eget facilisis luctus, tortor lacus pulvinar dolor, eget ultrices massa ipsum id quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse placerat gravida risus, ut fringilla turpis. Nam tincidunt ut dui in bibendum. Duis placerat nibh in velit pulvinar placerat' +
        '\n',
      likesCount: 3
    },
    {
      id: 4,
      message: 'Maecenas congue semper volutpat. Curabitur aliquet felis eget blandit vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris fermentum orci at ante pharetra posuere. Sed consectetur viverra turpis a varius. Sed ipsum purus, bibendum vitae risus eget, feugiat efficitur massa. Integer quis metus eget justo blandit aliquam et in metus. Morbi a nisi tristique, tincidunt ipsum vitae, rutrum mi. Quisque quis orci nec augue vehicula volutpat. Donec pretium augue ipsum' +
        '\n',
      likesCount: 5
    },
    {
      id: 5,
      message: 'Nam augue ligula, facilisis vel ornare at, pulvinar id velit. Phasellus ultricies arcu nec diam consectetur, et blandit lorem fringilla. Sed ut erat accumsan tortor venenatis egestas facilisis eget tortor. Praesent lacinia quis augue venenatis commodo. Nunc nec dui feugiat, porttitor enim finibus, interdum erat. In hac habitasse platea dictumst. Aenean ac elementum est. Aenean faucibus, nisl vel porttitor viverra, nisi metus molestie turpis, id cursus nibh magna sed velit. Curabitur fermentum vel nisl at luctus. Cras iaculis nisi ut euismod imperdiet' +
        '\n',
      likesCount: 2
    },
    {
      id: 6,
      message: 'Etiam vehicula, turpis non interdum dapibus, purus mi rhoncus lectus, a pulvinar lacus dui quis tellus. Aliquam vel arcu vel sem commodo commodo et eu mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus, mauris vitae scelerisque euismod, sem quam lacinia dolor, sed tempus ex ligula sed dolor. Cras ligula ante, sodales nec odio sed, iaculis hendrerit neque. Vivamus lacus velit, tempor iaculis posuere vel, aliquet nec mi. Morbi in quam urna. Curabitur non sapien ut massa placerat gravida. Morbi gravida risus vitae convallis ullamcorper. Nam tempor est vitae lectus tempus condimentum. Mauris vel arcu in sem aliquam euismod vel non felis' +
        '\n',
      likesCount: 7
    },
    {
      id: 7,
      message: 'Cras blandit ante quam. Fusce consequat ligula eget arcu luctus accumsan. Vestibulum iaculis rutrum rutrum. Integer ultrices eleifend interdum. Pellentesque interdum velit id eros efficitur blandit. Donec aliquet consectetur dapibus. Suspendisse potenti. Quisque pellentesque enim in porttitor lobortis. Cras massa magna, laoreet a mi at, consectetur sagittis mi.',
      likesCount: 1
    },
    {
      id: 8,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis maximus quam, sed interdum sem sagittis id. In iaculis ultrices ligula, in luctus arcu semper at. Integer mi sapien, fermentum nec pulvinar nec, imperdiet sed mi. Aliquam tempor, est sed gravida sagittis, turpis orci tempor eros, eget blandit tellus risus a leo. Donec eu tristique turpis, eget maximus purus. Morbi eleifend at diam non bibendum. Vivamus nec maximus nisi. In sagittis sollicitudin dui vel fringilla. Phasellus rutrum justo in velit pharetra dapibus' +
        '\n',
      likesCount: 15
    }
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: postIdGenerator(),
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case SET_STATUS: {
      return {...state, status: action.status};
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile};
    }
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}};
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};

function postIdGenerator() {
  const randomFn = () => Math.ceil(Math.random() * 1000);
  const random = randomFn();

  for (let post of initialState.posts) {
    if (post.id === random) {
      return postIdGenerator();
    }
  }

  return random;
}

export default profileReducer;
