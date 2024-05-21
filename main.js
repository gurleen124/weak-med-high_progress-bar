let progressBar = document.getElementById("progress-bar");
let inputWidth = document.getElementById("inputWidth");
let submit = document.getElementById('submitbtn');

// increasing the width on submit button click
submit.addEventListener('click', function () {
    let input = inputWidth.value;
    progressBar.style.width = input + "%";
})


