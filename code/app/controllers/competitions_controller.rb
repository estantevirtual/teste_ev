class CompetitionsController < ApplicationController
  def create
    competition = Competition.new(competition_params)
    if competition.save
      render json: { message: 'competition sucefully created',
                     competition: CompetitionSerializer.new(competition) },
             status: :ok
    else
      render_error_response_to(competition)
    end
  end

  def finish
    competition = Competition.find(params[:competition_id])
    if competition
      competition.finish
      render json: { message: 'competition sucefully finished',
                     competition: CompetitionSerializer.new(competition) },
             status: :ok
    else
      render json: { message: 'competition not found' }, status: :not_found
    end
  end

  def ranking
    competition = Competition.find(params[:competition_id])
    if competition
      render json: { message: "ranking results for #{competition.name}",
                     competition: CompetitionSerializer.new(competition),
                     ranking: competition.ranking.map { |r| ResultSerializer.new(r) } },
             status: :ok
    else
      render json: { message: 'competition not found' }, status: :not_found
    end
  end

  private

  def competition_params
    params.require(:competition).permit(:name, :modality_id, :starts_at)
  end
end
