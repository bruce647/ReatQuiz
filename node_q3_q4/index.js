//Question3
//Author:Guanxing Lan 647-818-4101
function Question3() {
    const data = [
        { id: 1, name: 'Dan', value: 150 },
        { id: 2, name: 'Peter', value: 300 },
        { id: 3, name: 'Mark', value: 400 },
        { id: 4, name: 'Victor', value: 600 }
    ];
    let sum=0;
for(index in data){
    sum += data[index].value
}
console.log(sum)
return sum
};
Question3();