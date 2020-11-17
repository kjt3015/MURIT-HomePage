let playerSelection = 0; //플레이어의 선택
let computerSelection = 0; //컴퓨터의 선택
let youWin = 0; //플레이어의 승리 횟수
let computerWin = 0; //컴퓨터의 승리 횟수
let round = 1; //라운드 횟수

//랜덤으로 컴퓨터의 선택을 만듬
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    // 0~2까지의 수를 randomNumber변수에 저장
    switch (randomNumber) {
        case 0:
            return "바위";
        case 1:
            return "가위";
        case 2:
            return "보";
    }
}

//플레이어와 컴퓨터의 선택을 최종결정
function playRound() {
    //잘못된 입력을 받았을 때
    if (playerSelection !== "바위" && playerSelection !== "가위" && playerSelection !== "보" && playerSelection !== "특수문자") {
        console.log("잘못된 입력입니다 다시 입력해주세요");
        document.getElementById("gamedis").value += "잘못된 입력입니다 다시 입력해주세요\r";
    }
    //옳바른 입력을 받았을 때
    else {
        computerSelection = computerPlay();

        console.log("Computer: " + computerSelection);
        document.getElementById("gamedis").value += "computer: " + computerSelection + "\n";

        console.log("You: " + playerSelection);
        document.getElementById("gamedis").value += "you: " + playerSelection + "\n";

        round++;
    }
}
//플레이어와 컴퓨터의 두 결과값을 비교해 승리 판정
function Winner() {
    //비겼을 경우
    if (playerSelection === computerSelection) {
        console.log("비겼습니다(양쪽 선수 점수 획득)");
        document.getElementById("gamedis").value += "비겼습니다(양쪽 선수 점수 획득)\r";

        youWin++;
        computerWin++;

        document.getElementById("userImg").src = "image/RspGame/h.jpg";
        document.getElementById("computerImg").src = "image/RspGame/h.jpg";
    }
    //플레이어가 바위를 냈을 경우
    else if (playerSelection === "바위") {
        switch (computerSelection) {
            case "보":
                console.log("당신은 졌습니다");
                document.getElementById("gamedis").value += "당신은 졌습니다\r";

                computerWin++;

                document.getElementById("computerImg").src = "image/RspGame/win/paper.png";
                document.getElementById("userImg").src = userImg_info();

                break;

            case "가위":
                console.log("당신은 이겼습니다");
                document.getElementById("gamedis").value += "당신은 이겼습니다.\r";

                youWin++;

                document.getElementById("computerImg").src = computerImg_info();
                document.getElementById("userImg").src = "image/RspGame/win/rock.png";

                break;

            default:
                break;
        }
    }
    //플레이어가 보를 냈을 경우
    else if (playerSelection === "보") {
        switch (computerSelection) {
            case "가위":
                console.log("당신은 졌습니다");
                document.getElementById("gamedis").value += "당신은 졌습니다.\r";

                computerWin++;

                document.getElementById("computerImg").src = "image/RspGame/win/scissor.png";
                document.getElementById("userImg").src = userImg_info();

                break;

            case "바위":
                console.log("당신은 이겼습니다");
                document.getElementById("gamedis").value += "당신은 이겼습니다.\r";

                youWin++

                document.getElementById("computerImg").src = computerImg_info();
                document.getElementById("userImg").src = "image/RspGame/win/paper.png";

                break;

            default:
                break;
        }
    }
    //플레이어가 가위를 냈을 경우
    else if (playerSelection === "가위") {
        switch (computerSelection) {
            case "바위":
                console.log("당신은 졌습니다");

                computerWin++;

                document.getElementById("computerImg").src = "image/RspGame/win/rock.png";
                document.getElementById("userImg").src = userImg_info();

                break;

            case "보":
                console.log("당신은 이겼습니다");

                youWin++;

                document.getElementById("computerImg").src = computerImg_info();
                document.getElementById("userImg").src = "image/RspGame/win/scissor.png";

                break;

            default:
                break;
        }
    }
    else if (playerSelection === "특수문자" && round < 3) {
        document.getElementById("computerImg").src = "image/RspGame/h.jpg";
        document.getElementById("userImg").src = "image/RspGame/h.jpg";
        youWin++;
    }
    else if (playerSelection === "특수문자" && round > 2) {
        alert("당신은 욕심쟁이!");
        location.reload(true);
    }

    console.log("당신의 점수: " + youWin);
    document.getElementById("gamedis").value += "당신의 점수: " + youWin + "\r";

    console.log("컴퓨터의 점수: " + computerWin);
    document.getElementById("gamedis").value += "컴퓨터의 점수: " + computerWin + "\r";
}
//게임을 시작하는 함수
function game() {
    //버튼을 누를시의 Textbox의 입력값을 html에서 가져온다
    let userInput = document.getElementById("userInput").value;
    //PlayerSelection에 넣어 플레이어의 선택 확정
    playerSelection = userInput;
    //총 5라운드를 진행
    if (round < 6) {
        console.log("@@@@@ " + round + " 라운드  @@@@@");
        document.getElementById("gamedis").value += "@@@@@ " + round + " 라운드  @@@@@\n";

        playRound(); //플레이어와 컴퓨터의 최종선택 확정
        Winner(); //승리자 판단
    }

    //5회 실시후 최종 스코어를 통해 최종승리 판정
    if (round > 5 && youWin < computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리보다 적을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 컴퓨터가 이겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 컴퓨터가 이겼습니다. ***\n";
    } else if (round > 5 && youWin > computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리보다 많을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 당신이 이겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 당신이 이겼습니다. ***\n";
    } else if (round > 5 && youWin == computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리와 같을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 비겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 비겼습니다. ***\n";
    }

    //textarea 스크롤을 가장 아래로 해주는 코드
    var textarea = document.getElementById('gamedis');
    textarea.scrollTop = textarea.scrollHeight;
}
//사용자의 입력값에 따라 이미지 변경
function userImg_info() {
    let img_2;
    switch (playerSelection) {
        case "가위":
            img_2 = "image/RspGame/scissor.png";
            return img_2;

        case "바위":
            img_2 = "image/RspGame/rock.png";
            return img_2;

        case "보":
            img_2 = "image/RspGame/paper.png"
            return img_2;

        default:
            break;
    }
}
//컴퓨터의 입력값에 따라 이미지 변경
function computerImg_info() {
    let img_1;
    switch (computerSelection) {
        case "가위":
            img_1 = "image/RspGame/scissor.png";
            return img_1;

        case "바위":
            img_1 = "image/RspGame/rock.png";
            return img_1;

        case "보":
            img_1 = "image/RspGame/paper.png"
            return img_1;

        default:
            break;
    }
}

