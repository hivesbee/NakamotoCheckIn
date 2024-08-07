class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  # GET /users
  def index
    if params[:email]
      user = User.where(email: params[:email]).take
      p user
      render json: user, status: :ok
      return
    end

    users = User.all

    render json: users
  end

  # GET /users/1
  def show
    @user = User.find(params[:email])
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_create_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.fetch(:user, {})
  end

  def user_create_params
    params.require(:user).permit(:email, :name)
  end
end
