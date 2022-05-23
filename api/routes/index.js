const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const credentials = require('../../credentials.json');

const auth = jwt({
    secret: credentials.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
})


const ctrlFamilies = require('../controllers/families');
const ctrlLocations = require('../controllers/locations');
const ctrlAuth = require('../controllers/authentication');
const ctrlUsers = require('../controllers/users');
const ctrlImages = require('../controllers/images');
const ctrlPasswords = require('../controllers/password');

const ctrlAdminAuth = require('../controllers/admin/authentication');
const ctrlAdminFamilies = require('../controllers/admin/families');
const ctrlAdminUsers = require('../controllers/admin/users');



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

router
    .route('/families/pdf/:familyid')
    .get(ctrlFamilies.familiesPDF);

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

// password
router
    .route('/forgot')
    .post(ctrlPasswords.forgot);

router
    .route('/reset/:token')
    .post(ctrlPasswords.reset);

router
    .route('/change')
    .post(auth, ctrlPasswords.change);

// users
router
    .route('/users/:name')
    .get(auth, ctrlUsers.usersList);

router
    .route('/users/privilege/:userid')
    .post(auth, ctrlUsers.usersPrivilege);


router
    .route('/images/:imageid')
    .get(auth, ctrlImages.postsReadOne);

// api for admin
router
    .route('/admin/login')
    .post(ctrlAdminAuth.login);

// families

router
    .route('/admin/families')
    .post(auth, ctrlAdminFamilies.familiesList);

// users

router
    .route('/admin/users')
    .get(auth, ctrlAdminUsers.usersList);

router
    .route('/admin/users/:userid')
    .post(auth, ctrlAdminUsers.usersUpdateOne);

module.exports = router;