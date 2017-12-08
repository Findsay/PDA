require("minitest/autorun")
require("minitest/rg")

require_relative ("testing_task_2")

class Test < MiniTest::Test

def test_func1()
  assert_equal(false, func1(3))
end

def test_max()
  assert_equal(10, max(10, 5))
end

def test_looper()
  assert_equal(10, looper)
end



end
