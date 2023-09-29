// Count Characters in String
{   
    const cnt_obj = (arr,ch) => arr.reduce((accum,item) => item === ch ? accum+1: accum,0)
  
    const construct_obj = (str) => str.split('').reduce((accum,ch,ind,arr) => {
     if(!(ch in accum)) {
       accum[ch] = cnt_obj(arr,ch)  
     }
     return accum
    },{}) 
    console.log(construct_obj('akash_impetus_tech')) 
    /*{ "a": 2, "k": 1,"s": 2,"h": 2,"_": 2,"i": 1,"m": 1,"p": 1,"e": 2,"t": 2,
        "u": 1, "c": 1  } */
}