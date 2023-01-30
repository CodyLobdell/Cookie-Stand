'use strict';

let cities = document.getElementById('cities');

let hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', ];

const seattleStore = {
  location: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgCookiesPerCust: 6.3,
  cookiesPerHour: [],

  getRandomCustomersPerHour: function () {
    return Math.floor((Math.random()*(this.maxCust - this.minCust + 1)+this.minCust));
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hour.length; i++) {
      let customers = this.getRandomCustomersPerHour();
      let cookies = Math.ceil(customers * this.avgCookiesPerCust);
      this.cookiesPerHour.push(`${hour[i]} ${cookies} cookies.`);
    }
  },

  cookieCity: function(){
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHead = document.createElement('h3');
    cityHead.textContent = `${this.location}`;
    citySection.appendChild(cityHead);

    let cPH = document.createElement('ul');
    citySection.appendChild(cPH);

    for (let i =0; i < this.cookiesPerHour.length; i++){
      let li = document.createElement('li');
      li.textContent = `${this.cookiesPerHour[i]}`;
      cPH.appendChild(li);
    }

  }
};

seattleStore.generateCookiesPerHour();
console.log(seattleStore.cookiesPerHour);
console.log(seattleStore.getRandomCustomersPerHour());
seattleStore.cookieCity();
