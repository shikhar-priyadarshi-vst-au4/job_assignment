const router = require ('express').Router();
const controller = require ('../controllers/index');
//router.post('/viewslate/:slateName', controller.viewSlate); //show board
router.post('/createslate/:slateName', controller.createSlate); // create a board
//router.post('/viewlist/:viewId', controller.viewList); //view List
router.post('/viewslate/:slateId/createlist', controller.createList); // create a list
router.post('/viewlist/:listId/createtask',controller.createTask); // create a Task and can assign
router.post('/task/:taskId', controller.editTask);
router.post('/movetasks/:listIdOne/:taskIdOne/:listIdTwo/:taskIdTwo', controller.moveTask);
module.exports = router;
