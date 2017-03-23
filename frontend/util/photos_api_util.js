export const fetchPhotos = (resort_id) => {
  return $.ajax({
    method: "GET",
    url: "api/photos",
    data: { resort_id }
  });
};

export const postPhoto = (photo) => {
  return $.ajax({
    method: "POST",
    url: "api/photos",
    data: { photo }
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/photos/${id}`,
  });
};
