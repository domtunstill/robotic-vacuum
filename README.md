# Robotic-vacuum

Robotic-vacuum is a Javascript library that allows a user to provide input instructions for a robotic cleaner which include room size, cleaner start-point, locations of dirt patches and movement instructions. The library uses this and returns information on how many dirt patches have been cleaned up as well as the final location of the hoover.

## Specification

### Requirements

Output should return:
* The final hoover position (X,Y).
* The number of patches of dirt the robot cleaned up.

Additional requirements:
* The programme shall output the data to output.txt file.
* The programme should retrieve a file that is remotely hosted (not done).

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

Secondar

### Testing Criteria

| Criteria      | Input         | Output|
| ------------- |:-------------:| -----:|
| Formatter takes the input file and formats to an array | "5 4 " | ["5 4 "]|
| Formatter takes the input file and formats to an array | "5 4 \n1 2 " | ["5 4 ","1 2 "]|
| Formatter takes the input file and formats to an array | "5 4 \n1 2 \nNNESEESWNWW" | ['5 4 ', '1 2 ', 'NNESEESWNWW']|
| Formatter converts dimension string into integer array | "5 4 " | room dimensions set [5,4] |
| Formatter converts co-ordinate string into integer array | "1 2 " | start position set [1,2] |
| Formatter converts integer array into co-ordinate string | [1,2] | return "1 2 " |
| Room gets dirt patch string array from original data | ['5 4 ', '1 2 ', '1 0 ', '2 2 ', '2 3 ', 'NNESEESWNWW'] | [ '1 0 ', '2 2 ', '2 3 ' ] |
| Vacuum moves 1 north | [1, 2], 'N' | returns position [1,3] |
| Vacuum moves 1 east | [1, 2], 'E' | returns position [2,2] |
| Vacuum moves 1 south | [1, 2], 'S' | returns position [1,1] |
| Vacuum moves 1 west | [1, 2], 'W' | returns position [0,2] |
| Vacuum can't move 1 north, if at edge of room | [1, 4], 'N', [5, 5] | returns position [1,4] |
| Vacuum can't move 1 south, if at edge of room | [1, 0], 'S', [5, 5] | returns position [1,0] |
| Vacuum can't move 1 east, if at edge of room | [4, 1], 'E', [5, 5] | returns position [4,1] |
| Vacuum can't move 1 west, if at edge of room | [0, 1], 'W', [5, 5] | returns position [0,1] |
| Vacuum returns it's last position | ['2 4 ', '1 4 ', '1 3 '] | returns position '1 3 ' |
| CleaningReport returns a formatted string as a report | '1 3 ', 1 | returns '1 3 \n1'|
| CleaningReport prints the formatted report string| '1 3 ', 1 | console.log('1 3 \n1')|
| Job takes the driving instructions and generates a location history | [1, 2] 'NNE' | ['1 2 ', '1 3 ', '1 4 ', '2 4 ']|
| Job calculates the number of first patches cleaned, based on the instructions: [1, 2], 'NNESEESWNWW' | ['1 2 ', '1 3 ', '1 4 '] | toEqual(3) |

### Edge Cases

- User provides an input.txt with invalid data i.e. no driving instructions or only 2 sets of co-ordinates (this is not tested for but identified as an edge case)

## Approach and Code Structure

### Approach

* First step was to add the first few testing criteria above. I tried to think of the simplest place to start and this seemed to be taking the input and formatting it.
* Initially I started with a single 'Room' class and worked through the criteria.
* After each passing test, I refactored and made new criteria for new features.
* After all the methods were fully working and meeting the testing criteria I looked as ways to improve the code.
* I decided to refactor into several classes and modules to give a better structure to the programme,

### Structure

The code is split into 2 main classes plus 3 modules.

Job Class

* This is the main class and is the 'manager class' for each 'job' carried out by the vacuum cleaner.
* It keeps a history of the vacuum cleaner's moves as well as the number of dirt patches cleaned.

Room Class

* Has information about the size of the room and the number of dirt patches in the room.

Vacuum Module

* Can update the vacuum's position given a direct
* Returns it's final position

CleaningReport Module

* This produces a reports from the information within Job class regarding number of patches cleaned and final position of the vacuum.

Formatter Module

* This manipulates the data, both inbound and outbound to be of the correct format.

Index

* Reads the data file and passes it to the Job class. The index.js file allows the app to be executed from the command line in one command.

### Additional Work (if I had more time)

* The app is not setup to retrieve a file hosted remotely, this feature would need to be added. This would be the next feature to add.
* The app is not fully tested against the edge cases talked about above, these would need to have tests written for them and then amend the code to suit. 

## App 

Node version '12.11.1'


### Testing and Code Quality

Test Coverage is Above >95%

Framework - Jasmine 

Linter - ESLint

Test Coverage Analyser - Istanbul 

## Installation

Clone the directory and run the following command in the project directory:

```
$ npm install
```

## Usage

With index.txt within in the root of the directory, run the following command in the project directory:

```
$ npm start
```

### App Screenshot

![App Usage](/images/AppUsageScreenshot.png)

This will produce an output.txt file with the final hoover position (X, Y) and he number of patches of dirt the robot cleaned up. This information will also be logged to the console.

Run the following command in the project directory to run the tests:

```
$ npm test
```
 (ESLint will run automatically before commencing with the testing)

## License
[MIT](domtunstill)