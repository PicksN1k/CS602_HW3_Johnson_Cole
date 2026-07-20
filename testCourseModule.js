import * as courseDB from './courseModule.js';

let result;

result = await courseDB.lookupByCourseId("CS %77");
console.log(result);

result = await courseDB.lookupByCourseName("%Python%");
console.log(result);

result = await courseDB.lookupByCoordinator('kalathur');
console.log(result);

result = await courseDB.getRandomCourse();
console.log(result);

result = await courseDB.getCourseDescription('632');
console.log(result);

// Write One additional test case for each of the above.
// Make sure lookupByCourseId and lookupByCourseName provide more than one match.

// Additional Test Cases

// More than one match
result = await courseDB.lookupByCourseId("CS 6%");
console.log(result);

// More than one match
result = await courseDB.lookupByCourseName("%Data%");
console.log(result);

// Different coordinator
result = await courseDB.lookupByCoordinator('epinsky');
console.log(result);

// Another random course
result = await courseDB.getRandomCourse();
console.log(result);

// Different course description
result = await courseDB.getCourseDescription('602');
console.log(result);