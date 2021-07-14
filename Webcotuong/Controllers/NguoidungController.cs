using System;
using System.Linq;
using System.Web.Mvc;
using Webcotuong.Models;

namespace Webcotuong.Controllers
{
    public class NguoidungController : Controller
    {
        dbChessContextDataContext db = new dbChessContextDataContext();
        // GET: Nguoidung
        //public ActionResult Index()
        //{
        //    return View();
        //}
        [HttpGet]
        public ActionResult login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult login(FormCollection collection)
        {
            var tendn = collection["username"];
            var matkhau = collection["password"];
            if (String.IsNullOrEmpty(tendn))
            {
                ViewData["Loi1"] = "Phải nhập tên đăng nhập";
            }
            else if (String.IsNullOrEmpty(matkhau))
            {
                ViewData["Loi2"] = "Phải nhập mật khẩu";
            }
            else
            {
                TAIKHOAN kh = db.TAIKHOANs.SingleOrDefault(n => n.TEN == tendn && n.MATKHAU == matkhau);
                if (kh != null)
                {
                    ViewBag.Thongbao = "Chúc mừng bạn đăng nhập thành công";
                    Session["TEN"] = kh;
                    return RedirectToAction("Index", "Room");
                }
                else
                    ViewBag.Thongbao = "Tên đăng nhập hoặc mật khẩu không đúng";
            }
            return View();
        }
    }
}