const locationElmts = $("#location");
const locationBtn = locationElmts.find("#location-btn");
const locationInput = locationElmts.find("#location-input");
const API_KEY = "a5ecca38271f404f9ae5f7f8c2d005d6";

locationBtn.on("click", onLocation);

function onLocation(e) {
    const location = locationInput.val().trim();

    if (location.length) {
        const geoQueryURL = encodeURI(`https://api.opencagedata.com/geocode/v1/json?q=${location}&no_annotations=1&key=${API_KEY}`);

        $ajax({
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
                }
            });

        let warningsURL = "https://environment.data.gov.uk/flood-monitoring/id/floods?lat=51.5072&long=0.1276&dist=40";
        let items = [];

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
                    const locationEvent = new CustomEvent('changeLocation', {
                        detail: {
                            location: location,
                            items: itemData
                        }
                    });
                    this.dispatchEvent(locationEvent);
                }
            });
    } else {
        console.log("Please enter the name of a town, city or county");
    }


}