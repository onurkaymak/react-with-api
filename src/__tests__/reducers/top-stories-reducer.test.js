import topStoriesReducer from '../../reducers/top-stories-reducer';
import * as c from './../../actions/ActionTypes';

describe('topStoriesReducer', () => {
  let action;

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
  };

  test('#1 Should successfully throw a new error if a non-matching action type is passed into it', () => {
    expect(
      () => {
        topStoriesReducer(initialState, { type: null })
      }
    ).toThrowError("There is no action matching null.");
  });

  test('#2 Successfully getting top stories should change isLoaded to true and update topStories', () => {

    const topStories = "An article";

    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: "An article",
      error: null
    });
  });

  test('#3 Failing to get topStories should change isLoaded to true and add an error message', () => {

    const error = "An error";

    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error
    };

    expect(topStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [],
      error: "An error"
    });
  });

});