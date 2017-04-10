require 'test_helper'

class CompetesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @compete = competes(:one)
  end

  test "should get index" do
    get competes_url
    assert_response :success
  end

  test "should get new" do
    get new_compete_url
    assert_response :success
  end

  test "should create compete" do
    assert_difference('Compete.count') do
      post competes_url, params: { compete: { event_id: @compete.event_id, score: @compete.score, sportsman_id: @compete.sportsman_id } }
    end

    assert_redirected_to compete_url(Compete.last)
  end

  test "should show compete" do
    get compete_url(@compete)
    assert_response :success
  end

  test "should get edit" do
    get edit_compete_url(@compete)
    assert_response :success
  end

  test "should update compete" do
    patch compete_url(@compete), params: { compete: { event_id: @compete.event_id, score: @compete.score, sportsman_id: @compete.sportsman_id } }
    assert_redirected_to compete_url(@compete)
  end

  test "should destroy compete" do
    assert_difference('Compete.count', -1) do
      delete compete_url(@compete)
    end

    assert_redirected_to competes_url
  end
end
