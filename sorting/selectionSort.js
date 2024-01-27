let a = [10, 5, 21, 8, 17, 32, 4, 13, 19, 6, 25, 11, 7, 29, 16, 2, 14, 23, 1, 28]

for(var i = 0; i<a.length-1; i++){
    let min = i
    for(var j = i+1; j<a.length; j++){
        if(a[j] < a[min]){
            min = j
        }
    }
    [a[i],a[min]] = [a[min],a[i]]
    
    
    
}

console.log(a)