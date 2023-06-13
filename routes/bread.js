const router = require("express").Router();
const { getAllBread, getBreadById } = require("../controllers/bread");

//GET / all breads
router.get("/", getAllBread);

//GET /:id get bread by id
router.get("/:id", getBreadById);

//POST / create bread

//

module.exports = router;
