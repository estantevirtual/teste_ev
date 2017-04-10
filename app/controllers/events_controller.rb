class EventsController < ApplicationController
  before_action :set_event, only: [:show, :end, :update, :destroy, :ranking]

  # GET /events
  # GET /events.json
  def index
    @events = Event.all
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.json { render :show, status: :created, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.json { render :show, status: :ok, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  # POST /events/1/end
  def end
    @event.update({ended:true})
  end

  # GET /events/1
  def ranking
    respond_to do |format|
      ordering = :asc
      if Category.find(@event.category_id).score_type == 'highest'
        ordering = :desc
      end
      @competes = Compete.where(event_id: params[:id]).group(:sportsman_id).order(score: ordering).limit(params[:position])
      format.json { render json: @competes, status: :ok}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:location, :name, :attempts, :category_id, :begin_dt, :ended)
    end
end
