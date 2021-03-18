const router = require('express').Router();
const withAuth = require('../utils/auth');
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('/create', withAuth, (req,res) => {
    res.render('create-post')
})
module.exports = router;