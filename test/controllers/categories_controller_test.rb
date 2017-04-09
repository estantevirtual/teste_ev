require 'test_helper'

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @category = categories(:metros_rasos)
  end

  test "should get index" do
    get categories_url
    assert_response :success
  end

  test "should create category" do
    assert_difference('Category.count', 1) do
      post categories_url, params: { category: { name: @category.name, score_type: @category.score_type, unit: @category.unit } }
    end

  end

  test "should show category" do
    get category_url(@category)
    assert_response :success
  end

  test "should update category" do
    put category_url(@category), params: { category: { name: "Teste_result", score_type: @category.score_type, unit: @category.unit } }
    category = JSON.parse(@response.body)
    assert category['name'] == "Teste_result"
  end

  test "should destroy category" do
    assert_difference('Category.count', -1) do
      delete category_url(@category)
    end
  end
end
