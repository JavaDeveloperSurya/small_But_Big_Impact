const express = require("express");
const router = express.Router();

const {
  getAllDepartments,getDepartment,getDepartmentById,
} = require("../controller/departmentContoller.js");

// all department
router.get("/", getAllDepartments);

// get data by department name
router.get("/:department/", getDepartment);

// get data by department name and id
router.get("/:department/:id", getDepartmentById);



module.exports = router;
