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

ActiveRecord::Schema.define(version: 20170410005603) do

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.string   "score_type"
    t.string   "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "competes", force: :cascade do |t|
    t.decimal  "score"
    t.integer  "sportsman_id"
    t.integer  "event_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["event_id"], name: "index_competes_on_event_id"
    t.index ["sportsman_id"], name: "index_competes_on_sportsman_id"
  end

  create_table "events", force: :cascade do |t|
    t.string   "location"
    t.string   "name"
    t.integer  "attempts"
    t.date     "begin_dt"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "category_id"
    t.boolean  "ended",       default: false
  end

  create_table "sportsmen", force: :cascade do |t|
    t.string   "name"
    t.integer  "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
