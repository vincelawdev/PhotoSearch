import {
  SET_FORM_FIELD, SET_FORM_ERRORS, SEARCH_PHOTOS_INIT, SEARCH_PHOTOS_SUCCESS, SEARCH_PHOTOS_ERROR,
} from './constants';

const initialState = {
  searchLoading: false,
  searchError: null,
  searchResults: null,
  formFields: {
    keyword: '',
  },
  formErrors: [],
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
  case SET_FORM_FIELD:
    return {
      ...state,
      formFields: {
        ...state.formFields,
        [action.key]: action.value,
      }      
    };
  case SET_FORM_ERRORS:
    return {
      ...state,
      formErrors: action.errors,
    };
  case SEARCH_PHOTOS_INIT:
    return {
      ...state,
      searchLoading: true,
    };
  case SEARCH_PHOTOS_SUCCESS:
    return {
      ...state,
      searchLoading: false,
      searchResults: action.results,
    };
  case SEARCH_PHOTOS_ERROR:
    return {
      ...state,
      searchLoading: false,
      searchError: action.error,
    };
  default:
    return state;
  }
}
