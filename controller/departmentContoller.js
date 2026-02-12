const path = require("path");

// Load JSON file
const users = require(path.join(__dirname, "../data/dataset.json"));

// Get all departments
const getAllDepartments = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong .please try again",
    });
  }
};

// Get department by name
const getDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    const filteredDepartment = users.filter(
      (user) => user.department.toLowerCase() === department.toLowerCase(),
    );
    if (filteredDepartment.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }
    res.status(200).json({
      success: true,
      data: filteredDepartment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      count: filteredDepartment.length,
      message: "Something went wrong .please try again",
    });
  }
};

// Get department by name and id
const getDepartmentById = async (req, res) => {
  try {
    const { department, id } = req.params;
    const teacher = users.find(
      user =>
        user.department.toLowerCase() === department.toLowerCase() &&
        user.id === id
    );

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found"
      });
    }

    res.status(200).json({
      success: true,
      data: teacher
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong .please try again",
    });
  }
};

module.exports = {
  getAllDepartments,
  getDepartment,
  getDepartmentById,
};
