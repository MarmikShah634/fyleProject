function value(){
    let second = document.getElementById('second');
    let ans = localStorage.getItem('overallIncome');
    second.innerHTML = ans;
    localStorage.clear();
}