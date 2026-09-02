var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IL_Boundarytl_2025_us_state_2 = new ol.format.GeoJSON();
var features_IL_Boundarytl_2025_us_state_2 = format_IL_Boundarytl_2025_us_state_2.readFeatures(json_IL_Boundarytl_2025_us_state_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IL_Boundarytl_2025_us_state_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IL_Boundarytl_2025_us_state_2.addFeatures(features_IL_Boundarytl_2025_us_state_2);
var lyr_IL_Boundarytl_2025_us_state_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IL_Boundarytl_2025_us_state_2, 
                style: style_IL_Boundarytl_2025_us_state_2,
                popuplayertitle: 'IL_Boundary — tl_2025_us_state',
                interactive: false,
                title: '<img src="styles/legend/IL_Boundarytl_2025_us_state_2.png" /> IL_Boundary — tl_2025_us_state'
            });
var format_EVScoreDemandTrend_3 = new ol.format.GeoJSON();
var features_EVScoreDemandTrend_3 = format_EVScoreDemandTrend_3.readFeatures(json_EVScoreDemandTrend_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EVScoreDemandTrend_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EVScoreDemandTrend_3.addFeatures(features_EVScoreDemandTrend_3);
var lyr_EVScoreDemandTrend_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EVScoreDemandTrend_3, 
                style: style_EVScoreDemandTrend_3,
                popuplayertitle: 'EV Score- Demand + Trend',
                interactive: false,
    title: 'EV Score- Demand + Trend<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_0.png" /> All Zips<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_1.png" /> T1 EIEC – Hot<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_2.png" /> T1 EIEC – Warm<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_3.png" /> T1 EIEC – Cold<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_4.png" /> T2 Non-EIEC – Hot<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_5.png" /> T2 Non-EIEC – Warm<br />\
    <img src="styles/legend/EVScoreDemandTrend_3_6.png" /> T2 Non-EIEC – Cold<br />' });
var format_R3_Designated_Only_4 = new ol.format.GeoJSON();
var features_R3_Designated_Only_4 = format_R3_Designated_Only_4.readFeatures(json_R3_Designated_Only_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3_Designated_Only_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3_Designated_Only_4.addFeatures(features_R3_Designated_Only_4);
var lyr_R3_Designated_Only_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R3_Designated_Only_4, 
                style: style_R3_Designated_Only_4,
                popuplayertitle: 'R3_Designated_Only',
                interactive: false,
                title: '<img src="styles/legend/R3_Designated_Only_4.png" /> R3_Designated_Only'
            });
var format_IncomeQualifyingAreas_5 = new ol.format.GeoJSON();
var features_IncomeQualifyingAreas_5 = format_IncomeQualifyingAreas_5.readFeatures(json_IncomeQualifyingAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncomeQualifyingAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncomeQualifyingAreas_5.addFeatures(features_IncomeQualifyingAreas_5);
var lyr_IncomeQualifyingAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncomeQualifyingAreas_5, 
                style: style_IncomeQualifyingAreas_5,
                popuplayertitle: 'Income Qualifying Areas',
                interactive: false,
                title: '<img src="styles/legend/IncomeQualifyingAreas_5.png" /> Income Qualifying Areas'
            });
var format_CEJA_Adjacent_6 = new ol.format.GeoJSON();
var features_CEJA_Adjacent_6 = format_CEJA_Adjacent_6.readFeatures(json_CEJA_Adjacent_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEJA_Adjacent_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEJA_Adjacent_6.addFeatures(features_CEJA_Adjacent_6);
var lyr_CEJA_Adjacent_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEJA_Adjacent_6, 
                style: style_CEJA_Adjacent_6,
                popuplayertitle: 'CEJA_Adjacent',
                interactive: false,
                title: '<img src="styles/legend/CEJA_Adjacent_6.png" /> CEJA_Adjacent'
            });
var format_EJC_2026_7 = new ol.format.GeoJSON();
var features_EJC_2026_7 = format_EJC_2026_7.readFeatures(json_EJC_2026_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJC_2026_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJC_2026_7.addFeatures(features_EJC_2026_7);
var lyr_EJC_2026_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJC_2026_7, 
                style: style_EJC_2026_7,
                popuplayertitle: 'EJC_2026',
                interactive: false,
                title: '<img src="styles/legend/EJC_2026_7.png" /> EJC_2026'
            });
