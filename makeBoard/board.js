class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} //end of class

let boardDB = [];
boardDB.push(new Board(1, '자바스크립트', '웹언어입니다', '최재영'))
boardDB.push(new Board(2, '자바', '컴파일러입니다', '김현동'))
boardDB.push(new Board(3, '오라클', '데이터베이스관리', '허성준'))

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button'];

let table, tr, td, text, checkbox, button;

//테이블 제목 넣기 함수
function createTitle() {
    tr = document.createElement('tr');
    titles.forEach((obj, idx) => {
        table.append(tr);
        td = document.createElement('th');
        td.setAttribute('style', 'padding: 1px 5px')
        if (obj === 'checkbox') {
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('onclick', 'checkAll()');
            checkbox.setAttribute('id', 'checkAll');
            // checkbox.setAttribute('checked', 'true');
            td.append(checkbox);
        } else if (obj === 'button') {
            td.append('상세보기');
        } else {
            text = document.createTextNode(obj);
            td.append(text);
        }
        tr.append(td);
    })
}

function getBoardList() {
    table = document.createElement("table");
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.setAttribute('style', 'border-collapse: collapse');
    createTitle();
    //내용 넣기
    boardDB.forEach((obj, idx) => {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo);
        table.append(tr);
        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', 'checkboxL');
                checkbox.onclick = howManyChked;
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기';
                td.append(button);
                button.onclick = showDetail;
            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }
    });
    document.getElementById('main').append(table);
}

//추가하기
function insertData() {
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;
    
    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id', boardNo);
    //체크박스
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('name', 'checkboxL')
    td.append(checkbox);
    tr.append(td);
    //데이터 입력
    let insertArray = [boardNo, title, content, writer];
    insertArray.forEach((val, idx) => {
        td = document.createElement('td');
        td.append(val);
        tr.append(td);
    })
    //상세보기
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML = '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);

    tbl.append(tr);
}

//입력 누르면 창에 출력하기
function showDetail() {
    let id = this.parentNode.parentNode.id;
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            oneBoard = board;
        }
    }
    document.getElementById('boardNo').value = oneBoard.boardNo;
    document.getElementById('title').value = oneBoard.title;
    document.getElementById('content').value = oneBoard.content;
    document.getElementById('writer').value = oneBoard.writer;
}

//전체 체크
function checkAll() {
    let check = document.getElementById("checkAll").checked;
    if (check) {
        let ary = document.getElementsByName("checkboxL")
        ary.forEach((a, b) => {
            a.checked = true;
        })
    } else {
        let ary = document.getElementsByName("checkboxL")
        ary.forEach((a, b) => {
            a.checked = false;
        })
    }
}

//모두 체크되면 전체 체크도 체크되기
function howManyChked() {
    let chkBoxNum = 0;
    let checkboxList = document.getElementsByName("checkboxL");
    checkboxList.forEach((val, idx) => {
        if (val.checked) {
            chkBoxNum++
        }
    })
    if (chkBoxNum == boardDB.length) {
        document.getElementById("checkAll").checked = true;
    } else {
        document.getElementById("checkAll").checked = false;
    }
}