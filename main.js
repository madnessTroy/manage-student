var studentsList = [];
var studentStt = 0;

// Khi ấn nút "Nhập!"
function save(e) {
    e.preventDefault(); //không cho trang reload
    studentStt++;

    // Tạo object student
    var student = {
        stt: studentStt,
        fullName: "",
        math: 0,
        physical: 0,
        chemistry: 0,
        avg: "?"
    };

    // Gán input cho object student
    student.fullName = document.getElementById("fullname").value.trim();
    student.math = document.getElementById("math-mark").value;
    student.physical = document.getElementById("physical-mark").value;
    student.chemistry = document.getElementById("chemistry-mark").value;

    var x = student.math;
    var y = student.physical;
    var z = student.chemistry;

    // Đẩy lại giá trị vào studentsList
    studentsList.push(student);

    // In ra bảng
    addTable();
}


// Biến Global dùng cho addTable(), calAvg(), findBest()
const table = document.getElementById("students-list");

// addTable()
// Lấy input vừa nhập in ra table
function addTable() {
    // Xoá dữ liệu của value để không bị trùng lần 2 trở đi
    for (let i = table.rows.length - 1; i > 0 ; i--) {
        table.deleteRow(i);
    }

    // Duyệt qua danh sách studentsList
    var listLength = studentsList.length;
    for (let i = 0; i < listLength; i++) {
        value = studentsList[i];

        // Tạo row
        var row = table.insertRow();

        // Tạo cell
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        // Đẩy value vào cell
        cell1.innerHTML = value.stt;
        cell2.innerHTML = value.fullName;
        cell3.innerHTML = value.math;
        cell4.innerHTML = value.physical;
        cell5.innerHTML = value.chemistry;
        cell6.innerHTML = value.avg;
    }

    // Xoá trắng ô Input
    document.getElementById("fullname").value = "";
    document.getElementById("math-mark").value = "";
    document.getElementById("physical-mark").value = "";
    document.getElementById("chemistry-mark").value = "";
}

// Button calAvg()
function calAvg() {
    var count = table.rows.length;

    // Duyệt qua danh sách và lấy ra điểm 3 môn
    for (i = 1; i < count; i++) {
        var x = table.rows[i].cells.item(2).innerHTML;
        var y = table.rows[i].cells.item(3).innerHTML;
        var z = table.rows[i].cells.item(4).innerHTML;

        // Chuyển đổi thành số thực và tính ĐTB
        avg = ((parseFloat(x) + parseFloat(y) + parseFloat(z))/3).toFixed(1);

        // Gán giá trị cột ĐTB
       table.rows[i].cells.item(5).innerHTML = avg;
    }
}

//Button findBest()
function findBest() {
    var count = table.rows.length;

    // Duyệt qua danh sách và tìm ĐTH >= 8.0
    for (i = 1; i < count; i++) {
        var avg = table.rows[i].cells[5].innerHTML;
        avg = parseFloat(avg);
        if (avg >= 8.0) {
            console.log(table.rows[i]);
            table.rows[i].className = "table-danger";
        }
    }
}