const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
})


const ctrlFamilies = require('../controllers/families');
const ctrlLocations = require('../controllers/locations');
const ctrlAuth = require('../controllers/authentication');
const ctrlUsers = require('../controllers/users');



// families
router
    .route('/families')
    .post(auth, ctrlFamilies.familiesList)

router
    .route('/families/create')
    .post(auth, ctrlFamilies.familiesCreate);

router
    .route('/families/:familyid')
    .get(auth, ctrlFamilies.familiesReadOne)
    .put(auth, ctrlFamilies.familiesUpdateOne)
    .delete(auth, ctrlFamilies.familiesDeleteOne);

// locations
router
    .route('/locations/cities')
    .get(auth, ctrlLocations.citiesList);

router
    .route('/locations/towns/:cityid')
    .get(auth, ctrlLocations.townsList);

router
    .route('/locations/districts/:townid')
    .get(auth, ctrlLocations.districtsList);

router
    .route('/locations/streets/:districtid')
    .get(auth, ctrlLocations.streetsList);


// authentications
router
    .route('/register')
    .post(ctrlAuth.register);

router
    .route('/login')
    .post(ctrlAuth.login);

router
    .route('/confirm/:token')
    .get(ctrlAuth.confirm);

router
    .route('/resend')
    .post(ctrlAuth.resend);

router
    .route('/restore/:token')
    .get(ctrlAuth.restore);

// users
router
    .route('/users/:name')
    .get(auth, ctrlUsers.usersList);

router
    .route('/users/privilege/:userid')
    .post(auth, ctrlUsers.usersPrivilege)

module.exports = router;