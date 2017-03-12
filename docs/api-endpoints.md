# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Mountains

- `GET /api/mountains`
  - Notes index/search
  - accepts query param to search mountains by name
- `GET /api/mountains/:id`

### Reviews

- `GET /api/mountains/:mountain_id/reviews`
  - index of all reviews for mountain - shown on mountain detail page
- `POST /api/mountains/:mountain_id/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/users/:user_id/reviews`
  - index of all reviews for a user

### Photos

- `GET /api/mountains/:mountain_id/photos`
- `POST /api/mountains/:mountain_id/photos`
- `DELETE /api/photos/:id `

### Tags (time permitting)

- A mountains' tags will be shown on the mountain detail page in the 'explore mountain' view
- `GET /api/mountains/:mountain_id/tags`
- `POST /api/mountains/:mountain_id/tags`
- `DELETE /api/tags/:id`
