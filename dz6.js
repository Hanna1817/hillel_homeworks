var arr = [ 
    { 
        userName:"Test", 
        lastName:"Test", 
        email:"test.test@gmail.com" 
    }, 
    { 
        userName:"Dmitro", 
        lastName:"Porohov", 
        email:"dmitro.porohov@yahoo.com" 
    }, 
    { 
        userName:"Andrii", 
        lastName:"", 
        email:"andrii@mail.ru" // Нам такі не підходять 
    }, 
]; 
 
var re =/(\w+\.\w+):?(@gmail.com)|(@yahoo.com)/; 
var filteredArr = [];

arr.forEach(function(item) {
  if (re.test(item.email)) {
      filteredArr.push(item.email);
  }
});

console.log(filteredArr);

var str = 'asdertmkjhggaaaaGgggAAhhjjkk54488';
var re1 = /[^aA]{6}/;
var res = str.match(re1);
console.log(res);