let input = prompt('갯수를 정해주세요:'); //사용자에게 input을 입력받음
alert(input); //입력값 알림

const container = document.getElementById('container');
//container에 #container을 불러옴

let inputTwo = input*input;

//inputTwo값만큼 반복하여 div를 생성
for (i = 0; i < inputTwo; i++) {
    // console.log(container);

    let div = document.createElement('div'); //div변수에 div노드를 만들어 저장
    div.classList.add('eventTouch'); //div에 .event 를 추가해줌
    // div.textContent= ("@");
    container.appendChild(div); //container에 div를 Child로 상속
}

container.style.gridTemplateColumns= `repeat(${input}, 1fr)`;
//container의 style 노드를 가져와 input값을 입력하여 css를 수정

const eventTouch = document.querySelector(".eventTouch"); // .event 를 event변수에 추가
eventTouch.addEventListener('mousemove', ()=>{
    eventTouch.style.backgroundColor= 'red';
    console.log("안녕하세요");
})