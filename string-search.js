const products = [
    'Dell hardcore i23 120GB laptop',
    'Iphone 1TB Camera Flashlight',
    'jhakanaka laptop with unlimited storage',
    ' Lenovo Laptop',
    'htc high price Phone',
    'Dell purple color phone with laptop'
];

const searching = 'dell';
// indexof

const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product);
    }
}

// console.log(output);

for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product);
    }
}
// console.log(output);

// starts with
for(const product of products){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);