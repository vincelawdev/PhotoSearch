import axios from 'axios';
import {
  SET_FORM_FIELD, SET_FORM_ERRORS, SEARCH_PHOTOS_INIT, SEARCH_PHOTOS_SUCCESS, SEARCH_PHOTOS_ERROR,
} from './constants';

export function setFormField(key, value) {
  return {
    type: SET_FORM_FIELD,
    key,
    value,
  };
}

export function setFormErrors(errors) {
  return {
    type: SET_FORM_ERRORS,
    errors,
  };
}

export function searchPhotosInit() {
  return {
    type: SEARCH_PHOTOS_INIT,
  };
}

export function searchPhotosSuccess(results) {
  return {
    type: SEARCH_PHOTOS_SUCCESS,
    results,
  };
}

export function searchPhotosError(error) {
  return {
    type: SEARCH_PHOTOS_ERROR,
    error,
  };
}

export const searchCustomers = formFields => (dispatch) => {
  dispatch(searchPhotosInit());

  axios(
    {
      method: 'get',
      url: 'https://api.unsplash.com/search/photos',
      params: {
        client_id: 'PaQvcQMzkLnE0uFif8UPxzKAf1x5FAfAaUV2V8cSD6Q',
        query: formFields.keyword
      }
    }
  ).then((response) => {
    dispatch(searchPhotosSuccess(response.data));
  })
    .catch((error) => {
      dispatch(searchPhotosError(error));
    });
};
