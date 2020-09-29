const clockContainer = document.querySelector(".js-clock"), // HTML의 클래스 이름 및 태그를 가져오기 위해 querySelector를 사용
    clockTitle = clockContainer.querySelector("h1");

function getTime() { // 현재 시간 가져오기
    const date = new Date(); // Date는 객체임
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`: seconds}`;}

function init() { // 초기화
    getTime();
    setInterval(getTime, 1000);
}
init();