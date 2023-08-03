const{Router}=require("express");
const{student_add}=require("../controllers/student.controller");
const { chek_data } = require("../middlewares/student.middleware");
// const{chek_data}=require("../middleware/student.middleware")
let router=Router();
router.get("/" , (req,res)=>{
    res.render("home")
})
router.get("/form", (req, res) => {
    res.render("index");
  });
  router.get("/login", (req, res) => {
    res.render("login");
  });
  router.get("/signup", (req, res) => {
    res.render("signup");
  });
router.post("/add",chek_data,student_add)
module.exports=router;