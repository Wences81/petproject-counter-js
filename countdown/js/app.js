const items = document.querySelectorAll('.countdown-items >  h4');


let countdownDate = new Date(2022, 11, 18, 10, 0, 0).getTime();

function getCountdownTime() {
    const now = new Date().getTime();

    const distance = countdownDate - now
}