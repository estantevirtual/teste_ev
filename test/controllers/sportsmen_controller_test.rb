require 'test_helper'

class SportsmenControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sportsman = sportsmen(:one)
  end

  test "should get index" do
    get sportsmen_url
    assert_response :success
  end

  test "should create sportsman" do
    assert_difference('Sportsman.count', 1) do
      post sportsmen_url, params: { sportsman: { age: @sportsman.age, name: @sportsman.name } }
    end
  end

  test "should show sportsman" do
    get sportsman_url(@sportsman)
    assert_response :success
  end

  test "should update sportsman" do
    patch sportsman_url(@sportsman), params: { sportsman: { age: @sportsman.age, name: "Test_result" } }
    category = JSON.parse(@response.body)
    assert category['name'] == "Test_result"
  end

  test "should destroy sportsman" do
    assert_difference('Sportsman.count', -1) do
      delete sportsman_url(@sportsman)
    end
  end
end
