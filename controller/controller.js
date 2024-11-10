const products = require('../data/data.js')

const index = (req, res) => {
    res.json({
        data: products,
        counter: products.length

    })

}










module.exports = {
    index
}