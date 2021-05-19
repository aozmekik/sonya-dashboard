var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    il_id: Number,
    id_adi: String,
});

var townSchema = new mongoose.Schema({
    ilce_id: Number,
    ilce_adi: String,
    il_id: Number,
    il_adi: String,
});


var districtSchema = new mongoose.Schema({
    mahalle_id: Number,
    mahalle_adi: String,
    ilce_id: Number,
    ilce_adi: String,
    il_id: Number,
    il_adi: String,
});


var streetSchema = new mongoose.Schema({
    sokak_id: Number,
    sokak_adi: String,
    mahalle_id: Number,
    mahalle_adi: String,
    ilce_id: Number,
    ilce_adi: String,
    il_id: Number,
    il_adi: String,
});

mongoose.model('City', citySchema, 'Cities');
mongoose.model('Town', townSchema, 'Towns');
mongoose.model('District', districtSchema, 'Districts');
mongoose.model('Street', streetSchema, 'Streets');