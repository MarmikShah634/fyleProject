let annual_income = document.getElementById('annual_income');
let extra_income = document.getElementById('extra_income');
let age_group = document.getElementById('age_group');
let applicable_deductions = document.getElementById('applicable_deductions');

let dangerAnnualIncome = document.getElementById('dangerAnnualIncome');
let dangerExtraIncome = document.getElementById('dangerExtraIncome');
let dangerAgeGroup = document.getElementById('dangerAgeGroup');
let dangerApplicableDeductions = document.getElementById('dangerApplicableDeductions');

let validAnnualIncome = false
let validExtraIncome = false
let validAgeGroup = false
let validApplicableDeductions = false

let pattern = /^\d+$/;

annual_income.addEventListener('blur', () => {
    let str = annual_income.value;
    if (str != '' && pattern.test(str)) {
        annual_income.classList.remove('is-invalid');
        dangerAnnualIncome.classList.add('d-none');
        validAnnualIncome = true;
    }
    else {
        annual_income.classList.add('is-invalid');
        dangerAnnualIncome.classList.remove('d-none');
        validfirstname = false;
    }
})

extra_income.addEventListener('blur', () => {
    let str = extra_income.value;
    if (str != '' && pattern.test(str)) {
        extra_income.classList.remove('is-invalid');
        dangerExtraIncome.classList.add('d-none');
        validExtraIncome = true;
    }
    else {
        extra_income.classList.add('is-invalid');
        dangerExtraIncome.classList.remove('d-none');
        validExtraIncome = false;
    }
})

age_group.addEventListener('blur', () => {
    let str = age_group.value;
    if (str != 'None') {
        age_group.classList.remove('is-invalid');
        dangerAgeGroup.classList.add('d-none');
        validAgeGroup = true;
    }
    else {
        age_group.classList.add('is-invalid');
        dangerAgeGroup.classList.remove('d-none');
        validAgeGroup = false;
    }
})

applicable_deductions.addEventListener('blur', () => {
    let str = applicable_deductions.value;
    if (str != '' && pattern.test(str)) {
        applicable_deductions.classList.remove('is-invalid');
        dangerApplicableDeductions.classList.add('d-none');
        validApplicableDeductions = true;
    }
    else {
        applicable_deductions.classList.add('is-invalid');
        dangerApplicableDeductions.classList.remove('d-none');
        validApplicableDeductions = false;
    }
})

let annualIncomeValue = parseFloat(annual_income.value);
let extraIncomeValue = parseFloat(extra_income.value);
let ageGroupValue = parseFloat(age_group.value);
let applicableDeductionsValue = parseFloat(applicable_deductions.value);

let overallIncome = annualIncomeValue + extra_income - applicableDeductionsValue;
if (overallIncome > 800000) {
    let extra = overallIncome - 800000
    if (ageGroupValue < 40) {
        overallIncome = overallIncome - (0.3 * extra);
    }
    else if (ageGroupValue >= 40 && ageGroupValue < 60) {
        overallIncome = overallIncome - (0.4 * extra);
    }
    else {
        overallIncome = overallIncome - (0.1 * extra);
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validAnnualIncome && validExtraIncome && validAgeGroup && validApplicableDeductions) {
        let annualIncomeValue = parseFloat(annual_income.value);
        let extraIncomeValue = parseFloat(extra_income.value);
        let ageGroupValue = parseFloat(age_group.value);
        let applicableDeductionsValue = parseFloat(applicable_deductions.value);

        let overallIncome = annualIncomeValue + extraIncomeValue - applicableDeductionsValue;
        if (overallIncome > 800000) {
            let extra = overallIncome - 800000
            if (ageGroupValue < 40) {
                overallIncome = overallIncome - (0.3 * extra);
            }
            else if (ageGroupValue >= 40 && ageGroupValue < 60) {
                overallIncome = overallIncome - (0.4 * extra);
            }
            else {
                overallIncome = overallIncome - (0.1 * extra);
            }
        }
        localStorage.setItem('overallIncome', overallIncome);
        location.href = "next.html";
    }
    else {
        if (validAnnualIncome == false) {
            annual_income.classList.add('is-invalid');
            annual_income.focus();
            return false;
        }
        if (validExtraIncome == false) {
            extra_income.classList.add('is-invalid');
            extra_income.focus();
            return false;
        }
        if (validAgeGroup == false) {
            age_group.classList.add('is-invalid');
            age_group.focus();
            return false;
        }
        if (validApplicableDeductions == false) {
            applicable_deductions.classList.add('is-invalid');
            applicable_deductions.focus();
            return false;
        }
    }
})