var format_CompositePriorityMap_8 = new ol.format.GeoJSON();
var features_CompositePriorityMap_8 = format_CompositePriorityMap_8.readFeatures(json_CompositePriorityMap_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompositePriorityMap_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompositePriorityMap_8.addFeatures(features_CompositePriorityMap_8);
var lyr_CompositePriorityMap_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CompositePriorityMap_8, 
                style: style_CompositePriorityMap_8,
                popuplayertitle: 'Composite Priority Map',
                interactive: false,
    title: 'Composite Priority Map<br />\
    <img src="styles/legend/CompositePriorityMap_8_0.png" /> 1 - T1 Hot<br />\
    <img src="styles/legend/CompositePriorityMap_8_1.png" /> 2 - T1 Warm<br />\
    <img src="styles/legend/CompositePriorityMap_8_2.png" /> 3 - T1 Cold<br />\
    <img src="styles/legend/CompositePriorityMap_8_3.png" /> 4 - T2 Hot<br />\
    <img src="styles/legend/CompositePriorityMap_8_4.png" /> 5 - T1 Ice<br />\
    <img src="styles/legend/CompositePriorityMap_8_5.png" /> 6 - T2 Monitor<br />' });
var format_StraightEV_Counts_9 = new ol.format.GeoJSON();
var features_StraightEV_Counts_9 = format_StraightEV_Counts_9.readFeatures(json_StraightEV_Counts_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StraightEV_Counts_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StraightEV_Counts_9.addFeatures(features_StraightEV_Counts_9);
var lyr_StraightEV_Counts_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StraightEV_Counts_9, 
                style: style_StraightEV_Counts_9,
                popuplayertitle: 'Straight  EV_Counts',
                interactive: false,
    title: 'Straight  EV_Counts<br />\
    <img src="styles/legend/StraightEV_Counts_9_0.png" /> 1 - Very High (300+)<br />\
    <img src="styles/legend/StraightEV_Counts_9_1.png" /> 2 - High (100-299)<br />\
    <img src="styles/legend/StraightEV_Counts_9_2.png" /> 3 - Moderate (25-99)<br />\
    <img src="styles/legend/StraightEV_Counts_9_3.png" /> 4 - Low (10-24)<br />\
    <img src="styles/legend/StraightEV_Counts_9_4.png" /> 5 - Very Low (<10)<br />' });
var format_SingleFamilyHousingDensity_10 = new ol.format.GeoJSON();
var features_SingleFamilyHousingDensity_10 = format_SingleFamilyHousingDensity_10.readFeatures(json_SingleFamilyHousingDensity_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SingleFamilyHousingDensity_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SingleFamilyHousingDensity_10.addFeatures(features_SingleFamilyHousingDensity_10);
var lyr_SingleFamilyHousingDensity_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SingleFamilyHousingDensity_10, 
                style: style_SingleFamilyHousingDensity_10,
                popuplayertitle: 'Single Family Housing Density',
                interactive: false,
    title: 'Single Family Housing Density<br />\
    <img src="styles/legend/SingleFamilyHousingDensity_10_0.png" /> 1 - Low (<500)<br />\
    <img src="styles/legend/SingleFamilyHousingDensity_10_1.png" /> 2 - Medium (500-2,000)<br />\
    <img src="styles/legend/SingleFamilyHousingDensity_10_2.png" /> 3 - High (2,000-5,000)<br />\
    <img src="styles/legend/SingleFamilyHousingDensity_10_3.png" /> 4 - Very High (5,000+)<br />' });
var format_MultifamilyComplexes_11 = new ol.format.GeoJSON();
var features_MultifamilyComplexes_11 = format_MultifamilyComplexes_11.readFeatures(json_MultifamilyComplexes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MultifamilyComplexes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultifamilyComplexes_11.addFeatures(features_MultifamilyComplexes_11);
var lyr_MultifamilyComplexes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultifamilyComplexes_11, 
                style: style_MultifamilyComplexes_11,
                popuplayertitle: 'Multifamily Complexes ',
                interactive: true,
    title: 'Multifamily Complexes <br />\
    <img src="styles/legend/MultifamilyComplexes_11_0.png" /> Apartment Complex<br />\
    <img src="styles/legend/MultifamilyComplexes_11_1.png" /> Mobile Home / MHC<br />\
    <img src="styles/legend/MultifamilyComplexes_11_2.png" /> Senior Living<br />\
    <img src="styles/legend/MultifamilyComplexes_11_3.png" /> <br />' });
var group_EJCCEJAR3Income = new ol.layer.Group({
                                layers: [lyr_R3_Designated_Only_4,lyr_IncomeQualifyingAreas_5,lyr_CEJA_Adjacent_6,lyr_EJC_2026_7,],
                                fold: 'open',
                                title: 'EJC,CEJA,R3,Income '});

