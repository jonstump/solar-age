# Solar Age

### By Jon Stump
<img align="center" src="https://avatars2.githubusercontent.com/u/59323850?s=460&u=372c7d529b7379408ae54491ab3449b6e2f4d94d&v=4">

## Technologies Used
* Javascript
* jQuery
* Bootstrap
* NPM
* Jest
* webpack
* C8H10N4O2

## Description
* _Solar Age_  
* This project is for showing TDD work on calculating a user's age using different planets in the solar system. It does not have a front end.
*Note on Gender: Since I am unable to find life expectancy calculators that include genders past male and female I decided to make my gender "birth gender" for the sake of purposes to attempt to be more inclusive. If I could do a calculation that allowed for more options I would do so.

## Specs / Tests

Human Constructor Specs:
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| a human's age is recorded | 25 | 25 |
| a human's birth gender is recorded | "female" | "female" |
| a human's age is calculated for Mercury | 25 | 104 |
| a human's age is calculated for Venus | 25 | 40 |
| a human's age is calculated for Mars | 25 | 13 |
| a human's age is calculated for Jupiter | 25 | 2 |

Life Expectancy on Earth Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Should correctly output female life expectancy on Earth for age under 65 | 25 & "female" | 82 |
| Should correctly output male life expectancy on Earth for age under 65 | 25 & "male" | 76 |
| Should correctly output female life expectancy on Earth for age over 65 | 25 & "female" | 21 |
| Should correctly output male life expectancy on Earth for age over 65 | 25 & "male" | 18 |
| Should correctly output life expectancy on Mercury | 25 & "female" | 342 |
| Should correctly output life expectancy on Venus | 25 & "female" | 132 |
| Should correctly output life expectancy on Mars | 25 & "female" | 44 |
| Should correctly output life expectancy on Jupiter | 25 & "female" | 7 |

Interstellar Life Left Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Should correctly calculate how much life a person has left on Earth | 25 & "female" | 57 |
| Should correctly calculate how much life a person has left on Mercury | 25 & "female" | 238 |
| Should correctly calculate how much life a person has left on Venus | 25 & "female" | 92 |
| Should correctly calculate how much life a person has left on Mars | 25 & "female" | 31 |
| Should correctly calculate how much life a person has left on Jupiter | 25 & "female" | 5 |
| Should check if a person has lived pas life expectancy | 100 & "female" | true |
| Should correctly calculate how much life a person has lived past their life expectancy on Earth | 100 & "female" | 14 |
| Should correctly calculate how much life a person has lived past their life expectancy Mercury | 100 & "female" | 59 |
| Should correctly calculate how much life a person has lived past their life expectancy Venus | 100 & "female" | 22 |
| Should correctly calculate how much life a person has lived past their life expectancy Mars | 100 & "female" | 7 |
| Should correctly calculate how much life a person has lived past their life expectancy Jupiter | 100 & "female" | 1 |


## Setup/installation Requirements

* Copy the following link to your clipboard: https://github.com/jonstump/solar-age
* Open a Bash Terminal
* In your terminal window, navigate to a directory that you would like to clone the repository to
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```bash
$ git clone https://github.com/jonstump/solar-age
```
* Once the project is cloned navigate to the cloned directory and run ```npm install``` to install all relevant modules.
* After running ```npm install``` you will want to run ```npm run build``` to build the project.
* Once the project has been built you can run tests against it with ```npm test```
* Now you should be able to open the project in your text editor and look at its functionality.


## Bugs
* No front end (this project was not required to have one.)

## Further Exploration 
*Build Front end

## Sources
* [Epicodus](https://www.epicodus.com/)
* [Bootstrap Docs](https://getbootstrap.com/)
* [stack overflow](https://stackoverflow.com/)
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [Planet age calc](https://theplanets.org/age-on-planets/)
* [Avg life expectancy](https://www.simplyinsurance.com/average-us-life-expectancy-statistics/#section-3)

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Jon Stump &copy; 2021

## Contact
Jon Stump jmstump@gmail.com