def multiply_with_addition(a, b):
    # Base case: if either number is zero, the result is zero
    if a == 0 or b == 0:
        return 0
        
    # Determine the sign of the result
    # The sign will be negative if one is positive and the other is negative
    is_negative = (a < 0) != (b < 0)
    
    # Work with positive values for the loop
    abs_a = abs(a)
    abs_b = abs(b)
    
    result = 0
    # Add abs_a to itself abs_b times
    for _ in range(abs_b):
        result += abs_a
        
    # Apply the correct sign to the result
    if is_negative:
        return -result
    else:
        return result