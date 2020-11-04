const express = require('express')
const router = express()
const port = 3001



router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  router.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  module.exports = router;