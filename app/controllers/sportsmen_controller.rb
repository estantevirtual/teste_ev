class SportsmenController < ApplicationController
  before_action :set_sportsman, only: [:show, :update, :destroy]

  # GET /sportsmen
  # GET /sportsmen.json
  def index
    @sportsmen = Sportsman.all
  end

  # GET /sportsmen/1
  # GET /sportsmen/1.json
  def show
  end

  # POST /sportsmen
  # POST /sportsmen.json
  def create
    @sportsman = Sportsman.new(sportsman_params)

    respond_to do |format|
      if @sportsman.save
        format.json { render :show, status: :created, location: @sportsman }
      else
        format.json { render json: @sportsman.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sportsmen/1
  # PATCH/PUT /sportsmen/1.json
  def update
    respond_to do |format|
      if @sportsman.update(sportsman_params)
        format.json { render :show, status: :ok, location: @sportsman }
      else
        format.json { render json: @sportsman.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sportsmen/1
  # DELETE /sportsmen/1.json
  def destroy
    @sportsman.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sportsman
      @sportsman = Sportsman.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sportsman_params
      params.require(:sportsman).permit(:name, :age)
    end
end
