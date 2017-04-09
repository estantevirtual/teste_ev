require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:rio_metros_rasos)
  end

  test "should get index" do
    get events_url
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count', 1) do
      post events_url, params: { event: { attempts: "3", begin_dt: "2017-04-08T22:30:45.846Z", location: "Rio de Janeiro", name: "Teste" , category_id: "1"} }
    end
  end

  test "should show event" do
    get event_url(@event)
    assert_response :success
  end

  test "should update event" do
    put event_url(@event), params: { event: { attempts: @event.attempts, begin_dt: "2017-04-08T22:30:45.846Z", location: @event.location, name: "Teste_result" } }
    category = JSON.parse(@response.body)
    assert category['name'] == "Teste_result"
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete event_url(@event)
    end
  end
end
