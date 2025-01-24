var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });var format_RUMAH_2 = new ol.format.GeoJSON();
var features_RUMAH_2 = format_RUMAH_2.readFeatures(json_RUMAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAH_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RUMAH_2.addFeatures(features_RUMAH_2);var lyr_RUMAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAH_2, 
                style: style_RUMAH_2,
                title: '<img src="styles/legend/RUMAH_2.png" /> RUMAH'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_RUMAH_2.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_JALAN_1,lyr_RUMAH_2];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_JALAN_1.set('fieldAliases', {'id': 'id', 'JALAN': 'JALAN', });
lyr_RUMAH_2.set('fieldAliases', {'id': 'id', 'RUMAH': 'RUMAH', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_JALAN_1.set('fieldImages', {'id': 'TextEdit', 'JALAN': 'TextEdit', });
lyr_RUMAH_2.set('fieldImages', {'id': 'TextEdit', 'RUMAH': 'TextEdit', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_JALAN_1.set('fieldLabels', {'id': 'no label', 'JALAN': 'no label', });
lyr_RUMAH_2.set('fieldLabels', {'id': 'no label', 'RUMAH': 'no label', });
lyr_RUMAH_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});