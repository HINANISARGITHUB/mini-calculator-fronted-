// function calculate() {
//     let input = document.getElementById("input").value;
//     fetch( , {          // backend deployment link
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         }

// }


// function calculate() {
//     let input = document.getElementById("input").value;

//     fetch("", {   // agar deploy ho to yahan apna live link lagana backed ka
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ expression: input })
//     })
//     .then(res => res.json())
//     .then(data => {
//         if (data.result !== undefined) {
//             document.getElementById("result").innerText = "Result: " + data.result;
//         } else {
//             document.getElementById("result").innerText = data.Error;
//         }
//     })
//     .catch(err => {
//         document.getElementById("result").innerText = "Error connecting server";
//     });
// }


function calculate() {
    let input = document.getElementById("calc-input").value;

    fetch("https://mini-calculator-backend.vercel.app", {   // agar deploy ho to yahan apna live link lagana backed ka
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ expression: input })
    })
    .then(res => res.json())
    .then(data => {
      
            document.getElementById("result-text").innerText = data.result || data.error;
       
    })
}

// http://localhost:5000/calculator