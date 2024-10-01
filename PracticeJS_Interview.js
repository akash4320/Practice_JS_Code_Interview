// Count Characters in String
{
  const cnt_obj = (arr, ch) => arr.reduce((accum, item) => item === ch ? accum + 1 : accum, 0)

  const construct_obj = (str) => str.split('').reduce((accum, ch, ind, arr) => {
    if (!(ch in accum)) {
      accum[ch] = cnt_obj(arr, ch)
    }
    return accum
  }, {})
  console.log(construct_obj('akash_impetus_tech'))
  /*{ "a": 2, "k": 1,"s": 2,"h": 2,"_": 2,"i": 1,"m": 1,"p": 1,"e": 2,"t": 2,
      "u": 1, "c": 1  } */
}

// Event Handler in NodeJS
{
  var event = require('events')
  var eventEmitter = new event.EventEmitter();

  function myHandler() {
    console.log('My Handler called after event emitted')
  }

  eventEmitter.on('callEvent', myHandler)

  console.log('About to Call the Event')
  eventEmitter.emit('callEvent')

  // About to Call the Event
  // My Handler called after event emitted
}

// Practice Routes HandsOn 
{
  const express = require('express')
  const app = express()
  const userRoute = require('../routes/userRoute')
  app.use(express.json())
  app.use('/api/cart', userRoute)

  // userRoute File
  const express = require('express')
  const router = express.Router()
  router.route('/').get(getAllItemsController)
  exports.module = router
}

// Count Repeated Characters Seperately
const countChar = (inputStr) => {
  const inputArr = inputStr.split('');
  let i=0;
  while (i < inputArr.length) {
   const st = inputArr[i];
   let count = 1;
   let j=i+1;
   while(st === inputArr[j] && j < inputArr.length){
     count += 1;
     j += 1
   }
   i = j;
   console.log(`${st}-${count}`)
  }
}
countChar("aabbcccaaaabbb");
countChar("a");
