class ResultsController < ApplicationController
  def create
    result = Result.new(result_params)
    if result.save
      render json: { message: 'result sucefully created',
                     result: ResultSerializer.new(result) },
             status: :ok
    else
      render_error_response_to(result)
    end
  end

  def index
    results = Result.all
    render json: results, each_serializer: ResultSerializer,
           status: :ok
  end

  private

  def result_params
    params.require(:result).permit(:competition_id, :athlete, :value)
  end
end