lyr_2gisMap_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_IL_Boundarytl_2025_us_state_2.setVisible(true);lyr_EVScoreDemandTrend_3.setVisible(true);lyr_R3_Designated_Only_4.setVisible(true);lyr_IncomeQualifyingAreas_5.setVisible(true);lyr_CEJA_Adjacent_6.setVisible(true);lyr_EJC_2026_7.setVisible(true);lyr_CompositePriorityMap_8.setVisible(true);lyr_StraightEV_Counts_9.setVisible(true);lyr_SingleFamilyHousingDensity_10.setVisible(true);lyr_MultifamilyComplexes_11.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_GoogleHybrid_1,lyr_IL_Boundarytl_2025_us_state_2,lyr_EVScoreDemandTrend_3,group_EJCCEJAR3Income,lyr_CompositePriorityMap_8,lyr_StraightEV_Counts_9,lyr_SingleFamilyHousingDensity_10,lyr_MultifamilyComplexes_11];
lyr_IL_Boundarytl_2025_us_state_2.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'DIVISION': 'DIVISION', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_EVScoreDemandTrend_3.set('fieldAliases', {'fid': 'fid', 'ZIP': 'ZIP', 'PROGRAM_TIER': 'PROGRAM_TIER', 'ACTIVITY': 'ACTIVITY', 'IS_EIEC_EXPANDED': 'IS_EIEC_EXPANDED', 'IS_EJC': 'IS_EJC', 'IS_CEJA': 'IS_CEJA', 'IS_R3': 'IS_R3', 'IS_LMI': 'IS_LMI', 'EV_TOTAL': 'EV_TOTAL', 'ADDED_LAST_12MO': 'ADDED_LAST_12MO', 'DEMAND_SCORE': 'DEMAND_SCORE', 'MOMENTUM_SCORE': 'MOMENTUM_SCORE', 'COMBINED_SCORE': 'COMBINED_SCORE', 'RANK': 'RANK', });
lyr_R3_Designated_Only_4.set('fieldAliases', {'fid': 'fid', 'GEOID': 'GEOID', 'COUNTYFP': 'COUNTYFP', });
lyr_IncomeQualifyingAreas_5.set('fieldAliases', {'fid': 'fid', 'GEOID': 'GEOID', 'LOWMOD_PCT': 'LOWMOD_PCT', });
lyr_CEJA_Adjacent_6.set('fieldAliases', {'fid': 'fid', 'GEOID': 'GEOID', 'County': 'County', 'adj2026_sd': 'adj2026_sd', });
lyr_EJC_2026_7.set('fieldAliases', {'fid': 'fid', 'GEOID': 'GEOID', 'County': 'County', 'EJC2026': 'EJC2026', });
lyr_CompositePriorityMap_8.set('fieldAliases', {'fid': 'fid', 'ZIP': 'ZIP', 'PROGRAM_TIER': 'PROGRAM_TIER', 'ACTIVITY': 'ACTIVITY', 'IS_EIEC_EXPANDED': 'IS_EIEC_EXPANDED', 'IS_EJC': 'IS_EJC', 'IS_CEJA': 'IS_CEJA', 'IS_R3': 'IS_R3', 'IS_LMI': 'IS_LMI', 'EV_TOTAL': 'EV_TOTAL', 'ADDED_LAST_12MO': 'ADDED_LAST_12MO', 'DEMAND_SCORE': 'DEMAND_SCORE', 'MOMENTUM_SCORE': 'MOMENTUM_SCORE', 'COMBINED_SCORE': 'COMBINED_SCORE', 'RANK': 'RANK', 'SF_HU': 'SF_HU', 'LARGE_MF_HU': 'LARGE_MF_HU', 'COMPOSITE_SCORE': 'COMPOSITE_SCORE', 'PRIORITY_CLASS': 'PRIORITY_CLASS', });
lyr_StraightEV_Counts_9.set('fieldAliases', {'fid': 'fid', 'ZIP': 'ZIP', 'EV_TOTAL': 'EV_TOTAL', 'ADDED_LAST_12MO': 'ADDED_LAST_12MO', 'DEMAND_SCORE': 'DEMAND_SCORE', 'MOMENTUM_SCORE': 'MOMENTUM_SCORE', 'COMBINED_SCORE': 'COMBINED_SCORE', 'PROGRAM_TIER': 'PROGRAM_TIER', 'ACTIVITY': 'ACTIVITY', 'EV_CLASS': 'EV_CLASS', });
lyr_SingleFamilyHousingDensity_10.set('fieldAliases', {'fid': 'fid', 'ZIP': 'ZIP', 'CITY': 'CITY', 'EV_COUNT': 'EV_COUNT', 'IN_AMEREN': 'IN_AMEREN', 'IS_EIEC': 'IS_EIEC', 'IS_EJC': 'IS_EJC', 'IS_R3': 'IS_R3', 'IS_CEJA': 'IS_CEJA', 'TIER': 'TIER', 'SF_HU': 'SF_HU', 'SF_CLASS': 'SF_CLASS', });
lyr_MultifamilyComplexes_11.set('fieldAliases', {'fid': 'fid', 'ZIP': 'ZIP', 'CITY': 'CITY', 'TIER': 'TIER', 'ACTIVITY': 'ACTIVITY', 'ZIP_SCORE': 'ZIP_SCORE', 'PROPERTY_TYPE': 'PROPERTY_TYPE', 'PROPERTY_NAME': 'PROPERTY_NAME', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'WEBSITE': 'WEBSITE', 'LAT': 'LAT', 'LNG': 'LNG', 'PLACE_ID': 'PLACE_ID', });
lyr_IL_Boundarytl_2025_us_state_2.set('fieldImages', {'fid': 'TextEdit', 'REGION': 'TextEdit', 'DIVISION': 'TextEdit', 'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_EVScoreDemandTrend_3.set('fieldImages', {'fid': 'TextEdit', 'ZIP': 'TextEdit', 'PROGRAM_TIER': 'TextEdit', 'ACTIVITY': 'TextEdit', 'IS_EIEC_EXPANDED': 'CheckBox', 'IS_EJC': 'CheckBox', 'IS_CEJA': 'CheckBox', 'IS_R3': 'CheckBox', 'IS_LMI': 'CheckBox', 'EV_TOTAL': 'TextEdit', 'ADDED_LAST_12MO': 'TextEdit', 'DEMAND_SCORE': 'TextEdit', 'MOMENTUM_SCORE': 'TextEdit', 'COMBINED_SCORE': 'TextEdit', 'RANK': 'TextEdit', });
lyr_R3_Designated_Only_4.set('fieldImages', {'fid': 'TextEdit', 'GEOID': 'TextEdit', 'COUNTYFP': 'TextEdit', });
lyr_IncomeQualifyingAreas_5.set('fieldImages', {'fid': 'TextEdit', 'GEOID': 'TextEdit', 'LOWMOD_PCT': 'TextEdit', });
lyr_CEJA_Adjacent_6.set('fieldImages', {'fid': 'TextEdit', 'GEOID': 'TextEdit', 'County': 'TextEdit', 'adj2026_sd': 'TextEdit', });
lyr_EJC_2026_7.set('fieldImages', {'fid': 'TextEdit', 'GEOID': 'TextEdit', 'County': 'TextEdit', 'EJC2026': 'TextEdit', });
lyr_CompositePriorityMap_8.set('fieldImages', {'fid': 'TextEdit', 'ZIP': 'TextEdit', 'PROGRAM_TIER': 'TextEdit', 'ACTIVITY': 'TextEdit', 'IS_EIEC_EXPANDED': 'CheckBox', 'IS_EJC': 'CheckBox', 'IS_CEJA': 'CheckBox', 'IS_R3': 'CheckBox', 'IS_LMI': 'CheckBox', 'EV_TOTAL': 'TextEdit', 'ADDED_LAST_12MO': 'TextEdit', 'DEMAND_SCORE': 'TextEdit', 'MOMENTUM_SCORE': 'TextEdit', 'COMBINED_SCORE': 'TextEdit', 'RANK': 'TextEdit', 'SF_HU': 'TextEdit', 'LARGE_MF_HU': 'TextEdit', 'COMPOSITE_SCORE': 'TextEdit', 'PRIORITY_CLASS': 'TextEdit', });
lyr_StraightEV_Counts_9.set('fieldImages', {'fid': 'TextEdit', 'ZIP': 'TextEdit', 'EV_TOTAL': 'TextEdit', 'ADDED_LAST_12MO': 'TextEdit', 'DEMAND_SCORE': 'TextEdit', 'MOMENTUM_SCORE': 'TextEdit', 'COMBINED_SCORE': 'TextEdit', 'PROGRAM_TIER': 'TextEdit', 'ACTIVITY': 'TextEdit', 'EV_CLASS': 'TextEdit', });
lyr_SingleFamilyHousingDensity_10.set('fieldImages', {'fid': 'TextEdit', 'ZIP': 'TextEdit', 'CITY': 'TextEdit', 'EV_COUNT': 'TextEdit', 'IN_AMEREN': 'CheckBox', 'IS_EIEC': 'CheckBox', 'IS_EJC': 'CheckBox', 'IS_R3': 'CheckBox', 'IS_CEJA': 'CheckBox', 'TIER': 'TextEdit', 'SF_HU': 'TextEdit', 'SF_CLASS': 'TextEdit', });
lyr_MultifamilyComplexes_11.set('fieldImages', {'fid': 'TextEdit', 'ZIP': 'TextEdit', 'CITY': 'TextEdit', 'TIER': 'TextEdit', 'ACTIVITY': 'TextEdit', 'ZIP_SCORE': 'TextEdit', 'PROPERTY_TYPE': 'TextEdit', 'PROPERTY_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PHONE': 'TextEdit', 'WEBSITE': 'TextEdit', 'LAT': 'TextEdit', 'LNG': 'TextEdit', 'PLACE_ID': 'TextEdit', });
lyr_IL_Boundarytl_2025_us_state_2.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'DIVISION': 'no label', 'STATEFP': 'no label', 'STATENS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_EVScoreDemandTrend_3.set('fieldLabels', {'fid': 'no label', 'ZIP': 'no label', 'PROGRAM_TIER': 'no label', 'ACTIVITY': 'no label', 'IS_EIEC_EXPANDED': 'no label', 'IS_EJC': 'no label', 'IS_CEJA': 'no label', 'IS_R3': 'no label', 'IS_LMI': 'no label', 'EV_TOTAL': 'no label', 'ADDED_LAST_12MO': 'no label', 'DEMAND_SCORE': 'no label', 'MOMENTUM_SCORE': 'no label', 'COMBINED_SCORE': 'no label', 'RANK': 'no label', });
lyr_R3_Designated_Only_4.set('fieldLabels', {'fid': 'no label', 'GEOID': 'no label', 'COUNTYFP': 'no label', });
lyr_IncomeQualifyingAreas_5.set('fieldLabels', {'fid': 'no label', 'GEOID': 'no label', 'LOWMOD_PCT': 'no label', });
lyr_CEJA_Adjacent_6.set('fieldLabels', {'fid': 'no label', 'GEOID': 'no label', 'County': 'no label', 'adj2026_sd': 'no label', });
lyr_EJC_2026_7.set('fieldLabels', {'fid': 'no label', 'GEOID': 'no label', 'County': 'no label', 'EJC2026': 'no label', });
lyr_CompositePriorityMap_8.set('fieldLabels', {'fid': 'no label', 'ZIP': 'no label', 'PROGRAM_TIER': 'no label', 'ACTIVITY': 'no label', 'IS_EIEC_EXPANDED': 'no label', 'IS_EJC': 'no label', 'IS_CEJA': 'no label', 'IS_R3': 'no label', 'IS_LMI': 'no label', 'EV_TOTAL': 'no label', 'ADDED_LAST_12MO': 'no label', 'DEMAND_SCORE': 'no label', 'MOMENTUM_SCORE': 'no label', 'COMBINED_SCORE': 'no label', 'RANK': 'no label', 'SF_HU': 'no label', 'LARGE_MF_HU': 'no label', 'COMPOSITE_SCORE': 'no label', 'PRIORITY_CLASS': 'no label', });
lyr_StraightEV_Counts_9.set('fieldLabels', {'fid': 'no label', 'ZIP': 'no label', 'EV_TOTAL': 'no label', 'ADDED_LAST_12MO': 'no label', 'DEMAND_SCORE': 'no label', 'MOMENTUM_SCORE': 'no label', 'COMBINED_SCORE': 'no label', 'PROGRAM_TIER': 'no label', 'ACTIVITY': 'no label', 'EV_CLASS': 'no label', });
lyr_SingleFamilyHousingDensity_10.set('fieldLabels', {'fid': 'no label', 'ZIP': 'no label', 'CITY': 'no label', 'EV_COUNT': 'no label', 'IN_AMEREN': 'no label', 'IS_EIEC': 'no label', 'IS_EJC': 'no label', 'IS_R3': 'no label', 'IS_CEJA': 'no label', 'TIER': 'no label', 'SF_HU': 'no label', 'SF_CLASS': 'no label', });
lyr_MultifamilyComplexes_11.set('fieldLabels', {'fid': 'no label', 'ZIP': 'no label', 'CITY': 'no label', 'TIER': 'no label', 'ACTIVITY': 'no label', 'ZIP_SCORE': 'no label', 'PROPERTY_TYPE': 'no label', 'PROPERTY_NAME': 'inline label - visible with data', 'ADDRESS': 'no label', 'PHONE': 'no label', 'WEBSITE': 'no label', 'LAT': 'no label', 'LNG': 'no label', 'PLACE_ID': 'no label', });
lyr_MultifamilyComplexes_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});