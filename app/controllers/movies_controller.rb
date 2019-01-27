class MoviesController < ApplicationController
  before_action :logged_in_user, only: [:new, :create,:edit, :update, :destroy]
  before_action :correct_user, only: [:edit, :update, :destroy]

  def index
    @movies = Movie.paginate(page: params[:page])
  end

  def new
    @movie = Movie.new
  end

  def show
    @movie = Movie.find(params[:id])     
  end

  def create
    @movie = current_user.movies.build(movie_params)
    if @movie.save
    flash[:success] = "Successfully created!"
    redirect_to movies_url
    else
      flash[:danger] = "Not created fill all the fields!"
    redirect_to request.referrer || root_url
    end
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.update_attributes(movie_params)
    flash[:success] = "Successfully updated!"
    redirect_to @movie
    else
    render 'edit'
    end
  end

  def destroy
    @movie.destroy
      flash[:success] = "Movie deleted"
    redirect_to @movie
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :content, :category_id)
  end

  def correct_user
    @movie = current_user.movies.find_by(id: params[:id])
    redirect_to root_url if @movie.nil?
  end
end
