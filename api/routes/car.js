const express = require('express');
//for verbs and endpoints
const router = express.Router();

// //for multer
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');  //pass potential errors and dirname
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });

// //mime filter
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         //accept a file
//         cb(null, true);
//     } else {
//         //reject a file
//         cb(null, false);
//     }
// };

// //or pass {dest: 'uploads/'}
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 10
//     },
//     fileFilter: fileFilter
// });

// //for jwt token verification
// const checkAuth = require('../middleware/check-auth');

//for controller
const CarsController = require('../controller/flats');

router.get('/', CarsController.products_get_all);

router.post('/', CarsController.products_post);

router.get('/:id', CarsController.products_get_single);

// router.patch('/:id', CarsController.products_patch);

router.delete('/:id', CarsController.products_delete);

module.exports = router;