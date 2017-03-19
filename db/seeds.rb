# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  { username: 'scott', password: 'password', profile_pic_url: "http://res.cloudinary.com/dagjelvab/image/upload/v1489891110/boarder-icon.jpg" },
  { username: 'zestyyy', password: 'password' },
  { username: 'rage', password: 'password' },
  { username: 'ridelyfe', password: 'password' },
])

Resort.create([
  {
    name: 'Vail',
    address: '250 Vail Rd',
    zip: '81657',
    city: 'Vail',
    state_province: 'CO',
    country: 'USA',
    skiable_acres: 5289,
    vertical_drop: 3450,
    peak_elevation: 11570,
    avg_snowfall: 29.0,
    num_trails: 193,
    num_lifts: 31,
    price_rating: 4,
    website_url: 'http://www.vail.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708199/resort%20pics/vail-map.pdf',
    lat: 39.606138,
    lng: -106.354973,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708055/resort%20pics/vail-profile.jpg'
  },
  {
    name: 'Heavenly',
    address: '4080 Lake Tahoe Blvd',
    zip: '96150',
    city: 'South Lake Tahoe',
    state_province: 'CA',
    country: 'USA',
    skiable_acres: 4800,
    vertical_drop: 3502,
    peak_elevation: 10067,
    avg_snowfall: 30.0,
    num_trails: 97,
    num_lifts: 28,
    price_rating: 4,
    website_url: 'http://www.skiheavenly.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708288/resort%20pics/heavenly-map.jpg',
    lat: 38.956829,
    lng: -119.942632,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708465/resort%20pics/heavenly-profile.jpg'
  },
  {
    name: 'Whistler Blackcomb',
    address: '4545 Blackcom Way',
    zip: 'V0N 1B4',
    city: 'Whistler',
    state_province: 'BC',
    country: 'Canada',
    skiable_acres: 8171,
    vertical_drop: 5279,
    peak_elevation: 7493,
    avg_snowfall: 38.5,
    num_trails: 200,
    num_lifts: 37,
    price_rating: 3,
    website_url: 'https://www.whistlerblackcomb.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708572/resort%20pics/whistler-map.pdf',
    lat: 50.114964,
    lng: -122.948647,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489708609/resort%20pics/whistler-profile.jpg',
  },
  {
    name: 'Kirkwood',
    address: '1501 Kirkwood Meadows Dr',
    zip: '95646',
    city: 'Kirkwood',
    state_province: 'CA',
    country: 'USA',
    skiable_acres: 2300,
    vertical_drop: 2000,
    peak_elevation: 9800,
    avg_snowfall: 49.9,
    num_trails: 86,
    num_lifts: 15,
    price_rating: 3,
    website_url: 'http://www.kirkwood.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489782629/kirkwood-map.pdf',
    lat: 38.684751,
    lng: -120.065167,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489782484/kirkwood-profile.jpg'
  },
  {
    name: 'Park City Mountain Resort',
    address: '1345 Lowell Ave',
    zip: '84060',
    city: 'Park City',
    state_province: 'UT',
    country: 'USA',
    skiable_acres: 3300,
    vertical_drop: 3200,
    peak_elevation: 10000,
    avg_snowfall: 29.6,
    num_trails: 333,
    num_lifts: 41,
    price_rating: 4,
    website_url: 'http://www.parkcitymountain.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489783620/park-city-map.jpg',
    lat: 40.651465,
    lng: -111.507807,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489783843/park-city-profile.jpg'
  },
  {
    name: 'Brighton',
    address: '8302 S Brighton Loop Rd',
    zip: '84121',
    city: 'Brighton',
    state_province: 'UT',
    country: 'USA',
    skiable_acres: 1050,
    vertical_drop: 1745,
    peak_elevation: 10500,
    avg_snowfall: 41.7,
    num_trails: 66,
    num_lifts: 6,
    price_rating: 3 ,
    website_url: 'http://www.brightonresort.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489784575/brighton-map.jpg',
    lat: 40.592546,
    lng: -111.577642,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489784469/brighton-profile.jpg'
  },
  {
    name: 'Snowbird',
    address: '9385 Snowbird Center Trail',
    zip: '84092',
    city: 'Sandy',
    state_province: 'UT',
    country: 'USA',
    skiable_acres: 2500,
    vertical_drop: 3420,
    peak_elevation: 11000,
    avg_snowfall: 42.0,
    num_trails: 169,
    num_lifts: 11,
    price_rating: 4,
    website_url: 'http://www.snowbird.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489786273/snowbird-map.jpg',
    lat: 40.580982,
    lng: -111.657615,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489786126/snowbird-profile.jpg'
  },
  {
    name: 'Jackson Hole Mountain Resort',
    address: '3395 Cody Ln',
    zip: '83025',
    city: 'Teton Village',
    state_province: 'WY',
    country: 'USA',
    skiable_acres: 2500,
    vertical_drop: 4139,
    peak_elevation: 10450,
    avg_snowfall: 38.4,
    num_trails: 141,
    num_lifts: 12,
    price_rating: 4,
    website_url: 'https://www.jacksonhole.com/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489787053/jackson-hole-map.jpg',
    lat: 43.587520,
    lng: -110.827868,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489786655/jackson-hole-profile.png'
  },
  {
    name: 'Mont-Tremblant',
    address: '118 Chemin Kandahar',
    zip: 'J8E 1T1',
    city: 'Mont-Tremblant',
    state_province: 'QC',
    country: 'Canada',
    skiable_acres: 650,
    vertical_drop: 2116,
    peak_elevation: 2871,
    avg_snowfall: 13.0,
    num_trails: 98,
    num_lifts: 14,
    price_rating: 3,
    website_url: 'https://www.tremblant.ca/',
    trail_map_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489788395/mont-tremblant-map.jpg',
    lat: 46.209642,
    lng: -74.585253,
    profile_pic_url: 'http://res.cloudinary.com/dagjelvab/image/upload/v1489787919/mont-tremblant-profile.jpg',
  }
])

