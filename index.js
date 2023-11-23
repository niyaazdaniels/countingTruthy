let arr = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, 
                false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, 
                true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true]
                 function truthCount (){
                 let trueCount = 0;
                 for(let i = 0; i < arr.length; i++) {
                  if(arr[i] === true) {
                     trueCount++;
                  }
                }
                outputtrue.innerText='Number of true values found: ' + trueCount;
                console.log('Number of true values found: ' + trueCount);
                 }


                  function falseCount (){
                let falseCount = 0;
                for(let i = 0; i < arr.length; i++) {
                    if(arr[i] === false) {
                        falseCount++;
                    }
                }
                outputfalse.innerText = 'Number of false values found: ' + falseCount;
                console.log('Number of false values found: ' + falseCount);
                 }