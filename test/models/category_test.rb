require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test "should not save category without required fields" do
    category = Category.new
    assert_not category.save, "Saved the category without required fields"
  end
end
