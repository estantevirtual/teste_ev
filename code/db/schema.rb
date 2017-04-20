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

ActiveRecord::Schema.define(version: 20170418210338) do

  create_table "competitions", force: :cascade do |t|
    t.string   "name"
    t.datetime "starts_at"
    t.datetime "finished_at"
    t.integer  "modality_id"
    t.index ["modality_id"], name: "index_competitions_on_modality_id"
  end

  create_table "modalities", force: :cascade do |t|
    t.string "name"
    t.string "unity"
    t.string "type"
  end

  create_table "results", force: :cascade do |t|
    t.integer "competition_id"
    t.string  "athlete"
    t.float   "value"
    t.index ["competition_id"], name: "index_results_on_competition_id"
  end

end
