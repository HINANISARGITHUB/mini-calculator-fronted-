function calculate() {
    let input = document.getElementById("calc-input").value;

    fetch("https://mini-calculator-backend.vercel.app/calculator", {   // agar deploy ho to yahan apna live link lagana backed ka
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
