class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user).paginate(page: params[:page], per_page: 6).order('created_at DESC')
    @post = Post.new
  end

  def create
    post = Post.new(post_params)
    if post.save
      redirect_to posts_path(anchor: 'post_all')
    else
      @posts = Post.all.paginate(page: params[:page], per_page: 6).order('created_at DESC')
      render :index
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to root_path
    else
      @posts = Post.all.paginate(page: params[:page], per_page: 6).order('created_at DESC')
      render :index
    end
  end

  def new_guest
    user = User.find_or_create_by!(email: 'peko@pigu') do |user|
      user.password = 'ht0000'
      # user.confirmed_at = Time.now  # Confirmable を使用している場合は必要
    end
    sign_in user
    redirect_to root_path, notice: 'ゲストユーザーとしてログインしました。'
  end

  def show
    
  end

  private

  def post_params
    params.require(:post).permit(:text).merge(user_id: current_user.id)
  end
end
