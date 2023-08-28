var classForm = document.getElementById("class-form");

classForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var classCode = document.getElementById("class-code").value;
  var className = document.getElementById("class-name").value;
  var classTeacher = document.getElementById("class-teacher").value;

  if (!className || !classCode || !classTeacher) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  alert("Lớp học đã được thêm!");
  classForm.reset();
});
