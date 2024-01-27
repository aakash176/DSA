let a = [10, 5, 21, 8, 17, 32, 4, 13, 19, 6, 25, 11, 7, 29, 16, 2, 14, 23, 1, 28];

for(var j = 1; j<a.length; j++){
    if(a[j] < a[j-1]){
        let i = j
        while(i > 0){
            if(a[i] < a[i-1]){
                [a[i], a[i-1]] = [a[i-1], a[i]]
            }
            i--
        }
    }
}

console.log(a)