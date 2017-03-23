import * as PhotoAPI from '../util/photos_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

const receivePhotos = (photos) => ({
  type: RECEIVE_PHOTOS,
  photos
});

const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = (photo) => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotos = (resortId) => (dispatch) => {
  PhotoAPI.fetchPhotos(resortId).then(
    (photos) => dispatch(receivePhotos(photos))
  );
};

export const postPhoto = (photo) => (dispatch) => {
  PhotoAPI.postPhoto(photo).then(
    (photo) => dispatch(receivePhoto(photo))
  );
};

export const deletePhoto = (id) => (dispatch) => {
  PhotoAPI.deletePhoto(id).then(
    (photo) => dispatch(removePhoto(photo))
  );
};
