'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// lab 7

// render top row HOURS
function renderTopRow() {
  let topTable = document.querySelector('table');
  let topHead = document.createElement('thead');
  let topTr = document.createElement('tr');
  let topThE = document.createElement('th');
  topThE.textContent = '';
  topTable.appendChild(topHead);
  topHead.appendChild(topTr);
  topTr.appendChild(topThE);
  for (let i = 0; i < hours.length; i++) {
    let topTh = document.createElement('th');
    topTh.textContent = hours[i];
    topTable.appendChild(topHead);
    topHead.appendChild(topTr);
    topTr.appendChild(topTh);
  }
  let topTh = document.createElement('th');
  topTh.textContent = 'Daily Location Total';
  topTable.appendChild(topHead);
  topHead.appendChild(topTr);
  topTr.appendChild(topTh);
}

renderTopRow();

// create constructor
function Store(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.rngCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.rngSale = function () {
    return Math.round((this.avgSale * this.rngCust()));
  };
  this.salesNoByHrAr = [];
  this.calSalesNo = function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  };
  this.totalSale = function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  };
}


Store.prototype.render = function () {
  this.calSalesNo();
  let selectTable = document.querySelector('table');
  let newHead = document.createElement('tbody');
  let newTr = document.createElement('tr');
  let newTdName = document.createElement('td');
  newTdName.textContent = this.location;
  newTr.appendChild(newTdName);
  selectTable.appendChild(newHead);
  newHead.appendChild(newTr);
  for (let i = 0; i < this.salesNoByHrAr.length; i++) {
    let newTd = document.createElement('td');
    newTd.textContent = this.salesNoByHrAr[i];
    newTr.appendChild(newTd);
    selectTable.appendChild(newHead);
    newHead.appendChild(newTr);
  }
  let newTd = document.createElement('td');
  newTd.textContent = this.totalSale();
  newTr.appendChild(newTd);
  selectTable.appendChild(newHead);
  newHead.appendChild(newTr);
};

//create new store and test it
let seattle = new Store('Seattle', 23, 65, 6.3);
console.log(seattle);
// seattle.calSalesNo();
console.log(seattle.salesNoByHrAr);
//render seattle
seattle.render();

// other stores:
let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.render();

let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new Store('Paris', 20, 38, 2.3);
paris.render();

let lima = new Store('Lima', 2, 16, 4.6);
lima.render();

// create store list
let storeList = [seattle, tokyo, dubai,paris,lima];

// 1st col ans
let totalSalesByHr = [];


// render bottom row 
function renderBottomRow() {
  //count total sales
  let totalFinalSales = 0;
  for (let m =0; m <storeList.length; m++){
    totalFinalSales += storeList[m].totalSale();
  }
  console.log(totalFinalSales);

  for(let j = 0; j < hours.length ; j++){
    let totalHr = 0;
    // count straight
    for (let k = 0;k < storeList.length;k++){
      totalHr += storeList[k].salesNoByHrAr[j];
    }
    totalSalesByHr.push(totalHr); //update the total for each no with an array `totalSalesByHr`
    console.log(totalHr);
  }
  // creating table
  let topTable = document.querySelector('table');
  let bottomFoot = document.createElement('tfoot');
  let bottomTr = document.createElement('tr');
  let bottomTd = document.createElement('td');
  bottomTd.textContent = 'Totals';
  topTable.appendChild(bottomFoot);
  bottomFoot.appendChild(bottomTr);
  bottomTr.appendChild(bottomTd);
  for (let i = 0; i < hours.length; i++) {
    let topTh = document.createElement('td');
    topTh.textContent = totalSalesByHr[i];
    topTable.appendChild(bottomFoot);
    bottomFoot.appendChild(bottomTr);
    bottomTr.appendChild(topTh);
  }
  let topTh = document.createElement('td');
  topTh.textContent = totalFinalSales;
  topTable.appendChild(bottomFoot);
  bottomFoot.appendChild(bottomTr);
  bottomTr.appendChild(topTh);
}

renderBottomRow();
