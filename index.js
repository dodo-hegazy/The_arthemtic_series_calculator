function calculateAndShow() {
//    take first and last numbers from the input fields
    let F = Number(document.getElementById("firstNumber").value);
    let L = Number(document.getElementById("lastNumber").value);
    
    // calculate the count of numbers between F and L 
    let count = L - F + 1; 
    
    // practice the formula of arthmetic series
    let result = (F + L) * (count / 2);
    
     // put the result in the result box
    document.getElementById("resultValue").innerText = `🎉The Result is : ${result}`;
}
