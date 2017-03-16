# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Resort.create({
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
  website_url:'http://www.vail.com/',
  trail_map_url: 'http://www.vail.com/~/media/vail/files/fy17/trail%20maps/vail-maps16-winter-frontside.ashx',
  lat: 39.606138,
  lng: -106.354973,
  profile_pic_url: 'https://static.pixlee.com/photos/52999069/xl/2c92a154a4f5c06b13d2.jpg'
  })

Resort.create({
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
  trail_map_url: 'http://www.skiheavenly.com/~/media/heavenly/images/trail%20map%20images/2016/hvy_trailmap_2016_thumb.ashx?la=en&h=837&w=700',
  lat: 38.956829,
  lng: -119.942632,
  profile_pic_url: 'https://lh6.googleusercontent.com/proxy/2xGnKug8bs9qMA5uVo3LzdaYPiTbSFdlZ2-cRwcfV6ovzsmBLqMsD7RBZ0Bx3qac0T0ez2m0xA-q5aUCg1fP5xTMzwYaZWnG3tFJ03Fv7jcO9BCmXKdceexdgKXjoTOLeL5Q3GwDspnu5MS8y5xttIcUX-F1dLE=w415-h200'
})

# Resort.create({
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
# })
