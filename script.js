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
    if (+input_day.value > 31){
        error_day.textContent = "Must be a valid day"
        IsValid="false";
        return
    } else{
        error_day.textContent = "";
        IsValid="true"
    
    }

    if (+input_day.value == 0){
        error_day.textContent = "This field is required";
        IsValid = false;
        return
    } else {
        error_day.textContent = "";
        IsValid = true;
    }}

)

input_month.addEventListener("input", (e) => {
    if (+input_month.value > 12){
        error_month.textContent = "Must be a valid month"
        IsValid="false";
        return
    } else{
        error_month.textContent = "";
    }

    if (+input_month.value == 0){
        error_month.textContent = "This field is required";
        IsValid = false;
        return
    } else {
        error_month.textContent = "";
        IsValid = true;
    }}
);

input_year.addEventListener("input", (e) => {
    if (+input_year.value > 2025){
        error_year.textContent = "Must be a valid year"
        IsValid="false"
        return
    } else{
        error_year.textContent = "";
    }

    if (+input_year.value == 0){
        error_year.textContent = "This field is required";
        IsValid = false;
        return
    } else {
        error_year.textContent = "";
        IsValid = true;
    }}
);


function CalculateDate(e) {
    if (IsValid){
        let birthday = (`${input_month.value}/${input_day.value}/${input_year.value}`);
        console.log(birthday);
        let today = new Date(birthday);
        let ageDiffMill = Date.now() - today;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970; // Subtract 1970 to get the correct year difference
        let ageMonths = ageDate.getUTCMonth(); // Get the month difference
        let ageDay = ageDate.getUTCDate() - 1; // Get the day difference (subtract 1 to adjust for the start of the month)
        
        
         output_year.textContent = ageYears;
         output_month.textContent = ageMonths;
         output_day.textContent = ageDay;
             } else {
        alert("Please fill in all fields correctly.");
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

