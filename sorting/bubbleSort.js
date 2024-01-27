//Algorithm finds the maximun element and moves to the last of array

let a = [13,9,24,52,64,67,1]

let j = a.length-1

while(j > 0){
    let flag = false
    for(var i = 0; i<j; i++){
        if(a[i] > a[i+1]){
            [a[i],a[i+1]] = [a[i+1], a[i]]
            flag = true
        }
        
    }
    
    if(!flag){
        break
    }
    j--
}

console.log(a)