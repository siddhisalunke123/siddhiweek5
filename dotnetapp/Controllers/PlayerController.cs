using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using dotnetapp.Models;
namespace dotnetapp.Controllers;
    public class PlayerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        
    }
