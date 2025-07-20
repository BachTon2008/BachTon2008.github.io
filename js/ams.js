function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLowerCase();
  const errorEmail = document.getElementById("error-email");

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = emailValue.match(regex);

  const sectionContent = document.querySelector(".section-content");
  const submitControl = document.querySelector(".submit-email");

  if (checkEmail) {
    sectionContent.style.display = "block";
    errorEmail.innerHTML = "";
    submitControl.style.display = "none";
  } else {
    errorEmail.innerHTML = "Email không hợp lệ. Vui lòng nhập lại.";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Lấy tất cả các "job-box-grid" (hộp kinh nghiệm, học vấn, v.v.)
//   const jobBoxes = document.querySelectorAll(".job-box-grid");

//   jobBoxes.forEach((box) => {
//     // Tạo nút "View More" cho mỗi hộp
//     const viewBtn = document.createElement("div");
//     viewBtn.classList.add("view-btn");
//     viewBtn.textContent = "View More";
//     box.appendChild(viewBtn);

//     // Lấy nội dung cần ẩn/hiện
//     const content = box.querySelector(".job-content");

//     // Thêm sự kiện click cho nút "View More/Less"
//     viewBtn.addEventListener("click", function () {
//       // Toggle (thay đổi trạng thái) hiển thị của nội dung
//       if (content.style.display === "block" || content.style.display === "") {
//         content.style.display = "none";
//         viewBtn.textContent = "View More";
//       } else {
//         content.style.display = "block";
//         viewBtn.textContent = "View Less";
//       }
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const jobBoxes = document.querySelectorAll(".job-box-grid");

  jobBoxes.forEach((box) => {
    const viewBtn = document.createElement("div");
    viewBtn.classList.add("view-btn");

    // Gán nội dung ban đầu cho nút "View More" kèm mũi tên xuống
    viewBtn.innerHTML = 'View More <span class="arrow">▼</span>';

    const content = box.querySelector(".job-content");
    box.insertBefore(viewBtn, content);

    // Thêm sự kiện click
    viewBtn.addEventListener("click", function () {
      if (content.style.display === "block") {
        content.style.display = "none";
        // Khi ẩn, đổi thành "View More" kèm mũi tên xuống
        viewBtn.innerHTML = 'View More <span class="arrow">▼</span>';
      } else {
        content.style.display = "block";
        // Khi hiện, đổi thành "View Less" kèm mũi tên lên
        viewBtn.innerHTML = 'View Less <span class="arrow">▲</span>';
      }
    });
  });
});
