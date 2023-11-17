var product = {
    name: "dress",
    color: "blue",
    weight: 220,
    price: 500,
    currency: "UAH",
    getInfo (){
for (let key in this) {
if (typeof this[key] !== "function"){
    console.log(key + ":" + this[key]);
}
}
}
};
product.getInfo();
product.unit = "g",
product.getInfo();


