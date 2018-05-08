(function () {
'use strict';

const checkStatus = () => {
  fetch(`http://snwall.ru/service/status/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === `OK`) {
        window.location = window.location;
      }
    })
    .catch(error => console.log(error));
};

checkStatus();
setInterval(checkStatus, 5000);

}());

//# sourceMappingURL=main.js.map
