  
  // Initialize and add the map
function initMap() {
    
    const xmlhttp = new XMLHttpRequest();
    const url = "https://raw.githubusercontent.com/andcov/biology_map_website/main/schools.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const schools_arr = JSON.parse(this.responseText);
            create_map(schools_arr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function create_map(schools) {
  const romania = { lat: 45.854036, lng: 20.5338592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: romania,
  });

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

