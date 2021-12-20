const express = require('express')
const router = express()
const port = 3000



router.get('/hello', (req, res) => {
    res.send('Hello World!')
  })

router.get('/abc', (req, res) => {
    res.send('abc')
  })


  router.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = router;
