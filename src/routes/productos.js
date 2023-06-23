const express =require('express')
const userSchema = require('../models/productos')

const router = express.Router()

router.post('/products', (req, res) => {
    const user = userSchema(req.body)
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }))

})

router.get("/products", (req, res) => {
    userSchema.find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

router.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    userSchema.deleteone({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
})

router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, descr, price } = req.body;
    userSchema.updateOne({ _id: id }, { $set: { name, descr, price } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router