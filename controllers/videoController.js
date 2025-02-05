const Video = require('../models/videoModel');
const Playlist = require('../models/playlistModel');
const jwt = require('jsonwebtoken');


exports.agregarVideo = async (req, res) => {
    try {
        const authToken = req.headers['authorization'];
        if (!authToken) {
            return res.status(401).json({ error: 'Token de autorización no proporcionado' });
        }

        const decodedToken = jwt.verify(authToken.split(' ')[1], '12345');
        const userId = decodedToken.userId;

        const { nombre, url, descripcion, playlistId, videoId, thumbnail } = req.body;
        const video = new Video({ nombre, url, descripcion, playlistId, userId, videoId, thumbnail });
        await video.save();

        await Playlist.findByIdAndUpdate(playlistId, { $inc: { totalVideos: 1 } });

        res.status(201).json({ mensaje: 'Video agregado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.editarVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, url, descripcion } = req.body;
        const videoActualizado = await Video.findByIdAndUpdate(id, { nombre, url, descripcion }, { new: true });
        if (!videoActualizado) {
            return res.status(404).json({ error: 'Video no encontrado' });
        }
        res.json({ mensaje: 'Video actualizado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.eliminarVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const video = await Video.findById(id);
        if (!video) {
            return res.status(404).json({ error: 'Video no encontrado' });
        }

        await Video.findByIdAndDelete(id);

        await Playlist.findByIdAndUpdate(video.playlistId, { $inc: { totalVideos: -1 } });

        res.json({ mensaje: 'Video eliminado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};