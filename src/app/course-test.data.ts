import {Course} from './course';

export const TEST_COURSES = [
  new Course(
    111,
    'Angular 2018Q2: Angular Intro RU',
    new Date(2019, 11, 5),
    73,
    'How to build your first Hello World Angular application.\n' +
    '\n' +
    'We will\n' +
    '\n' +
    ' * take a look on ng-cli.\n' +
    ' * create simple application\n' +
    ' * take a look on desired application (video courses) and discuss\n' +
    ' * review project structure'
  ),
  new Course(
    222,
    'Angular GMP 2019Q3: TypeScript Fundamentals RU',
    new Date(2019, 10, 4),
    55,
    'TypeScript is the superset of the JS language allowing to annotate types of various objects and already ' +
    'today to use possibilities of ES6 and some opportunities of ES7. Language gains popularity and moves ahead ' +
    'the Google and Microsoft companies, is used in development of frameworks of new generation, for example such as Angular 2.',
    true
  ),
  new Course(
    333,
    'Angular GMP 2019Q3: Components ENG',
    new Date(2019, 9, 3),
    37,
    'On this training, we will take a look at custom components in Angular 2, what they are, how to build components' +
    ' in Angular 2 application and pass data between them. Also, we will check components lifecycle and find out correct component’s ' +
    'lifecycle event for several common tasks you’ll face during development.'
  ),
  new Course(
    444,
    'Angular 2018Q2: Unit Testing for Angular RU',
    new Date(2019, 8, 2),
    72,
    'This training is for writing Unit tests on the Angular 2 application. During the training people ' +
    'will be receive understanding what Unit tests are, why they are needed, how to write code and Unit tests. ' +
    'The main goal of this training is to try on the practice to write tests for all Angular components.'
  ),
  new Course(
    555,
    'Angular 2018Q2: Working with Directives and Pipes RU',
    new Date(2019, 11, 1),
    88,
    'This training is about Angular 2 directives and pipes. It covers pipes purpose, ' +
    'build-in pipes usage and custom pipes creation. Participants will know about built-in directives and how to write custom directives.'
  ),
];
