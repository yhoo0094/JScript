function loadPage() {
    let $input = document.createElement("input");
    $input.setAttribute("type", "number");
    $input.setAttribute("value", "2020");
    $input.setAttribute("id", "yearBox");
    $input.setAttribute("style", "margin: 10px");
    document.getElementById("bdy").appendChild($input);

    $input = document.createElement("input");
    $input.setAttribute("type", "number");
    $input.setAttribute("value", "9");
    $input.setAttribute("id", "monthBox");
    $input.setAttribute("style", "margin: 10px");
    document.getElementById("bdy").appendChild($input);

    let year = 2020;
    let month = 9;
    
    var i = 1;
    var k = 1;

    let today = new Date(year, month - 1, 1);
    let lastDayOfMonth = new Date(year, month, 0).getDate(); //이번 달의 날짜 수
    let day = today.getDay();//이번 달의 시작 요일
    
    //배열 만들기
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    
    //table만들기 시작
    let $table = document.createElement("table");
    let $tr = document.createElement("tr");

    //foreach사용해서 요일 넣기
    days.forEach((a,b,c) => {
        let $th = document.createElement("th");
        $text = document.createTextNode(a);
        $th.appendChild($text);
        $tr.appendChild($th);
        $th.setAttribute("style", "padding: 10px");
    })

    //행 바꾸기 
    $table.appendChild($tr);
    document.getElementById("bdy").appendChild($table);
    $tr = document.createElement("tr");
    $table.appendChild($tr);

    //빈칸 넣기
    let noDate =[];
    for(let i = 1; i <= day; i++){
        noDate.push("　");
    }
    noDate.forEach((a,b,c) => {
        let $th = document.createElement("th");
        let $text = document.createTextNode(a);
        $th.appendChild($text);
        $tr.appendChild($th);
        $th.setAttribute("style", "padding: 10px");
    })

    //날짜 넣기
    let date = [];
    for(let i = 1; i <= lastDayOfMonth; i++){
        date.push(i);
    }
    date.forEach((a,b,c) => {
        if((a+day)%7==1){
            $tr = document.createElement("tr");
            $table.appendChild($tr);      
        }
        let $td = document.createElement("td");
        let $text = document.createTextNode(a);
        $td.appendChild($text);
        $tr.appendChild($td);
        $td.setAttribute("style", "padding: 10px; text-align: center;");
    })

    //남은 칸에 빈칸 넣기
    let extraDate =[];
    for(let i = 1; i <= ((7-(lastDayOfMonth+day)%7)); i++){
        extraDate.push("　");
    }
    extraDate.forEach((a,b,c) => {
        let $td = document.createElement("td");
        let $text = document.createTextNode(a);
        $td.appendChild($text);
        $tr.appendChild($td);
        $td.setAttribute("style", "padding: 10px; text-align: center;");
    })

    //향상된 for문
    // for(let day of days) {
    //     let $th = document.createElement("th");
    //     let $text = document.createTextNode(day);
    //     $th.appendChild($text);
    //     $tr.appendChild($th);
    //     $th.setAttribute("style", "padding: 10px");
    // }
    $table.appendChild($tr);
    document.getElementById("bdy").appendChild($table);

    $table.setAttribute("border", '1');
    $table.setAttribute("style", 'border-collapse: collapse');
    
    
}


