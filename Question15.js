var prompt=require('prompt-sync')()
    arr= [];
    
    getArry();
    displayArray(arr)

    function getArry() {
        var limit= parseInt(prompt('please enter the limit of array'));
        for(var i=0; i<limit; i++){
           arr[i]=parseInt(prompt(''))
            // Array1.push(input)
        }
        return arr;
    }

    function displayArray(arr){
        console.log(arr);
    }
