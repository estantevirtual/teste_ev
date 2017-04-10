require 'test_helper'

class CompetesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @compete = competes(:one)
    @sportsman = sportsmen(:one)
    @event = events(:rio_futebol)
    @ended = events(:ended)
    @not_started = events(:not_started)
    @no_attempts = events(:no_attempts)
  end

  test "should get index" do
    get competes_url
    assert_response :success
  end

  test "should create compete" do
    assert_difference('Compete.count') do
      post competes_url, params: { compete: { event_id: @event.id, score: @compete.score, sportsman_id: @sportsman.id } }
    end
  end

  test "should not_create compete_not_started" do
    post competes_url, params: { compete: { event_id: @not_started.id, score: @compete.score, sportsman_id: @sportsman.id } }
    assert_response 400
  end

  test "should not_create compete_ended" do
    post competes_url, params: { compete: { event_id: @ended.id, score: @compete.score, sportsman_id: @sportsman.id } }
    assert_response 400
  end

  test "should not_create compete_no_attempts" do
    post competes_url, params: { compete: { event_id: @no_attempts.id, score: @compete.score, sportsman_id: @sportsman.id } }
    assert_response 400
  end

  test "should show compete" do
    get compete_url(@compete)
    assert_response :success
  end
end
