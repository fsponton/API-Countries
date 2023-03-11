const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activities = require('../routes/activitiesRouter');
const countries = require('../routes/countriesRouter')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countries);
router.use('/activities', activities);

module.exports = router;
