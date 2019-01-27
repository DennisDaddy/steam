class StaticPagesController < ApplicationController
  def home
    @movies = Movie.paginate(page: params[:page])
  end
end
