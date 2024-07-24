function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a-b;
}

const nameofstudents = ["mahesh", "ashwini", "sneha", "shiv", "devansh"];

// module.exports=add;
// module.exports=nameofstudents;
module.exports.add = add;
module.exports.sub = sub;
