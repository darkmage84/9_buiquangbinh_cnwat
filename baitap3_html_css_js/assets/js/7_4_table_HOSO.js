var profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var code = document.getElementById("code").value;
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var clas = document.getElementById("class").value;

  if (!code || !name || !address || !clas) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  alert("Hồ sơ đã được lưu!");
  profileForm.reset();
});
