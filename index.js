  // Initialize and add the map
  function initMap() {
    const schools_text = `[
      {
        "city": "Oradea",
        "name": "Colegiul National Emanuil Gojdu",
        "description": "Lorem ipsum",
        "lat": 47.0545768,
        "lng": 21.9355306,
        "icon": "./cnegojdu.png"
      },
      {
        "city": "Bucuresti",
        "name": "Colegiul National Tudor Vianu",
        "description": "infooooo",
        "lat": 44.4580628,
        "lng": 26.0779203,
        "icon": "./vianu.png"
      }
    ]`;


    const romania = { lat: 45.854036, lng: 20.5338592 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: romania,
    });

    const schools = JSON.parse(schools_text);
    //const schools = require("./schools.json");

    for (school of schools) {
      const infowindow = new google.maps.InfoWindow({
        content: school.description,
      });

      const marker = new google.maps.Marker({
        position: {lat: school.lat, lng: school.lng},
        map: map,
        icon: school.icon,
        title: school.name,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    }
    
  }