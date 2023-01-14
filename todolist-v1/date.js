
exports.getDate = function() {

let today = new Date();

let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
console.log(today.toLocaleDateString("en-US", options));
return today.toLocaleDateString("en-US", options);
}