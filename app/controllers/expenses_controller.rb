class ExpensesController < ApplicationController
  before_action :set_expenses, only: [:show, :search]


  def show
   @expense = Expense.new

  end

  def create
    @expense = Expense.new(expense_params)
    
    if @expense.save
      redirect_to  "/expenses/#{current_user.id}"
    else
      render :show
    end
  end

  def destroy
    expense = Expense.find(params[:id])
   if expense.destroy
    redirect_to  "/expenses/#{current_user.id}"
   else
    render :show
   end
  end

  def search
    @expenses = current_user.expenses.search(params[:keyword]).all.order(day: "ASC")
  end

private

  def expense_params
    params.require(:expense).permit(:day, :category_id_1, :name_1, :price_1,:category_id_2, :name_2, :price_2,:category_id_3, :name_3, :price_3,:category_id_4, :name_4, :price_4,:category_id_5, :name_5, :price_5,:category_id_6, :name_6, :price_6,:category_id_7, :name_7, :price_7,:category_id_8, :name_8, :price_8,:category_id_9, :name_9, :price_9,:category_id_10, :name_10, :price_10).merge(user_id: current_user.id)
  end

  def set_expenses
    @target_amount = current_user.target_amount
    @nickname = current_user.nickname
    @expenses = current_user.expenses.paginate(page: params[:page], per_page: 7).all.order(day: "ASC")
  end

 
end
