### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
 // This function will not work as the parameter val needs to be passed in using brackets (val). The function will always return false as needs to use if val == 1. //
def func1 val
  if val = 1
  return true
  else
  return false
  end
end

// Mis-spelled dif, should be def. This function will not work as the parameters a & b need to be passed in using brackets and each parameter comma seperated (a, b). It will also not return anything if a >b is false as there is no return statement after the else. There will also an error due to an unexpected end, only need 2 not 3.//

dif max a b
  if a > b
      return a
  else
  b
  end
end
end

// The range 1..10 needs to be in brackets, (1..10) //

def looper
  for i in 1..10
  puts i
  end
end

//

failures = 0

//Looper won't return 10, it will return the range.  Need to end the if statement//

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

// Mis-spelled failures(failrues) variable//
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

//Need to specify a condition to evaluate against, should be if failures > 0 //
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

```
