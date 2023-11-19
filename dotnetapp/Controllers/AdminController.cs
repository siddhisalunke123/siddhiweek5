using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        // private readonly ILogger<AdminController> _logger;

        // public AdminController(ILogger<AdminController> logger)
        // {
        //     _logger = logger;
        // }
        private readonly ApplicationDbContext db;
 
        public AdminController(ApplicationDbContext context)
        {
            db = context;
        }
        [HttpGet]
        public IActionResult GetPlayers(){
            return Ok(db.Players);
        }
        [HttpGet]
        public IActionResult GetTeams(){
            return Ok(db.Teams);
        }
        [HttpPut]
        // [Route("{id}")]
        public IActionResult PutPlayer(int id, Player pl)
        {
            var e=db.Players.FirstOrDefault(e=>e.Id==id);
            if(e!=null)
            {
                e.Name=pl.Name;
 
                e.Age=pl.Age;
                e.Category=pl.Category;
                e.BiddingPrice=pl.BiddingPrice;
                db.SaveChanges();
                return Ok(e);
            }
            else return NotFound();
        }
        [HttpGet]
        
        public IActionResult DeletePlayer(int id)
        {
            var e= db.Players.FirstOrDefault(e=>e.Id==id);
            if(e!=null)
            {
                db.Players.Remove(e);
                db.SaveChanges();
                return Ok();
            }
            else return NotFound();
        }
 
       
    }
}