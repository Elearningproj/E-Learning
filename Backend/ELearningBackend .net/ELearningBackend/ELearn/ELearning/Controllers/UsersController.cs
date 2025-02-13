using ELearning.Database;
using ELearning.Model;
using Microsoft.AspNetCore.Mvc;

namespace ELearning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController
    {
        private MyDbContext db;
        public UsersController(MyDbContext myDbContext)
        {
            db = myDbContext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return (db.users.ToList());
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsersController>
        [HttpPost]
        public string Post([FromBody] User user)
        {
            db.users.Add(user);
            db.SaveChanges();
            return "success";
        }

    }
}
