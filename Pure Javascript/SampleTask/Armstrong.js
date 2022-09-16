let a = prompt("Enter Lower Number:")
let b = prompt("Enter Upper Number:")
for(let i=a;i<=b;i++){
    let num = i;
    let sum = 0;
    while(num>0){
        let remainder = num%10;
        sum=sum+(remainder*remainder*remainder)
        num=num/10
    }
    if(sum==i){
        console.log(sum)
    }
}