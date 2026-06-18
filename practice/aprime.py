import math

def is_prime(number):
    if number <= 1:
        return False
    limit = int(math.sqrt(number)) + 1
    for i in range(2, limit):
        if (number % i) == 0:
            return False
        
    return True

def generate_first_n_primes(X):
    """Generates a list containing the first X prime numbers."""
    if X <= 0:
        return []
    primes = []
    number = 2
    while len(primes) < X:
        if is_prime(number):
            primes.append(number)
        number += 1
    return primes

# Example usage:
X = 10 
first_X_primes = generate_first_n_primes(X)
print(f"The first {X} prime numbers are: {first_X_primes}")