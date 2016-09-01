# OS Names API Demos

This repo contains working examples of how to use the Ordnance Survey Names API, a RESTful API based on the [OS Names](https://developer.os.uk/shop/places-networks/os-names-api.html?___store=apishop_storeview) dataset. The API returns queries to the service in either XML or JSON, and offers two resources: '[find](https://apidocs.os.uk/docs/os-names-find)' and '[nearest](https://apidocs.os.uk/docs/os-names-nearest)'. There are JavaScript examples using [Leaflet](http://leafletjs.com/) and [typeahead.js](https://twitter.github.io/typeahead.js/), as well as an example of making calls to the API in Python 3.0. 

Register for an API key of OS Names API **[here](https://developer.os.uk/shop/places-networks/os-names-api/os-names-free.html)**

Full documentation for the OS Names API can be found [here](https://apidocs.os.uk/docs/os-names-overview), while service terms for OS Names API can be found [here](https://developer.ordnancesurvey.co.uk/sites/default/files/OS_Places_v2-1.pdf).

###About OS Names API
OS Open Names is a geographic directory containing basic information about identifiable places. Those places are divided into themes, but the name of the place is the key property we use in queries.

Within OS Open Names, place names aren’t unique. Extra location details are provided to help users refine their queries and accurately identify the named place they’re interested in. These details include postcode district, populated place, district/borough, county/unitary authority, European region and country.

We also recognise that one place may have more than one name: one name, such as Cardiff (English) and then another name, Caerdydd (Welsh).

Our specification will extend the Infrastructure for Spatial Information in the European Community (INSPIRE) Geographical Names theme to ensure it’s compliant with European open data initiatives.

###License

These demos are released under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html)

