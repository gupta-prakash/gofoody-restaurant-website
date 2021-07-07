function updateMap() {
    fetch("/JSON FILES/branches.json")
        .then(Response => Response.json())
        .then(rsp => {
            console.log(rsp.data)
            
            rsp.data.forEach(element => {
                
                latitute = element.latitude;
                longitude = element.longitude;
                var description = element.description;

                // create pop up
                var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(description);
                
                //mark the locations on the map
                var marker = new mapboxgl.Marker({
                    draggable: false,
                    color: "orange"
                })
                    .setLngLat([longitude, latitute])
                    .setPopup(popup)
                    .addTo(map);
            });
        });
}

updateMap();