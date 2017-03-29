class ScoresController < ApplicationController
  before_action :set_score, only: [:show, :update, :destroy]
  after_action :set_total_score, only: [:create, :update, :destroy]

  # GET posts/:post_id/scores
  def index
    @scores = Post.find(params[:post_id]).scores
    render json: @scores
  end

  # GET /scores/1
  #def show
    #render json: @score
  #end

  # POST /scores
  def create
    @score = Score.new(score_params)

    if @score.save
      render json: @score, status: :created, location: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scores/1
  def update
    if @score.update(score_params)
      render json: @score
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scores/1
  def destroy
    @score.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score
      @score = Score.find(params[:id])
    end

    def set_total_score
      @post = @score.post
      @post.update(total_score: @post.scores.average(:scored).to_f)
    end

    # Only allow a trusted parameter "white list" through.
    def score_params
      params.require(:score).permit(:post_id, :user_id, :scored)
    end

end
