var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  
cost() {
    let price = 0;
    for (let keys in this) {
      if (typeof this[keys] !== "function") {
        price += parseInt(this[keys]);
        continue;
      }
      }
    return price;
  },
  minPrice() {
  let prices = [];
  for (let key in this) {
  if (typeof this[key] !== "function") {
        prices.push(parseInt(this[key]));
      }
    }
    return Math.min(...prices);
  },
  maxPrice() {
    let prices = [];
    for (let key in this) {
    if (typeof this[key] !== "function") {
        prices.push(parseInt(this[key]));
      }
    }
    return Math.max(...prices);
  },
}; 
services["Розбити скло"] = "200 грн";

console.log(services.cost());
console.log(services.minPrice());
console.log(services.maxPrice());
