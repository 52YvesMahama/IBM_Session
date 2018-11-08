

// 1. listen for key press on window, 
// 2. if key is enter key, check using the key code, add the values
// 3  adding the values
//      get the first input value 
//      get second input value
//      add
//      set sum as innerHTML for display


window.addEventListener("keydown", function (e) {
    console.log('Key pressed')

    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    //validation of the input...\\\
    console.log('enter Key pressed');

    let v1;
    let v2;

    v1 = document.getElementById("value1").value;
    v2 = document.getElementById("value2").value;


    console.log(Number(v1)+(Number(v2)));
    console.log(Number(v1)-(Number(v2)));
    console.log(Number(v1)*(Number(v2)));
    console.log(Number(v1)/(Number(v2)));

}    


// // sum 

// var sum = [v1, v2].reduce(add, 0);

// function add(v1, v2) {
//     return v1 + v2;
// }

// console.log(sum); // 6