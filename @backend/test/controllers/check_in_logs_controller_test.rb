require "test_helper"

class CheckInLogsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @check_in_log = check_in_logs(:one)
  end

  test "should get index" do
    get check_in_logs_url, as: :json
    assert_response :success
  end

  test "should create check_in_log" do
    assert_difference("CheckInLog.count") do
      post check_in_logs_url, params: { check_in_log: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show check_in_log" do
    get check_in_log_url(@check_in_log), as: :json
    assert_response :success
  end

  test "should update check_in_log" do
    patch check_in_log_url(@check_in_log), params: { check_in_log: {  } }, as: :json
    assert_response :success
  end

  test "should destroy check_in_log" do
    assert_difference("CheckInLog.count", -1) do
      delete check_in_log_url(@check_in_log), as: :json
    end

    assert_response :no_content
  end
end
