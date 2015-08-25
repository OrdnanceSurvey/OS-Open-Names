var names = new Bloodhound({
    datumTokenizer: function(d) {
        return Bloodhound.tokenizers.whitespace(d.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        url: 'https://api.ordnancesurvey.co.uk/opennames/v1/find?query=%QUERY&key=INSERT_YOUR_API_KEY_HERE',
        wildcard: '%QUERY',
        filter: function(names) {
            // Map the remote source JSON array to a JavaScript object array
            return $.map(names.results, function(places) {
                return {
                    name: places.GAZETTEER_ENTRY.NAME1,
                    X_COORDINATE: places.GAZETTEER_ENTRY.GEOMETRY_X,
                    Y_COORDINATE: places.GAZETTEER_ENTRY.GEOMETRY_Y,
                    value: places,
                    ID: places.GAZETTEER_ENTRY.ID
                };
            });
        }
    }
});

names.initialize();

$('.typeahead').typeahead({
    highlight: true
}, {
    name: 'Name',
    displayKey: 'name',
    source: names.ttAdapter(),
    templates: {
        empty: [
            '<div class="tt-empty-message">',
            'No Results',
            '</div>'
        ].join('\n'),
        header: '<h4 class="tt-tag-heading tt-tag-heading2"> OS Open Names</h4>'
    }
});