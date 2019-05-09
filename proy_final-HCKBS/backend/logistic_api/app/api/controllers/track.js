const trackModel = require('../models/track');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        trackModel.findById(req.params.trackId, function (err, trackInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Track found!", data: { movies: trackInfo } });
            }
        });
    },
    //ToDo: Implementar listado de envios en frontend!!!! NOTION 0104
    //List tracks (NO FRONT)
    getAll: function (req, res, next) {
        let trackList = [];
        trackModel.find({}, function (err, tracks) {
            if (err) {
                next(err);
            } else {
                for (let track of tracks) {
                    tracksList.push({ id: track._id, dest: track.dest, remit: track.remit, status: track.status });
                }
                res.json({ status: "success", message: "OK, track list fount!", data: { trakcs: trackList } });

            }
        });
    },
    //Update track list (FRONT)
    updateById: function (req, res, next) {
        trackModel.findByIdAndUpdate(req.params.trackId, { name: req.body.name }, function (err, trackInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "OK, tracking data updated!", data: null });
            }
        });
    },
    //Delete track (NO FRONT)
    deleteById: function (req, res, next) {
        trackModel.findByIdAndRemove(req.params.trackId, function (err, trackInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "OK, tracking deleted correctly!", data: null });
            }
        });
    },
    //Create new track (FRONT) -- Note: Default value for status is "Registrado"
    create: function (req, res, next) {
        movieModel.create({ dest: req.body.dest, remit: req.body.remit, status: "Registrado" }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "OK, tracking created correctly!", data: null });

        });
    },
}