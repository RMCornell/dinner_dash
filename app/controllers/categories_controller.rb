class CategoriesController < ApplicationController
  skip_before_action :require_user, only: [:show]

  def show
    @category = Category.find(params[:id])
  end
end
