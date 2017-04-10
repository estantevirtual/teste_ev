class CompetesController < ApplicationController
  before_action :set_compete, only: [:show, :update, :destroy]

  # GET /competes
  # GET /competes.json
  def index
    @competes = Compete.all
  end

  # GET /competes/1
  # GET /competes/1.json
  def show
  end

  # POST /competes
  # POST /competes.json
  def create
    respond_to do |format|
      attempts = Compete.where(event_id:compete_params['event_id'], sportsman_id:compete_params['sportsman_id']).to_a.count
      event = Event.find(compete_params['event_id'])
      if (attempts + 1)> event.attempts
        format.json { render json: {errors: 'this sportsman has ran out of attempts'}, status: :bad_request }
      elsif event.begin_dt > DateTime.now
        format.json { render json: {errors: 'this event has not began yet'}, status: :bad_request }
      elsif event.ended
        format.json { render json: {errors: 'this event has already ended'}, status: :bad_request }
      else
        @compete = Compete.new(compete_params)
        if @compete.save
          format.json { render :show, status: :created, location: @compete }
        else
          format.json { render json: @compete.errors, status: :unprocessable_entity }
        end
      end

    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_compete
      @compete = Compete.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def compete_params
      params.require(:compete).permit(:score, :sportsman_id, :event_id)
    end
end
