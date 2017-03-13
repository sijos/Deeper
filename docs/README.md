# GoDeeper

[Heroku link][heroku]

[Trello link][trello]

[heroku]: (pending)
[trello]: https://trello.com/b/uEGklG3h/full-stack-project

## Minimum Viable Product

Deeper is a web application inspired by Yelp specifically targeted toward reviews
of ski resorts across the world. Deeper is built using Ruby on Rails and React/Redux.
By the end of Week 9, this app will, at a minimum, satisfy the following criteria
with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] Hosting on Heroku
- [ ] Production README
- [ ] Mountain Page
- [ ] Search/Filters
- [ ] Reviews/Ratings
- [ ] Map

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** To make functioning rails project with front-end Authentication

### Phase 2: Mountain, review, and photo models (0.5 days)

**Objective:** To build models, controllers, and views (jbuilder) that enables CRUD
actions for mountains, reviews, and photos.

### Phase 3: Home Page and Mountain Detail Page (2.5 days)

**Objective:** To build components and layouts/styling for main home page (search)
and primary mountain review page. Includes new review entry/update form.

### Phase 4: Search/Filters/Sort (2 days)

**Objective:** To allow users to search for mountains by name, filter by country or
state, and sort by numeric metrics and ratings.

### Phase 5: Maps (1 day)

**Objective:** To add gmaps location and trail map for each mountain's page.

### Phase 6: - Tags/profile (1-2 days)

**Objective:** To add tags model that allows users to tag locations on trail map. To
add profile view for user w/ favorite mountains.

### Bonus Features (TBD)
- [ ] Interactive trail maps w/ basic tags (text only)
- [ ] Advanced tag types (photos, hazards, features)
- [ ] User profile page / favorites
- [ ] Submit new mountain form
- [ ] Marking reviews as funny/useful/cool
