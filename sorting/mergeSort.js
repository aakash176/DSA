let a = [5,4,3,2,1]
function mergeSort(a){
    let l=0
    let h=a.length-1
    ms(a,l,h)
}

function ms(a,l,h){
    if(l==h) return
    let m = Math.floor((l+h)/2)
    ms(a,l,m)
    ms(a,m+1,h)
    merge(a,l,m,h)
    
}

function merge(a,l,m,h){
    let left = l
    let right = m+1
    let temp = []
    while(left <= m && right <= h){
        if(a[left] <= a[right]){
            temp.push(a[left])
            left++
        }
        else{
            temp.push(a[right])
            right++
        }
    }
    while(left <= m){
        temp.push(a[left])
        left++
    }
    while(right <= h){
        temp.push(a[right])
        right++
    }
    
    for(var i=l; i<=h;i++){
        a[i] = temp[i-l]
    }
}

mergeSort(a)
console.log(a)