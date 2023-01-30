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

  randomNumberOfCustomers: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: function (){
    for (let i = 0; i < hours.length; i++){
      let customers = this.randomNumberOfCustomers();
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },

  render: function (){
    this.cookiesPerHour();
    let salesContainer = document.getElementById('seattleSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

seattle.cookiesPerHour();
console.log(seattle.dailyTotal);
console.log(seattle.randomNumberOfCustomers());
seattle.render();



//Tokyo


let tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  salesByHourArray: [],
  dailyTotal: 0,
  randomNumberOfCustomers: function (){
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  cookiesPerHour: function (){
    for (let i = 0; i < hours.length; i++){
      let customers = this.randomNumberOfCustomers();
      let cookiesSoldThisHour = Math.ceil(customers * this.avg);
      this.salesByHourArray.push(cookiesSoldThisHour);
      this.dailyTotal += cookiesSoldThisHour;
    }
  },

  render: function (){
    this.cookiesPerHour();
    let salesContainer = document.getElementById('tokyoSales');
    let ulElement = document.createElement('ul');
    salesContainer.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.salesByHourArray[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let totalLiElement = document.createElement('li');
    totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`;
    ulElement.appendChild(totalLiElement);
  }
};

tokyo.cookiesPerHour();
console.log(tokyo.dailyTotal);
console.log(tokyo.randomNumberOfCustomers());
tokyo.render();



//Dubai


let dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
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
    let salesContainer = document.getElementById('dubaiSales');
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
};

dubai.cookiesPerHour();
console.log(dubai.dailyTotal);
console.log(dubai.randomNumberOfCustomers());
dubai.render();



//Paris

let paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
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
    let salesContainer = document.getElementById('parisSales');
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
};

paris.cookiesPerHour();
console.log(paris.dailyTotal);
console.log(paris.randomNumberOfCustomers());
paris.render();


//Lima

let lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
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
    let salesContainer = document.getElementById('limaSales');
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
};

lima.cookiesPerHour();
console.log(lima.dailyTotal);
console.log(lima.randomNumberOfCustomers());
lima.render();
