'use strict';

let hours = ['6AM: ', '7AM: ', '8AM: ', '9AM: ', '10AM ', '11AM: ', '12PM: ', '1PM: ', '2PM: ', '3PM: ', '4PM: ', '5PM: ', '6PM: ', '7PM: '];

//-create store object.
//-create separate JS object literal. 

let seattleStore = {
  location: 'Seattle',
  min: 23,
  maxCust: 65,
  avg: 6.3,
  randomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  randomSale: function () {
    return Math.round((this.avg * this.randomCust()));
  },

  //-for each hour at each location
  //-using average cookies purchased
  //-and random number of customers generated.

  salesByHour: [],
  salesNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesByHourAr.push(
        this.randomSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesByHour.length; k++) {
      // console.log(this.salesByHourAr[k]);
      total += this.salesByHourAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(seattleStore.salesNumber());
console.log(seattleStore.salesByHourAr);
console.log(seattleStore.randomCust());
console.log(` ${seattleStore.randomSale()} is randomSale`);
console.log(`total sales ${seattleStore.totalSale()}`);

let newDiv = document.getElementById('div'); //located the div on html, so Store name can be listed under
// let newBody = document.body;
// console.log(newBody);
let seattleP = document.createElement('p'); //created h2 for store name
seattleP.textContent = seattleStore.location; //pull the store name from obj
newDiv.appendChild(seattleP); //add store nme under div

// let newLi = document.getElementById('li');

// print list
for (let j = 0; j < hours.length; j++) {
  let seattleLi = document.createElement('li');
  seattleLi.textContent = `${hours[j]}: ${seattleStore.salesByHourAr[j]} cookies`;
  seattleP.appendChild(seattleLi);
}

let seattleLiTotal = document.createElement('li');
seattleLiTotal.textContent = `Total: ${seattleStore.totalSale()} cookies`;
seattleP.appendChild(seattleLiTotal);
