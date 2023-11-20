using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly ApplicationDbContext db;
 
        public PlayerController(ApplicationDbContext context)
        {
            db = context;
        }
        [HttpGet]
        [Route("LoginUser")]
        public IActionResult Login(User user){
           
            return Ok();
        }
        [Route("RegisterUser")]
        [HttpGet]
        public IActionResult Register(User user){
           
            return Ok();
        }
    }
}