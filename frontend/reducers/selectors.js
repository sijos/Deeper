export const selectHomeResorts = ({ resorts }) => (
  Object.keys(resorts).map(id => ({
    id: id,
    name: resorts[id].name,
    profile_pic_url: resorts[id].profile_pic_url
  }))
);

export const selectSearchResorts = ({ resorts }) => (
  Object.keys(resorts).map(id => resorts[id])
);

export const selectReviews = ({ reviews }) => (
  Object.keys(reviews).map(id => reviews[id]).slice(0, -1)
);
