import { FETCH_NOTES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NOTES:
      return action.payload;
    default:
      return state;
  }
}
