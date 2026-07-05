"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/users/', (_req, res) => {
    res.json({ resource: 'users', message: 'users endpoint ready' });
});
router.get('/teams/', (_req, res) => {
    res.json({ resource: 'teams', message: 'teams endpoint ready' });
});
router.get('/activities/', (_req, res) => {
    res.json({ resource: 'activities', message: 'activities endpoint ready' });
});
router.get('/leaderboard/', (_req, res) => {
    res.json({ resource: 'leaderboard', message: 'leaderboard endpoint ready' });
});
router.get('/workouts/', (_req, res) => {
    res.json({ resource: 'workouts', message: 'workouts endpoint ready' });
});
exports.default = router;
