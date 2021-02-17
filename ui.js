export default class UI {
  root = document.querySelector('#root');

  init() {
    const div = document.createElement('header');
    div.innerHTML = `
        <h1 class="header"><i class="fas fa-cloud-showers-heavy"></i> DANIEL<span class="lead">WEATHER</span></h1>
        <form >
            <input id="city-search" type="text" class="form-control"  placeholder="Search for a city">
            <button type="submit" class="btn">SUBMIT</button>
        </form>
        <section id="cards"></section>
        `;
    this.root.append(div);
  }

  render(data) {
    const cards = document.querySelector('#cards');
    const card = document.createElement('div');
    card.className = 'card';

    const icon = data.weather[0].icon;
    const i_name = data.weather[0].icon.slice(0, -1);
    const i_time = data.weather[0].icon.slice(-1);
    switch (i_name) {
      case '01':
        if (i_time === 'n') {
          card.style.background =
            "url('./images/clearnight.jpg')no-repeat center center/cover";
        } else {
          card.style.background =
            "url('./images/clearday.jpg')no-repeat center center/cover";
        }
        break;
      case '02':
        if (i_time === 'n') {
          card.style.background =
            "url('./images/clearnight.jpg')no-repeat center center/cover";
        } else {
          card.style.background =
            "url('./images/clearday.jpg')no-repeat center center/cover";
        }
        break;
      case '03':
        card.style.background =
          "url('./images/cloudy.jpg')no-repeat center center/cover";
        break;
      case '04':
        card.style.background =
          "url('./images/cloudy.jpg')no-repeat center center/cover";
        break;
      case '09':
        if (i_time === 'n') {
          card.style.background = `url('./images/rainynight.jpg')no-repeat center center/cover`;
        } else {
          card.style.background = `url('./images/rainyday.jpg')no-repeat center center/cover`;
        }
        break;
      case '10':
        if (i_time === 'n') {
          card.style.background = `url('./images/rainynight.jpg')no-repeat center center/cover`;
        } else {
          card.style.background = `url('./images/rainyday.jpg')no-repeat center center/cover`;
        }
        break;
      case '11':
        card.style.background = `url('./images/thunderstorm.jpg')no-repeat center center/cover`;
        break;
      case '13':
        if (i_time === 'n') {
          card.style.background = `url('./images/snownight.jpg')no-repeat center center/cover`;
        } else {
          card.style.background = `url('./images/snowday.jpg')no-repeat center center/cover`;
        }
        break;
      case '50':
        if (i_time === 'n') {
          card.style.background = `url('./images/mistnight.jpg')no-repeat center center/cover`;
        } else {
          card.style.background = `url('./images/mistday.jpg')no-repeat center center/cover`;
        }
        break;
    }

    card.innerHTML = `
        <div class="overlay">
            <h2 class="city-name">${data.name} <sup class="badge">${
      data.sys.country
    }</sup></h2>
            <h2 class="city-temp">${Math.floor(
              data.main.temp
            )} <sup>°C</sup></h2>
            <figure>
                <img class="city-icon"src="./images/icons/${icon}.png" alt="${
      data.weather[0].main
    }">
            <figcaption>${data.weather[0].description}</figcaption> 
            </figure>
        </div>
        
        `;
    cards.append(card);
  }

  alert() {
    const header = document.querySelector('header');
    const cards = document.querySelector('#cards');
    const alert = document.createElement('div');
    alert.className = 'form-control alert';
    alert.textContent = 'Please enter a valid location 😭';
    header.insertBefore(alert, cards);
  }

  removeAlert() {
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }
}