# {
#   name:
#   address:
#   zip:
#   city:
#   state_province:
#   country:
#   skiable_acres:
#   vertical_drop:
#   peak_elevation:
#   avg_snowfall:
#   num_trails:
#   num_lifts:
#   price_rating:
#   website_url:
#   trail_map_url:
#   lat:
#   lng:
#   profile_pic_url:
# }

Review.create([
  {
    resort_id: 7,
    user_id: 2,
    body: "A technical mountain with diverse terrain. Powder days should be spent in Mineral Basin and exploring tree runs. Pro tip: Get to the mountain really, really early when it snows or be caught in canyon traffic.",
    overall_rating: 4,
    basic_t_rating: 4,
    adv_t_rating: 5,
    amenities_rating: 3,
    services_rating: 5 ,
    value_rating: 3
  },
  {
    resort_id: 2,
    user_id: 1,
    body: "Best views in Lake Tahoe! There is some insane backcountry on the Nevada side down to the gondola, but make sure there's enough snow and good luck finding the exit or you could be walking...",
    overall_rating: 4,
    basic_t_rating: 5,
    adv_t_rating: 4,
    amenities_rating: 3,
    services_rating: 4,
    value_rating: 2
  },
  {
    resort_id: 2,
    user_id: 4,
    body: "Big, lots of terrain, lots of fun with fresh snow. Gets a bit packed with tourists and gapers in peak season, go on weekdays if possible",
    overall_rating: 3,
    basic_t_rating: 5,
    adv_t_rating: 3,
    amenities_rating: 2,
    services_rating: 1,
    value_rating: 1
  },
  {
    resort_id: 2,
    user_id: 3,
    body: "Choice views, rage approved.",
    overall_rating: 5,
    basic_t_rating: 3,
    adv_t_rating: 5,
    amenities_rating: 5,
    services_rating: 4,
    value_rating: 3
  }
  ])

  # {
  #   resort_id:
  #   user_id:
  #   body:
  #   overall_rating:
  #   basic_t_rating:
  #   adv_t_rating:
  #   amenities_rating:
  #   services_rating:
  #   value_rating:
  # }
