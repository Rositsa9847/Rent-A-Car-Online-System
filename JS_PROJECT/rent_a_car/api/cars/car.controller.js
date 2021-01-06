let Cars = require("./car.dao");

exports.createCar = function (req, res, next) {
  let car = new Cars(req.body);

  Cars.create(car, function (err, car) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      console.log(car);
      res.json({
        message: "Car created successfully",
      });
    }
  });
};

exports.getCars = function (req, res, next) {
  Cars.get({}, function (err, cars) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      cars: cars,
    });
  });
};

exports.getCarById = function (req, res, next) {
  Cars.get({ id: req.params._id }, function (err, cars) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      cars: cars,
    });
  });
};

exports.updateCar = function (req, res, next) {
  let car = {
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    doors: req.body.doors,
    seats: req.body.seats,
    isAvailable: req.body.isAvailable,
    rentedBy: req.body.rentedBy,
    location: req.body.location,
  };

  Cars.update({ _id: req.params.id }, car, function (err, car) {
    if (err) {
      console.log(err);
      res.json({
        error: err,
      });
    } else {
      console.log(car);
      res.json({
        message: "Car updated successfully",
      });
    }
  });
};

exports.removeCar = function (req, res, next) {
  Cars.delete({ _id: req.params.id }, function (err, car) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Car deleted successfully",
    });
  });
};