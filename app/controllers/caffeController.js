const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Caffe = require('./../models/Caffe');
const caffeEnums = require('./../enums/caffeEnums');

exports.find = async (req, res) => {
  try {
    const caffe = await Caffe.findOne({
      _id: req.params.id
    });
    if (!caffe) {
      res.status(404).json({
        message: caffeEnums.NOT_FOUND
      })
    }
    res.status(200).json({
      caffe: caffe
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}
exports.create = async (req, res) => {
  try {
    const newCaffe = new Caffe({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      address: req.body.address
    })
    await newCaffe.save()
    res.status(201).json({
      message: caffeEnums.CREATED
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}

exports.delete = async (req, res) => {
  try {
    const caffe = await Caffe.findOne({
      _id: req.params.id
    });
    if (!caffe) {
      res.status(404).json({
        message: caffeEnums.NOT_FOUND
      })
    }
    await Caffe.deleteOne({
      _id: req.params.id
    })
    res.status(201).json({
      message: caffeEnums.DELETED
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}

exports.update = async (req, res) => {
  try {
    const caffe = await Caffe.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body }
      });
    if (!caffe) {
      res.status(404).json({
        message: caffeEnums.NOT_FOUND
      })
    }

    res.status(200).json({
      message: caffeEnums.UPDATED
    })
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}
