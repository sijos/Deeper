# Schema Information

## users

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | string    | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |
| profile_pic_url | string    | default: ''               |

## mountains

| column name      | data type | details               |
|------------------|-----------|-----------------------|
| id               | string    | not null, primary key |
| name             | string    | not null              |
| address          | string    | not null              |
| city             | string    | not null              |
| state_province   | string    | not null              |
| country          | string    | not null              |
| skiable_acres    | integer   | not null              |
| vertical_drop    | integer   | not null              |
| peak_elevation   | integer   | not null              |
| avg_snowfall     | float     | not null              |
| num_trails       | integer   | not null              |
| num_lifts        | integer   | not null              |
| price_rating     | string    | not null              |
| website_url      | string    | not null              |
| profile_pic_url  | string    | not null              |
| trail_map_url    | string    | not null              |
| lat              | float     | not null              |
| long             | float     | not null              |

## reviews

| column name             | data type | details                                               |
|-------------------------|-----------|-------------------------------------------------------|
| id                      | integer   | not null, primary key                                 |
| mountain_id             | integer   | not null, foreign key (references mountains), indexed |
| user_id                 | integer   | not null, foreign key (references users), indexed     |
| body                    | text      | not null                                              |
| overall_rating          | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| basic_terrain_rating    | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| advanced_terrain_rating | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| amenities_rating        | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| services_rating         | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |

## photos

| column name | data type | details                                              |
|-------------|-----------|------------------------------------------------------|
| id          | integer   | not null, primary key                                |
| mountain_id | integer   | not null, foreign key (references mountain), indexed |
| user_id     | integer   | not null, foreign key (references user), indexed     |
| url         | string    | not null                                             |
<!-- | tag_id      | integer   | foreign key (references tag), indexed                | -->

<!-- ## tags

| column name | data type | details                                              |
|-------------|-----------|------------------------------------------------------|
| id          | integer   | not null, primary key                                |
| mountain_id | integer   | not null, foreign key (references mountain), indexed |
| user_id     | integer   | not null, foreign key (references user), indexed     |
| photo_id    | integer   | foreign key (references photo), indexed              |
| caption     | string    | not null                                             |
| type        | string    | not null, inclusive [feature, hazard, photo]         | -->