function enterPress() {
    game();
}

// function test(){
//     document.getElementById("gamedis").value +="아하\r";
// }
// playerSelection_2=0;

function game_2() {
    if (round < 6) {
        console.log("@@@@@ " + round + " 라운드  @@@@@");
        document.getElementById("gamedis").value += "@@@@@ " + round + " 라운드  @@@@@\n";

        playRound();
        Winner();
    }
    //5회 실시후 최종 스코어를 통해 최종승리 판정
    if (round > 5 && youWin < computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리보다 적을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 컴퓨터가 이겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 컴퓨터가 이겼습니다. ***\n";
    } else if (round > 5 && youWin > computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리보다 많을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 당신이 이겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 당신이 이겼습니다. ***\n";
    } else if (round > 5 && youWin == computerWin) {//5라운드를 진행했고, 내 승리가 컴퓨터의 승리와 같을때
        console.log("*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 비겼습니다. ***");
        document.getElementById("gamedis").value += "*** 컴퓨터 " + computerWin + " : 당신 " + youWin + " 으로 비겼습니다. ***\n";
    }

    //textarea 스크롤을 가장 아래로 해주는 코드
    var textarea = document.getElementById('gamedis');
    textarea.scrollTop = textarea.scrollHeight;
}

// function reset(){
//     location.reload(true);
// }
/*

<참고 자료 출처>

[html와 js간 정보교류 방법에 대해 공부한 사이트]
* https://m.blog.naver.com/PostView.nhn?blogId=finekiller&logNo=70135711013&proxyReferer=https:%2F%2Fwww.google.com%2F

[html이미지 변환]
* https://www.python2.net/questions-220776.htm
* https://qastack.kr/programming/11722400/programmatically-change-the-src-of-an-img-tag

*/
