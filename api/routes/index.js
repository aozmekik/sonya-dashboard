const express = require('express');
const router = express.Router();
const ctrlFamilies = require('../controllers/families');
const ctrlLocations = require('../controllers/locations');


// families
router
    .route('/families')
    .get(ctrlFamilies.familiesList)
    .post(ctrlFamilies.familiesCreate);

router
    .route('/families/:familyid')
    .get(ctrlFamilies.familiesReadOne)
    .put(ctrlFamilies.familiesUpdateOne)
    .delete(ctrlFamilies.familiesDeleteOne);

// locations
router
    .route('/locations/cities')
    .get(ctrlLocations.citiesList);

router
    .route('/locations/towns/:cityid')
    .get(ctrlLocations.townsList)

router
    .route('/locations/districts/:townid')
    .get(ctrlLocations.districtsList)

router
    .route('/locations/streets/:districtid')
    .get(ctrlLocations.streetsList)


module.exports = router;