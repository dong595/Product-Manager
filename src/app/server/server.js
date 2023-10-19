const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000; // Chọn cổng mà bạn muốn sử dụng

// Kết nối với cơ sở dữ liệu MongoDB
mongoose
  .connect("mongodb://localhost/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Định nghĩa các tuyến API
// Ví dụ:
// app.get("/api/users",  asycn(req, res) => {
//   const data = await fetch
//   try {
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// });
const getAll = async (req, res) => {
  try {
    // const data =await
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
