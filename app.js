console.log('sanity check, app.js is connected!!!')

// watch YouTube videos on ES6 from BuckyRoberts then take notes and try code here:

// ES6 let vs var
// In ES6 let relates to block scoping (inside {}); if can't find variable will go to next
// level up and so forth and so forth
let movie = "Superman";

function printMovie(){
  let movie = "Batman";
  return movie;
}

console.log(movie);
console.log(printMovie());
console.log(movie);

// another ES6 let example (block inside block scoping)
function generalAssemly(){
  let findAJob = true;
  let saying = "You can do it!";
  console.log('Before if:', saying);

  if(findAJob){
    let saying = "I will land a job if I keep working at it!";
    console.log('Inside if:', saying)
  }
  console.log('After if:', saying)
}
generalAssemly();

// Arrow Functions =>

// regular JS function
function areaOfCircle1(r){
  const PI = 3.14;
  return PI * r * r
}

// arrow function
let areaOfCircle2 = (r) => {
  const PI = 3.14;
  return PI * r * r
}

// arrow function less syntax, less to write if only ONE argument/parameter and
// one variable to manipulate (compare all three ways!)
let areaOfCircle3 = r => 3.14 * r * r;

console.log(areaOfCircle1(7));
console.log(areaOfCircle2(7));
console.log(areaOfCircle3(7));
