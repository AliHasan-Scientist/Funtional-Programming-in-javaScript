document.getElementById('head').innerText = "Function In js & fun Constructor"
console.log('console Testing.....');
function add(v1, v2) {
    let add = v1 + v2;
    return add
}
let fun = add(2, 3)
console.log(fun);
//Function Constructor in Javascript
const myFuction = new Function('a', 'b', "return a+b");
console.log(myFuction(3, 3))
//Funtion Avoid Using new keyword
const avoidNew = function (params) {
    console.log(`${params}`)
    document.getElementById('avoid').innerHTML = `${params}`

}
console.log(avoidNew("You can be Avoid new key word in Function Constructor method..."))
