require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:rio_metros_rasos)
    @category = categories(:metros_rasos)
    @multiple_events = events(:multiple_competes)
    @highest = events(:rio_futebol)
  end

  test "should get index" do
    get events_url
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count', 1) do
      post events_url, params: { event: { attempts: @event.attempts, begin_dt: @event.begin_dt, location: @event.location, name: @event.name, category_id: @category.id } }
    end
  end

  test "should show event" do
    get event_url(@event)
    assert_response :success
  end

  test "should update event" do
    put event_url(@event), params: { event: { attempts: @event.attempts, begin_dt: @event.begin_dt, location: @event.location, name: "Test_result" } }
    event = JSON.parse(@response.body)
    assert event['name'] == "Test_result"
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete event_url(@event)
    end
  end

  test "should return ranking_filtered" do
    get "/events/#{@multiple_events.id}/ranking?position=2"
    assert_response :success
    ranking = JSON.parse(@response.body)
    assert ranking.count == 2
  end

  test "should return ranking_lowest" do
    get "/events/#{@event.id}/ranking?position=2"
    assert_response :success
  end

  test "should return ranking_hightest" do
    get "/events/#{@highest.id}/ranking?position=2"
    assert_response :success
  end


  test "should end event" do
    post "/events/#{@event.id}/end"
    assert_response :success
  end
end
