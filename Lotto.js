/*
4. 게임을 판정한다.
- 사용자가 입력한 6개의 숫자가 모두 맞으면 1등
- 사용자가 입력한 숫자중 5개가 맞고, 보너스 숫자 하나가 맞으면 2등
- 사용자가 입력한 숫자중 5개가 맞으면 3등
- 4개 일치시 4등
- 3개 일치시 5등

5. 결과를 출력한다.
- 게임 등수를 출력
- 무슨 숫자를 맞췄는지 출력
- 등수에 따른 보상 출력
*/

//2. 사용자에게 번호를 입력받으면 로또 게임이 시작된다.
const lottoGame = (() => {
    let randomBall = new Array();
    let bonusBall = 0;

    //1. checkList의 Value를 읽어서 checkListValue[]에 저장함
    function readCheckList() {
        let checkListName = document.getElementsByName("selectNumber").length;
        let checkListValue = new Array();
        for (let i = 0; i < checkListName; i++) {
            if (document.getElementsByName("selectNumber")[i].checked == true) {
                checkListValue.push(document.getElementsByName("selectNumber")[i].value);
            }
        }
        return checkListValue;
    };

    //3. 게임시작되면 6개의 1~45중의 중복없이 랜덤으로 숫자가 일정 시간적 간격을 가지고 하나씩 출력되기 시작하고,
    //   마지막으로 보너스 숫자가 출력된다.
    const lottoMachine = (() => {

        //랜덤값을 생성
        const getRandomBall = (min, max) => {
            let gRandom = Math.floor(Math.random() * (max - min + 1)) + min;
            return { gRandom };
        }

        //일반볼 6개 , 보너스볼 1개 추첨
        const randomMainBall = (() => {
            for (let i = 0; i < 7; i++) {
                let n = getRandomBall(1, 45);
                if (!sameNum(n)) {
                    randomBall.push(n);
                } else {
                    i--;
                }
            }

            bonusBall = randomBall[6];
            randomBall.pop();


            //중복된 번호 판독
            function sameNum(n) {
                for (var i = 0; i < randomBall.length; i++) {
                    if (n === randomBall[i]) {
                        return true;
                    }
                }
                return false;
            }

            return { randomBall, bonusBall };
        })();

        return { randomMainBall, getRandomBall };
    })();

    /*
    4. 게임을 판정한다.
    사용자가 입력한 6개의 숫자가 모두 맞으면 1등
    사용자가 입력한 숫자중 5개가 맞고, 보너스 숫자 하나가 맞으면 2등
    사용자가 입력한 숫자중 5개가 맞으면 3등
    4개 일치시 4등
    3개 일치시 5등
    */
    const judgment = (() => {
        let readValue = new Array();
        let randomB = new Array();
        let bRandomB = 0;
        let readBValue = 0;

        for (let i = 0; i < lottoMachine.readCheckList.checkListValue.length; i++) {
            readValue.push(lottoMachine.readCheckList.checkListValue[i]);
        }

        for (let j = 0; j < lottoMachine.randomMainBall.randomBall.length; j++) {
            randomB.push(lottoMachine.randomMainBall.randomBall[i]);
        }

        bRandomB = lottoMachine.randomMainBall.bonusBall;
        readBValue = readValue[6];
        readValue.pop();

        let count = 0;
        let bCount = 0;
        
        for(let a = 0; a<6; a++){
            for(let b = 0; b<6; b++){
                if(readValue[a] == randomB[b]){
                    count++;
                }
            }
        }
        if (readBValue == bRandomB){
            bCount++;
        }

        const finish = () => {
            alert(`맞은 공의 갯수는 ${count} 개 이고, 보너스 공은 ${bCount} 개 맞았습니다.`)
        }
        return { finish };
    })();
    return { judgment, readCheckList, lottoMachine }
})();

