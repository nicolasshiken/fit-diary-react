import { UPDATE_PROFILE, GET_PROFILE } from "../constants/actionTypes";

const profileReducer = (profile = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return profile;
  }
};

export default profileReducer;
