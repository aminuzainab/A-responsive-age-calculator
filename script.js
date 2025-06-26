// Output
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// Input
let IsValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
// const submit_btn = document.querySelector(".submit-btn");

// Error
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");


input_day.addEventListener("input", (e) => {
    if (input_day.value === ""){
        error_day.textContent = "";
        input_day.classList.remove("input-error");
        IsValid = false;
        return;
    }

    if (+input_day.value <= 0){
        error_day.textContent = "Must be a valid date";
        input_day.classList.add("input-error");
        IsValid="false";
        return
    }
    else if (+input_day.value > 31){
        input_day.classList.add("input-error");
        error_day.textContent = "Must be a valid date";
        IsValid="false";
        return
    }
    else {
        input_day.classList.remove("input-error")
        error_day.textContent = "";
            IsValid = true;
        }
    });



input_month.addEventListener("input", (e) => {
    if (input_month.value === ""){
        input_month.classList.remove("input-error");
        error_month.textContent = "";
        IsValid = false;
        return;
    }

    if (+input_month.value <= 0){
        input_month.classList.add("input-error");
        error_month.textContent = "Must be a valid input"
        IsValid="false";
        return
    } 
    else if (+input_month.value > 12){
        input_month.classList.add("input-error");
        error_month.textContent = "Must be a valid month" 
        IsValid="false";
        return 
    }
    else{
        input_month.classList.remove("input-error")
        error_month.textContent = "";
        IsValid = true;
    }}
);

input_year.addEventListener("input", (e) => {
    if (input_year.value === ""){
        input_year.classList.remove("input-error");
        error_year.textContent = "";
        IsValid = false;
        return;
    }   
    if (+input_year.value <= 0){
        input_year.classList.add("input-error");
        error_year.textContent = "Must be a valid year"
        IsValid="false"
        return
    }

    else if (+input_year.value > new Date().getFullYear()){
        input_year.classList.add("input-error");
        error_year.textContent = "Must be a valid year";
        IsValid="false";
        return;
    }

    else{
        input_year.classList.remove("input-error")
        error_year.textContent = "";
        IsValid = true;
    }
}
);


function CalculateDate(e) {
    e.preventDefault();
    if (IsValid === true) {
        const birthDay = parseInt(input_day.value, 10);
        const birthMonth = parseInt(input_month.value, 10);
        const birthYear = parseInt(input_year.value, 10);

        const today = new Date();
        let years = today.getFullYear() - birthYear;
        let months = today.getMonth() + 1 - birthMonth;
        let days = today.getDate() - birthDay;

        if (days < 0) {
            months -= 1;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        if (years < 0 || months < 0 || days < 0) {
            error_day.textContent = "Enter a valid date";
            error_month.textContent = "Enter a valid date";
            error_year.textContent = "Enter a valid date";
            output_year.textContent = "--";
            output_month.textContent = "--";
            output_day.textContent = "--";
            return;
        } else {
            error_day.textContent = "";
            error_month.textContent = "";
            error_year.textContent = "";
        }
        


        output_year.textContent = years;
        output_month.textContent = months;
        output_day.textContent = days;

    } else {
        input_day.classList.add("input-error");
        input_month.classList.add("input-error");
        input_year.classList.add("input-error");
        error_day.textContent = "This field is required";
        error_month.textContent = "This field is required";
        error_year.textContent = "This field is required";
    }
}
submit_btn.addEventListener("click", CalculateDate)















// submit_btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (input_day.value === "" || input_month.value === "" || input_year.value === "") {
//         error_day.textContent = "This field is required";
//         error_month.textContent = "This field is required";
//         error_year.textContent = "This field is required";
//     } else {
//         error_day.textContent = "";
//         error_month.textContent = "";
//         error_year.textContent = "";
//         IsValid = true;
//     }

//     if (IsValid) {
//         
        
//        
// }

