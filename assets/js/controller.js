const locationElmts = $("#location");
const locationBtn = locationElmts.find("#location-btn");
const locationInput = locationElmts.find("#location-input");
const API_KEY = "a5ecca38271f404f9ae5f7f8c2d005d6";

locationBtn.on("click", onLocation);
locationInput.on("keypress", onLocationKeypress);
locationInput.on("keyup", onLocationClear)

function onLocationKeypress(e) {    
    const keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
       onLocation();
    }
    // Prevent propogation to other possible handlers
    e.stopPropagation();
}

function onLocationClear() {
    if (!this.value) {
        $(window).trigger("home");
    }
}

function onLocation() {
    const location = locationInput.val().trim();

    if (location.length) {
        const geoQueryURL = encodeURI(`https://api.opencagedata.com/geocode/v1/json?q=${location}&no_annotations=1&key=${API_KEY}`);

        $.ajax({
            url: geoQueryURL,
            method: "GET"
        })
            .then(function (response) {

                if (!response?.results.length) {
                    // No data
                    console.log("No data available - ideally switch to a fallback API");
                } else {
                    const lat = response.results[0].geometry.lat;
                    const lng = response.results[0].geometry.lng;
                    const warningsURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${lat}&long=${lng}&dist=40`;
                    const items = [];

                    $.ajax({
                        url: warningsURL,
                        method: "GET"
                    })
                        .then(function (response) {

                            if (!response.items.length) {
                                // No data
                                console.log("No data available - ideally switch to a fallback API");
                            } else {
                                itemData = response.items;
                                // Trigger event for interested parties
                                $(window).trigger("location", [{
                                    location: location,
                                    items: itemData
                                }]);
                            }
                        });
                }
            });

    } else {
        console.log("Please enter the name of a town, city or county");
    }
}