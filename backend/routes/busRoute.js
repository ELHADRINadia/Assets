const express = require('express');
const router = express.Router();
const { getbases,search, createbas, updatebas, deletebas } = require('../controllers/basController');

router.route('/get_buses').get(getbases);
router.route('/search').get(search);
router.route('/createbas').post(createbas);
router.route('/updatebus/:id').put(updatebas);
router.route('/deletebus/:id').delete(deletebas);

module.exports = router;