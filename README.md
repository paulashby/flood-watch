
# Flood-Watch

![flood watch logo](./assets/images/flood-watch-logo.png)

Group project for the Trilogy Skills Bootcamp in Front-End Web Development.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Technologies](#technologies)
- [APIs](#apis)
- [Challenges](#challenges)
- [Badges and Awards](#badges-and-awards)
- [Credits](#credits)
- [Contributors](#contributors)


## Description
[Flood watch](https://paulashby.github.io/flood-watch/) is a browser dashboard that enables the user to search by location for current flood warnings issued by The Environment Agency (EA), in England. 

Flood watch may appeal to various groups of people, such as:

* As a local authority representative, I need to be aware of flood warnings so I can alert residents and plan accordingly within my area of responsibility.

* As a resident in a flood-prone area, I want to check whether my family or our property are at risk from an imminent flood event so that I can implement an action plan.

* As a business owner working in a flood-prone area, I want to check whether my staff or business is at risk from an imminent flood event so that I can implement an action plan.

* As a visitor to an area, I want to know whether there are any warnings that may affect my travel plans.

* As climate researcher, I want to periodically check the level of flooding across the country.


![desktop view of dashboard](./assets/images/screenshot-main-01.jpg)
*A screenshot of the app in it's default state, as viewed in full screen browser (1920 x 1080 display resolution).*

## Usage:
In its initial state, the dashboard shows an [Open Street Map](https://www.openstreetmap.org) representation of all active flood warnings. 

These are sorted into four levels of severity as defined by the Environment Agency;

| Level | Name | Meaning |
| ----------- | ----------- | ----------- |
| 1 | Severe Flood Warning | Severe Flooding, Danger to Life. |
| 2 | Flood Warning | Flooding is Expected, Immediate Action Required. |
| 3 | Flood Alert | Flooding is Possible, Be Prepared. |
| 4 | Warning no Longer in Force | The warning is no longer in force. |

The user can filter the severity levels via the inputs on the top-right of the dashboard.

![User Inputs](./assets/images/screnshot-inputs-04.png)

The search bar can be used to zoom to a more granular view of a given location.

![Location Search](./assets/images/screenshot-searched-02.jpg)

The localStorage API is used to maintain a record of past searches and this is made available to the user in the 'Search History' section.

![Search History](./assets/images/screenshot-search-history-03.jpg)

## Technologies

Flood watch was built using;

* ![HTML 5.0](https://img.shields.io/badge/HTML-5-%23FF5722)
* ![CSS 3.0](https://img.shields.io/badge/CSS-3-%23264de4)
* ![Bootstrap 4](https://img.shields.io/badge/Bootstrap-4-%237952b3)
* ![JavaScript](https://img.shields.io/badge/JavaScript-ES5%20%26%206-%23fdda3e) 
* ![JQuery](https://img.shields.io/badge/JQuery-3-%23b3d4fc)
* ![OpenLayersMaps](https://img.shields.io/badge/Open%20Layers-7-orange)
* ![ApexCharts](https://img.shields.io/badge/Apex-Charts-brightgreen)

## APIs

Flood Watch utilises the following APIs:

* **Environment Agency Real Time flood-monitoring API** - All flood warnings & flood warning data are 'called' using this API - https://environment.data.gov.uk/flood-monitoring/doc/reference
* **OpenStreetMap** - The map is rendered using this API as part of the OpenLayers map library - https://www.openstreetmap.org/#map=6/52.763/-2.285&layers=C & https://openlayers.org/
* **OpenCage Geocoding API** - The user search locations are translated into longitudinal & latitudinal values using this API - https://opencagedata.com/api

N.B. Flood watch is not designed to be the definitive and/or sole source of flood-related information. Official recommendations and guidelines pertaining to severe weather conditions should always be adhered to. 

## Challenges:
Paul Ashby's main areas of focus were mapping dynamic flood markers onto the Open Layers base, cropping and zooming of the same, and developing responsive CSS for all page elements.

In case the Open Layers map did not ultimately meet the project requirements, a [separate repo](https://github.com/paulashby/flood-watch-map) was used for map development to simplify integration of alternative solutions. Frequent development updates were pushed to the main Flood Watch repo for integration testing.

Retrieving and processing relevant data from the EA API JSON was handled by Sam Brooke.

Damien Nsoh Ayine and Dayo Adekunle built the HTML page and contributed to the CSS.

![chart 01](./assets/images/chart-01.png)

## Badges and Awards:
Selected by fellow-students as best out of nine projects.


![People's Choice Award](https://img.shields.io/badge/WINNER-PEOPLE'S%20CHOICE-ffd700?style=plastic&logo=appveyor)

Judged by Bootcamp TAs to be app with best user experience/interface.

![Best UX & UI Award](https://img.shields.io/badge/WINNER%3A-BEST%20UX%2FUI-ffd700?style=plastic&logo=appveyor)

## Credits
Flood Watch is an educational project, completed as part of the Trilogy Skills Bootcamp in Front-End Web Development. Thank you to Course Instructor, [Philip Howley](linkedin.com/in/philip-howley-84557b6), and [Brooke Love](https://github.com/brookelove), our group Teaching Assistant. 

Flood Watch dashboard uses Environment Agency flood and river level data from the real-time data API (Beta). Please see [license](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

All contributors to the OpenLayers library. Please see [license](https://tldrlegal.com/license/bsd-2-clause-license-(freebsd)).

OpenStreetMap® is open data, licensed under the [Open Data Commons Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/) by the OpenStreetMap Foundation (OSMF).

The 'Digital-7' font has been used to display text in the Flood Watch dashboard (Alexander Sizenko, aka Style-7).

## Contributors:
Da-Vinci Coders
* Paul Ashby - https://github.com/paulashby
* Sam Brooke - https://github.com/Sam010000101
* Damien Nsoh Ayine - https://github.com/Damiennsoh
* Dayo Adekunle - https://github.com/Data202
