const {Router} = require('express')
const router = Router()
const userCtrl = require('../controllers/user.controller')

router.post('/',createOne)
router.get('./', userCtrl.getAll)
router.get('/:id',userCtrl.getOne);
//Update
router.put('/:id',userCtrl.updateOne)
//Delete
router.delete('/:id',userCtrl.deleteOne);

module.exports=router;