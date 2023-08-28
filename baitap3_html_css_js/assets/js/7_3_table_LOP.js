const classForm = document.getElementById("class-form");

classForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const className = document.getElementById("class-name").value;
  const classCode = document.getElementById("class-code").value;
  const teacher = document.getElementById("teacher").value;

  if (!className || !classCode || !teacher) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Thêm mã lớp vào bảng hoặc thực hiện xử lý khác tùy theo yêu cầu.

  alert("Lớp đã được thêm thành công!");
  classForm.reset();
});
