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
| Takes the input file and formated to an array | "5 4 " | ["5 4 "]|
| Takes the input file and formated to an array | "5 4 \n1 2 " | ["5 4 ","1 2 "]|
| Takes the input file and formated to an array | "5 4 \n1 2 \nNNESEESWNWW" | ['5 4 ', '1 2 ', 'NNESEESWNWW']|
| Takes the first line as room co-ordinates | "5 4 " | roomDimensions set [5,4] |


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

Test Coverage Analyser - Istanbul

## Installation

Run the following command in the project directory:



## Usage



### App Screenshot



## Contributing


## License
[MIT](domtunstill)