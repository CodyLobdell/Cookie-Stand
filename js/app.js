'use strict';

// Object array for stores

let storeNames = [];
let hourlyTotal = [];

// Cities

let Seattle = new City('Seattle', 23, 65, 6.3);
let Tokyo = new City('Tokyo', 3, 24, 1.2);
let Dubai = new City('Dubai', 11, 38, 3.7);
let Paris = new City('Paris', 20, 38, 2.3);
let Lima = new City('Lima', 2, 16, 4.6);

// push cities to array

storeNames.push(Seattle, Tokyo, Dubai, Paris, Lima);

// Hours that stores are open

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// DOM for cities and tbody

let cities = document.getElementById('cities');


let cityTableHead = document.querySelector('thead');
let cityTableBody = document.querySelector('tbody');
let cityTableFoot = document.querySelector('tfoot');

// Primary customer data function

function randomCustomer(min, max) {
  return Math.floor((Math.random() * (max - min + 1) + min));
}

function renderAll() {
  for (let i = 0; i < storeNames.length; i++) {
    storeNames[i].getCookiesSold();
    storeNames[i].render();
  }
}

function tableHeader() {
  let row1 = document.createElement('tr');
  cityTableHead.appendChild(row1);
  let cityHeader = document.createElement('th');
  cityHeader.innerText = 'City Name';
  row1.appendChild(cityHeader);
  for (let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.innerText = hours[i];
    row1.appendChild(thElem);
  }
  let totalLocation = document.createElement('th');
  totalLocation.innerText = 'Daily Location Totals';
  row1.appendChild(totalLocation);

}

function tableFooter() {
  let footer = document.createElement('tr');
  footer.innerText = 'Totals per Hour';
  footer.id = 'tableFooter';
  cityTableFoot.appendChild(footer);
  for (let i = 0; i < hourlyTotal.length; i++) {
    let thElem = document.createElement('th');
    thElem.innerText = hourlyTotal[i];
    footer.appendChild(thElem);
  }
  let grandTotal = 0;
  for (let i = 0; i < hourlyTotal.length; i++) {
    grandTotal = hourlyTotal[i] + grandTotal;
  }
  let thElem = document.createElement('th');
  thElem.innerText = 'Grand Total is: ' + grandTotal;
  footer.appendChild(thElem);
}

function totalPerHour(randomNumber, i) {
  hourlyTotal[i] += randomNumber;
}
//Constuctor Function

function City(name, minimumCus, maximumCus, aveCookie) {

  this.name = name;
  this.minimumCus = minimumCus;
  this.maximumCus = maximumCus;
  this.aveCookie = aveCookie;
  this.cookiesSold = [];
}

// Object Literal

City.prototype.getCookiesSold = function () {
  let totalCookies = 0;
  let ranNum = 0;
  for (let i = 0; i < hours.length; i++) {
    ranNum = Math.floor(randomCustomer(this.minimumCus, this.maximumCus) * this.aveCookie);
    this.cookiesSold.push(ranNum);
    totalCookies = ranNum + totalCookies;
    totalPerHour(ranNum, i);

    if (i === hours.length - 1) {
      this.cookiesSold.push(`Total: ${totalCookies}`);
    }
  }
};

//Prototype Method

City.prototype.render = function () {
  let row2 = document.createElement('tr');
  cityTableBody.appendChild(row2);
  let cityName = document.createElement('td');
  cityName.innerText = this.name;
  row2.appendChild(cityName);

  for (let i = 0; i < this.cookiesSold.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.innerText = this.cookiesSold[i];
    row2.appendChild(tdElement);
  }
};

tableHeader();
hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
renderAll();
tableFooter();
