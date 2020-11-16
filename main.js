const addM = document.querySelector(".add_menu");

function addList(className) {
    let createList = document.createElement('li');
    //리스트를 만든다

    createList.classList.add(className);
    //클래스명 입력

    addM.appendChild(createList);
    //상속
}

function addAtag(className, textValue, linkURL) {
    let createAtag = document.createElement('a');
    // a태그를 만든다

    createAtag.href = (linkURL);
    // href를 입력

    createAtag.textContent = (textValue);
    //textContent 입력

    let createList = document.querySelector(className);

    createList.appendChild(createAtag);
    //createAtag를 해당 class에 자식으로 입력
}

function AddMenu() {
    addList("RSP_Game");
    addAtag(".RSP_Game", "가위바위보 게임", "RspGame.html");

    addList("RSP_PatchNote");
    addAtag(".RSP_PatchNote", "└패치노트", "PatchNote.html");

    /* =========================================================== */

    addList("MagicMirror_Main");
    addAtag(".MagicMirror_Main", "매직미러(PC전용)", "magicM.html");
}

AddMenu();