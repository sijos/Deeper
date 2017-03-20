# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170320203841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "photos", force: :cascade do |t|
    t.integer  "resort_id",  null: false
    t.integer  "user_id",    null: false
    t.string   "url",        null: false
    t.string   "caption"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resort_id"], name: "index_photos_on_resort_id", using: :btree
    t.index ["user_id"], name: "index_photos_on_user_id", using: :btree
  end

  create_table "resorts", force: :cascade do |t|
    t.string   "name",                         null: false
    t.string   "address",                      null: false
    t.string   "zip",                          null: false
    t.string   "city",                         null: false
    t.string   "state_province",               null: false
    t.string   "country",                      null: false
    t.integer  "vertical_drop",                null: false
    t.integer  "peak_elevation",               null: false
    t.float    "avg_snowfall",                 null: false
    t.integer  "num_trails",                   null: false
    t.integer  "num_lifts",                    null: false
    t.integer  "price_rating",                 null: false
    t.string   "website_url",                  null: false
    t.string   "trail_map_url",                null: false
    t.float    "lat",                          null: false
    t.float    "lng",                          null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.string   "profile_pic_url", default: ""
    t.integer  "skiable_acres",                null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "resort_id",        null: false
    t.integer  "user_id",          null: false
    t.text     "body",             null: false
    t.integer  "overall_rating",   null: false
    t.integer  "basic_t_rating",   null: false
    t.integer  "adv_t_rating",     null: false
    t.integer  "amenities_rating", null: false
    t.integer  "services_rating",  null: false
    t.integer  "value_rating",     null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["resort_id"], name: "index_reviews_on_resort_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                     null: false
    t.string   "password_digest",                                                                                              null: false
    t.string   "session_token",                                                                                                null: false
    t.string   "profile_pic_url", default: "http://res.cloudinary.com/dagjelvab/image/upload/v1489967630/default-profile.png"
    t.datetime "created_at",                                                                                                   null: false
    t.datetime "updated_at",                                                                                                   null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
