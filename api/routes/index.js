const express = require('express');
const router = express.Router();
const ctrlFamilies = require('../controllers/families');

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



module.exports = router;