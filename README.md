# Robotic-vacuum

Robotic-vacumm is a Javascript library that allows a user to provide input instructions for a robotic cleaner which include room size, cleaner start-point, locations of dirt patches and movement instructions. The library uses this and returns information on how many dirt patches have been cleaned up as well as the final location of the hoover.

## Specification

### Requirements

Output should return:
* The final hoover position (X,Y).
* The number of patches of dirt the robot cleaned up.

### Acceptance Criteria

Example input (input.txt):
```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

Would give then following output:

```
1 3
1
```

### Testing Criteria

| Criteria      | Input         | Output|
| ------------- |:-------------:| -----:|
| Account balance to be 0 on initializaton   | none | Balance to be 0 |
| Account initilizes with an empty history of transactions  | none | Transactions to be empty |
| Prints empty statement at start | none |date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance|
| Balance updated: Customer deposits 1000 | 1000 |Balance to be 1000|
| Transaction saved: Customer deposits 1000 | 1000 | 1 transaction to be stored in transactions|
| Transaction amount saved: Customer deposits 1000 | 1000 | 1000 to be returned |
| Post transaction balance is saved: Customer deposits 1000 | 1000 | 1000 to be returned |
| Transaction date saved: Customer deposits 1000 | 1000 | 10/01/2012 |
| Print statement after customer deposits 1000 on 10-01-2012 | 1000 | 10/01/2012 &#124;&#124; 1000.00 &#124;&#124; &#124;&#124; 1000.00|
| Balance updated: Customer withdraws 500 (with balance of 1000) | 500 |Balance to be 500|
| Customer can't withdraw if withdrawal is more than balance | 500 |Balance to be 0|
| Transaction saved: Customer withdraws 500 | 500 | 2 transaction to be stored in transactions|
| Transaction amount saved: Customer withdraws 500 | 500 | 500 to be returned |
| Post transaction balance is saved: Customer withdraws 500 (with balance of 1000) | 500 | 500 to be returned |
| Transaction date saved: Customer withdraws 500 | 500 | 14/01/2012 |
| Print statement after customer withdraws 500 on 14-01-2012 | 500 | 14/01/2012 &#124;&#124; 500.00 &#124;&#124; &#124;&#124; 500.00|

### Edge Cases

- 

## Approach and Code Structure

### Approach

* 

### Structure



## App 

Javascript version ''
Node version ''

### Testing and Code Quality

Framework - Jasmine 

Linter - 

Test Coverage Analyser - Simplecov

## Installation

Run the following command in the project directory:



## Usage



### App Screenshot



## Contributing


## License
[MIT](domtunstill)