using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
   
    [Route("/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext context;
 
        public UserController(ApplicationDbContext _context)
        {
            context = _context;
        }
 
        [HttpGet]
        [Route("RegisterUser")]
        public IActionResult Register(User u)
        {
            var data=context.Users.Add(u);
            return Ok(data);
        }
 
 
        [Route("Login")]
        [HttpGet]
        public IActionResult Login(User U) {
            if(ModelState.IsValid){
                var data=context.Users.FirstOrDefault(u=>u.Name==U.Name && u.password==U.password);
                return RedirectToAction("Login",U);
            }
            return Ok();
           
        }
       
    }
}