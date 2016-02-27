/// <reference path="../typings/node/node.d.ts"/>
var City = require("../models/city");
var CityController = (function () {
    function CityController() {
    }
    CityController.prototype.get = function (req, res) {
        City.find(req.params.id).exec()
            .then(function (city) {
            res.json(city);
        });
    };
    CityController.prototype.create = function (req, res) {
        var city = new City();
        city.name = req.body.name;
        city.location = "Massachusetts";
        city.isValid()
            .then(function () {
            city.save();
        })
            .then(function () {
            res.json(city);
        });
        /* city.validate()
         .then(function() {
         return city.save();
         })
         .then(function(saved_model) {
         res.json(saved_model);
         });*/
    };
    return CityController;
})();
module.exports = CityController;
//# sourceMappingURL=citycontroller.js.map