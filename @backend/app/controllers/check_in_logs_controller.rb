class CheckInLogsController < ApplicationController
  before_action :set_check_in_log, only: %i[ show update destroy ]

  # GET /check_in_logs
  def index
    params.inspect
    if params[:embed].nil?
      @check_in_logs = CheckInLog.all
      render json: @check_in_logs
    end

    tables = params[:embed].split(",")

    hasShop = tables.any? {|t| t == "shop"}
    userId = params[:user_id]
    if hasShop && !userId.nil?

      @check_in_logs = CheckInLog
        .where(user_id: userId)
        .left_outer_joins(:shop)
        .select(
          "check_in_logs.id, check_in_logs.checked_at, shops.id AS shop_id, shops.name AS shop_name"
        ).order("check_in_logs.checked_at DESC")
    
      render json: @check_in_logs
      return
    end

    render json: @check_in_log.errors, status: :no_content
  end

  # GET /check_in_logs/1
  def show
    render json: @check_in_log
  end

  # POST /check_in_logs
  def create
    
    @check_in_log = CheckInLog.new(check_in_log_create_params)

    if @check_in_log.save
      render json: @check_in_log, status: :created, location: @check_in_log
    else
      render json: @check_in_log.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /check_in_logs/1
  def update
    if @check_in_log.update(check_in_log_params)
      render json: @check_in_log
    else
      render json: @check_in_log.errors, status: :unprocessable_entity
    end
  end

  # DELETE /check_in_logs/1
  def destroy
    # @check_in_log.destroy!
    CheckInLog.find(params[:id]).destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_check_in_log
      @check_in_log = CheckInLog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def check_in_log_params
      params.fetch(:check_in_log, {})
    end

    def check_in_log_create_params
      params.require(:check_in_log).permit([:user_id, :shop_id]).merge(checked_at: DateTime.current)
    end

    # def check_in_log_destroy_params
    #   params.require(:check_in_log).permit(:id)
    # end
end
