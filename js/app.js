'use strict';

let hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ']; //set hours array
//each object will generate sales data and provide outputon sales.html

//Seattle

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesByHourArray: [],
  dailyTotal: 0,
  randomNumberOfCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomNumberOfCustomers();
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },
  render: function () {
    this.cookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
}

seattle.render();
