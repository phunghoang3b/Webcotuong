using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Webcotuong.Controllers
{
    public class ChessboardController : Controller
    {
        // GET: Chessboard
        public ActionResult Index()
        {
            return View();
        }
    }
}