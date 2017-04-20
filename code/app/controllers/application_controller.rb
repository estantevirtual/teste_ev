class ApplicationController < ActionController::API
  rescue_from ActionController::ParameterMissing, with: :render_bad_request_response

  def render_error_response_to(record)
    render json: {  message: 'Validation Failed',
                    errors: ErrorsSerializer.new(record).serialize },
           status: :unprocessable_entity
  end

  def render_bad_request_response
    render json: {  message: 'Bad Request',
                    code: 'bad_request' }, status: :bad_request
  end
end
