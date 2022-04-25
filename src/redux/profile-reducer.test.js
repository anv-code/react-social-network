import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
  posts: [
    {id: 1, message: 'it is first post', likesCount: 17},
    {id: 2, message: 'it is second post', likesCount: 19}
  ]
};

it(`length of posts should be incremented`, () => {
  let action = addPostActionCreator('test');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it(`message of new post should be correct`, () => {
  let action = addPostActionCreator('test');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe('test');
});

it(`after deleting length of message should be decrement`, () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
