let arr=[9,7,8,3,2,1];
let n = 5;
function mergeSort(arr,low,high){
    // let m=0;
    if(low<high){
    let mid=Math.floor((low+high)/2)
    // low++
    mergeSort(arr,low,mid)
    // console.log("low",low);
    // m += low
    }
    // console.log("m",m);
}
mergeSort(arr,0,n)