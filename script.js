//your JS code here. If required.
let input = [1, 2, 3, 4];
      function manipulate(){
        return new Promise((resolve,reject)=>{
          let newInput = []
          for(let i of input){
            if(i%2==0) newInput.push(i)
          }
        setTimeout(()=>{
          resolve(newInput)
          let otpt = document.getElementById('output')
          otpt.innerText=newInput
        },1000)
        })
      }
      manipulate().then((newInput)=>{
        setTimeout(()=>{
          let otpt = document.getElementById('output')
          otpt.innerText=newInput.map(value=>value*2)
        },2000)
        console.log(newInput)
      })