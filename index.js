const express = require('express')
let app = express()
app.use(express.static('.'))

app.get('/calc',(req,res)=>{
    console.log(req.query.eq)
    let ans
    try{ ans = eval(req.query.eq) }
    catch(e){ ans =e }
    res.send(''+ans)
})

app.listen(2018,()=>{console.log('listening port 2018')})