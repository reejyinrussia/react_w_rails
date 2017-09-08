class Api::ItemsController < ApplicationController
  before_action :get_item, only: [:update, :destory]
  def index
    render json: Item.all
  end

  def create
    # not an instance variable in this case
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render_error(item)
    end
  end

  def update
    if @item.update(complete: !@item.complete)
      render json: @item
    else
      render_error(@item)
    end
  end

  def destroy
    @item.destroy
  end

  private
    def item_params
      params.require(:item).permit(:name, :complete)
    end
    def set_item
      @item = Item.find(params[:id])
    end
    def render_error(item)
      errors = item.errors.full_messages.join(", ")
      render json: { errors: errors }, status: 418
    end
end
