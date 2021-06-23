###########################import script
#####Below is the Javascript code representing the current import. To transfer them to another script, 
paste this code into the editor and click "Convert" in the suggestion tool tip

var AOI = ee.FeatureCollection("users/joaootavionf007/Sidney_flood/Sidney_Basin"),
    Water = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([151.11714166592245, -34.006126704008565]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([151.10289377163534, -34.00228442351554]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([151.08521264980916, -33.99459934107868]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([151.04779046963338, -33.99289145056841]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([150.98805571859344, -33.96565039426791]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([150.94169638416795, -33.92423555064297]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9578046584319, -33.9022473706125]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([150.89517454178855, -33.82035126749141]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([151.10209214820338, -33.83310199941878]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([151.11402261390162, -33.83901939344021]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1256955875344, -33.84379578616008]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([151.12277734412623, -33.85498718296242]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([151.16762900587105, -33.84592154914181]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([151.18925833936714, -33.845992834789726]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([151.18724839401276, -33.87125281932142]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1814762802127, -33.870771782350076]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2340647442563, -33.80781130057074]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([151.23389308287935, -33.79853952862839]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([151.22591082885103, -33.784487313699074]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2337214215024, -33.81109184078844]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([151.203074914941, -33.77013916679542]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([150.92954070453894, -34.111062032782485]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([150.93494803791296, -34.11973135948806]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([150.94378859882605, -34.12768930324225]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([150.92327506428015, -34.12569988752402]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([150.94790847187292, -34.13870129332592]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9733225315573, -33.91092105850086]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([150.96611275372527, -33.90803613798432]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([151.03639955705097, -33.976387592809985]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([151.04177659084604, -33.95918364544476]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([151.16104565663363, -33.94473490588597]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([151.16160355610873, -33.93946571138919]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([151.16068519248373, -33.932953502522324]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1392877917262, -33.921922234172165]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([151.23576861166043, -33.90206105241175]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([151.08005802287732, -33.83207388377438]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([151.08516494884168, -33.82335735315967]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([151.08241836681043, -33.82086165929777]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([151.061990662953, -33.82428430661491]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([151.05495254649793, -33.82428430661491]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([151.02680724025907, -33.82375370583691]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([151.12352668237253, -33.86011402454359]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([151.12078010034128, -33.863178744409666]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([151.13665877770944, -33.84642835197831]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([151.16278334232126, -33.845942757471406]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17643042178904, -33.844944752403386]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([151.101500230749, -33.842378400129135]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([151.15480108829294, -33.830187174278564]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([151.15977926822458, -33.832397408594105]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17926283450876, -33.83389463163026]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([151.20011969180857, -33.848936702730064]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1981455859736, -33.859058312016245]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([151.25193873549253, -33.778365365293894]),
            {
              "class": 1,
              "system:index": "52"
            })]),
    No_Water = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([150.93353327815188, -33.86872498975501]),
            {
              "class": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9393697649683, -33.871290550460195]),
            {
              "class": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([151.0327535540308, -33.876991520395244]),
            {
              "class": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([150.96305903498782, -33.98153667751502]),
            {
              "class": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9616857439722, -33.99150021946709]),
            {
              "class": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17532596341835, -33.93980918083025]),
            {
              "class": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17481097928749, -33.94116210778085]),
            {
              "class": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17283687345252, -33.94251501323115]),
            {
              "class": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([151.171120259683, -33.9440815084705]),
            {
              "class": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1670862173246, -33.9410196954301]),
            {
              "class": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17566928617225, -33.9498488106648]),
            {
              "class": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17781505338417, -33.94849602177585]),
            {
              "class": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([151.19918689481483, -33.94828242156461]),
            {
              "class": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2044225668119, -33.94977761178568]),
            {
              "class": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([151.19772777311073, -33.92649238431778]),
            {
              "class": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([151.20159015409217, -33.923073833319705]),
            {
              "class": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([151.213356388277, -33.95914777299795]),
            {
              "class": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2173045999469, -33.95950372759781]),
            {
              "class": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([151.22734679049867, -33.97537778817394]),
            {
              "class": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([151.22992171115297, -33.974737188397924]),
            {
              "class": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([151.23841894931215, -33.97487954432081]),
            {
              "class": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2495769388141, -33.956656049098505]),
            {
              "class": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([151.2536109811725, -33.97480836638915]),
            {
              "class": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([151.23841894931215, -33.97893658792731]),
            {
              "class": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([151.21232642001527, -33.98000419880381]),
            {
              "class": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1495841867389, -33.968758024418364]),
            {
              "class": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([151.1774791604938, -33.9564424693687]),
            {
              "class": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([151.17868079013246, -33.96185299060416]),
            {
              "class": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([151.18099821872133, -33.963490317363586]),
            {
              "class": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([151.18099821872133, -33.9663377670959]),
            {
              "class": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([151.11864208138846, -33.96583947027399]),
            {
              "class": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([151.11177562631033, -33.97608956004215]),
            {
              "class": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([151.04370500227202, -33.944036157566416]),
            {
              "class": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([151.05752374311675, -33.948094672384244]),
            {
              "class": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([151.06876756330718, -33.95364811589971]),
            {
              "class": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([151.07477571150054, -33.95322094080333]),
            {
              "class": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([151.09549333147348, -33.84195903578379]),
            {
              "class": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([150.99091809424297, -33.92334722809948]),
            {
              "class": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([150.99314969214336, -33.925768708123265]),
            {
              "class": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9869269672288, -33.92156668416926]),
            {
              "class": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([150.98465245398418, -33.92010661037801]),
            {
              "class": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([150.98486703070537, -33.920961290755784]),
            {
              "class": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([150.95903199347393, -33.926979422322745]),
            {
              "class": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([150.95937531622783, -33.92769159910733]),
            {
              "class": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([150.976155215825, -33.937376612178085]),
            {
              "class": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([150.96521180304424, -33.930967535620006]),
            {
              "class": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([150.85977350753723, -34.16512572866536]),
            {
              "class": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([150.85050379318176, -34.156034903679654]),
            {
              "class": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([150.89444910568176, -34.18997845520394]),
            {
              "class": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([150.8467272428888, -34.20602232590669]),
            {
              "class": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([150.9217432646173, -34.17052294286544]),
            {
              "class": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([150.96362864059387, -34.203750812937876]),
            {
              "class": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([150.96689020675598, -34.14140230218343]),
            {
              "class": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([150.79488550704895, -34.109744419690635]),
            {
              "class": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([150.7899073271173, -34.080102580392825]),
            {
              "class": 0,
              "system:index": "54"
            })]);
####################################end of import script


############################################### main script
var dateFilter = ee.Filter.date('2021-1-9','2021-1-30');
var S2 = ee.ImageCollection("COPERNICUS/S2").filter(dateFilter)
                                            .filterBounds(AOI)
                                            .filterMetadata('CLOUDY_PIXEL_PERCENTAGE', 'less_than', 1)

var img = ee.Image(S2.median()).clip(AOI);





Map.centerObject(AOI)
Map.addLayer(AOI,{color:'red'}, 'Sidney Basin')
Map.addLayer(img, {min:0, max: 4000, bands:"B4,B3,B2"}, 'S2');

//-------------------------- S1 --------------------------------------------------

var startyear = 2016; 
var endyear = 2020; 


var years = ee.List.sequence(startyear, endyear);

var months = ee.List.sequence(1, 12);

var collectionS1 = ee.ImageCollection('COPERNICUS/S1_GRD')
    .filter(ee.Filter.eq('instrumentMode', 'IW'))
    .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))
    .filterBounds(AOI)
    .select(['VV','VH']);


var monthlySAR =  ee.ImageCollection.fromImages(
  years.map(function (y) {
    return months.map(function(m) {
      var SAR = collectionS1.filter(ee.Filter.calendarRange(y, y, 'year'))
                          .filter(ee.Filter.calendarRange(m, m, 'month'))
                          .median();
                          
                          
        
      return SAR.clip(AOI).set('year', y)
                          .set('month', m)
                          .set('system:time_start', ee.Date.fromYMD(y, m, 1));
                        
    });
  }).flatten()
);




var VH = monthlySAR.select(['VH']).median().clip(AOI);
Map.addLayer(VH, {min: -20, max: -7}, 'VH');

var VV = monthlySAR.select(['VV']).median().clip(AOI);
Map.addLayer(VV, {min: -20, max: -7}, 'VV');  

var S1 = VV.addBands(VH)

print(S1.projection())

var SMOOTHING_RADIUS = 50;
var S1_filtered = S1.focal_mean(SMOOTHING_RADIUS, 'circle','meters');


var samples = Water.merge(No_Water)

var predictionBands = S1_filtered.bandNames();
var TrainingImage = S1_filtered.select(predictionBands).float(); 
  
  
var classifierTraining = TrainingImage.select(predictionBands).sampleRegions({collection: samples, properties: ['class'], scale: 20 });
var withRandom = classifierTraining.randomColumn('random');

var split = 0.7;  // Roughly 70% training, 30% testing.
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

 

var RF = ee.Classifier.smileRandomForest(100).train({features:trainingPartition, classProperty:'class', inputProperties: predictionBands});
  
var classified_RF = TrainingImage.select(predictionBands).classify(RF);
print('RF train error matrix: ', RF.confusionMatrix());
print('RF train accuracy: ', RF.confusionMatrix().accuracy());
print('RF train Kappa: ', RF.confusionMatrix().kappa());
  
Map.addLayer(classified_RF.selfMask(), {min: 0, max: 1,
  palette: ['white'
  ,'blue']}, 
'Random_Forest'); 


  
 
var test = testingPartition.classify(RF);

var testAccuracy = test.errorMatrix('class', 'classification');
print('RF test error matrix: ', testAccuracy);  
print('RF test accuracy: ', testAccuracy.accuracy());
print('RF test Kappa: ', testAccuracy.kappa());

//---------------------- Monthly water occurrence -----------------------------------------

print(monthlySAR)

var monthly_occ = monthlySAR.map(function(img) {
  var new_img = img.focal_mean(SMOOTHING_RADIUS, 'circle','meters');
  var TrainingImage = new_img.select(predictionBands).float(); 
  var result = TrainingImage.select(predictionBands).classify(RF);
  return result.copyProperties(img,['month','system:time_start','year']);
})

print(monthly_occ)


var gifParams = {
    region: AOI.geometry().bounds(),
    dimensions: 500,
    framesPerSecond: 1,
  };
var gif_viz = {min: 0, max: 1, palette: ['white','blue']}
  
var rgbOcc = monthly_occ.map(function(img) {
    return img.visualize(gif_viz);
  });
  




Map.addLayer(monthly_occ.filter(ee.Filter.eq('month',1)).first(), gif_viz, 'result'); 

//---------------------------- DEM -----------------------------------------------

var dataset = ee.ImageCollection('AU/GA/AUSTRALIA_5M_DEM');
var elevation = dataset.select('elevation');
elevation = elevation.mean()
var elevation_clip = elevation.clip(AOI)
var elevationVis = {
  min: 2.0,
  max: 500.0,
  palette: ['0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff'],
};
Map.addLayer(elevation_clip, elevationVis, 'Elevation');


var max = ee.Number(elevation.reduceRegion({
  reducer: ee.Reducer.max(),
  geometry: AOI,
  scale: 10,
  maxPixels: 1e9
}).values().get(0));


var min = ee.Number(elevation.reduceRegion({
  reducer: ee.Reducer.min(),
  geometry: AOI,
  scale: 10,
  maxPixels: 1e9
}).values().get(0));


var lines = ee.List.sequence(min, max, 10)
 
var contourlines = lines.map(function(line) {
var mycontour = elevation
.convolve(ee.Kernel.gaussian(5, 3))
.subtract(ee.Image.constant(line)).zeroCrossing()
.multiply(ee.Image.constant(line)).toFloat();
 
return mycontour.mask(mycontour);
})
 
contourlines = ee.ImageCollection(contourlines).mosaic()
contourlines = contourlines.clip(AOI)
 
Map.addLayer(contourlines, {min: 0, max: 18, palette:['black']}, 'contours')


//---------------------------- Surface water -------------------------------

var dataset = ee.Image('JRC/GSW1_2/GlobalSurfaceWater');

var suf_wat = dataset.select(['occurrence']).clip(AOI)

var suf_wat = suf_wat.gt(60)

suf_wat = suf_wat.updateMask(suf_wat)

var visualization = {
  min: 0,
  max: 1,
  palette: ['ffffff', 'ffbbbb', '0000ff']
};
Map.addLayer(suf_wat, visualization, 'Occurrence');

//---------------------- World Pop -------------------------------------

var collectionPop = ee.ImageCollection("WorldPop/GP/100m/pop").filterDate('2019').filter(ee.Filter.inList('country', ['AUS']))
var PopSDY = collectionPop.select('population').mosaic().clip(AOI);

var Vispop = {min: 0.0,max: 50.0,palette: ['24126c', '1fff4f', 'd4ff50']};
Map.addLayer(PopSDY, Vispop, 'Population');




var coll_stats = monthly_occ.map(function(img){
  var img_mask = img.selfMask()
  var pop_mask = PopSDY.updateMask(img_mask)
  
  var POPsum = ee.Number(pop_mask.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: AOI,
    scale: 100,
    maxPixels: 1e13
  }).values().get(0));
  
  var areaImage = img_mask.multiply(ee.Image.pixelArea())
  var area = areaImage.reduceRegion({
    reducer: ee.Reducer.sum(),
    geometry: AOI,
    scale: 10,
    maxPixels: 1e13
    })
  var AreaSqKm = ee.Number(area.get('classification')).divide(1e6).round()
  
  
  return ee.Feature(null).set('Pop', POPsum).set('Area',AreaSqKm).copyProperties(img,['month','system:time_start','year']);
})


print(coll_stats)


var chart =
    ui.Chart.feature
        .byFeature({
          features: coll_stats,
          xProperty: 'system:time_start',
          yProperties: ['Area', 'Pop']
        })
        .setSeriesNames(['Flooded Area (km²)', 'Affected population'])
        .setChartType('ColumnChart')
        .setOptions({
          title: 'Average June Temperature and Precipitation by Ecoregion',
          series: {
            0: {targetAxisIndex: 0, type: 'bar', color: '1d6b99'},
            1: {
              targetAxisIndex: 1,
              type: 'line',
              lineWidth: 2,
              color: 'e37d05'
            }
          },
          hAxis:
              {title: 'Sidney Flood Analysis', titleTextStyle: {italic: false, bold: true}},
          vAxes: {
            0: {
              title: 'Flooded Area (km²)',
              baseline: 0,
              titleTextStyle: {italic: false, bold: true, color: '1d6b99'}
            },
            1: {
              title: 'Affected population',
              titleTextStyle: {italic: false, bold: true, color: 'e37d05'}
            },
          },
          bar: {groupWidth: '40%'},
        });


var pnl_main = ui.Panel({layout: ui.Panel.Layout.flow('vertical'),style: {width: '600px'}});

pnl_main.add(ui.Thumbnail(rgbOcc, gifParams));
pnl_main.add(chart);
ui.root.insert(0, pnl_main);
