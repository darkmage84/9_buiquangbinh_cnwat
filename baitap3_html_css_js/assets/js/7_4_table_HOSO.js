const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const address = document.getElementById("address").value;

  if (!name || !age || !address) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Lưu hồ sơ vào bảng hoặc thực hiện xử lý khác tùy theo yêu cầu.

  alert("Hồ sơ đã được lưu thành công!");
  profileForm.reset();
});
