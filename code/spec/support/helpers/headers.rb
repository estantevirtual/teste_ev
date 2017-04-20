module Helpers
  def headers
    { 'Content-Type' => 'application/json', 'Accept' => 'application/json' }
  end
end

RSpec.configure do |c|
  c.include Helpers
end
