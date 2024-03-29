let map;
const api_url = "https://zuhair-007.github.io/senior-design-capstone-project/Server/templates/";

function loadMap(target, center, zoom) {
    const raster = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    map = new ol.Map({
        layers: [raster],
        target: target,
        view: new ol.View({
            center: center,
            zoom: zoom
        })
    });
}

function addMapLayer(data) {
    if (data.errMsg) {
        console.error(data.errMsg);
    } else {
        if (data.hasOwnProperty("url")) {
            addTileServerURL(data.url.replace('{z}', '{z}').replace('{x}', '{x}').replace('{y}', '{y}'), "geeLayer");
        } else {
            console.warn("Wrong Data Returned");
        }
    }
}


function addTileServerURL(url, layerID) {
    var geeLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: url
        }),
        id: layerID,
        opacity: 0.4
    });
    map.addLayer(geeLayer);
};
