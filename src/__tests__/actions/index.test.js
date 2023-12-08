import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Top stories reducer actions', () => {
  it('#1 getTopStoriesSuccess should create GET_TOP_STORIES_SUCCESS action', () => {
    const topStories = "An article";
    expect(actions.getTopStoriesSuccess(topStories)).toEqual({
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories
    });
  });

  it('#2 getTopStoriesFailure should create GET_TOP_STORIES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getTopStoriesFailure(error)).toEqual({
      type: c.GET_TOP_STORIES_FAILURE,
      error
    });
  });
});