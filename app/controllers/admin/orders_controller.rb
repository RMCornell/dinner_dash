class Admin::OrdersController < Admin::BaseController

  def update
    @order = Order.find(params[:id])
    if @order.update_status valid_params
      redirect_to admin_user_path(current_user), notice: "Order number #{@order.id} status updated."
    else
      redirect_to admin_user_path(current_user), alert: "Order status update failed."
    end
  end

  private

  def valid_params
    params.require(:order).permit(:status)
  end
end
