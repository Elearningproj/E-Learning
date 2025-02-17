using System.Security.Claims;
using System.Text;
using ELearn.Database;
using ELearn.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Identity;

namespace ELearn.Controller
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private MyDbContext db;
        public UsersController(MyDbContext myDbContext)
        {
            db = myDbContext;
        }

        // Public route (for testing purposes)
        [HttpGet("public")]
        public IActionResult Get()
        {
            return Ok("Hey, what's up");
        }

        // Route for registering a CUSTOMER
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegistrationDto request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // ✅ Check if email already exists
            if (await db.Users.AnyAsync(u => u.Email == request.Email))
            {
                return BadRequest(new { message = "Email already exists" });
            }

            // ✅ Hash the password
            string passwordHash = HashPassword(request.Password);

            // ✅ Create user object
            var user = new User
            {
                UserName = request.UserName,
                Email = request.Email,
                Password = passwordHash,
                Dob = request.Dob,
                Gender = request.Gender,
                Phno = request.Phno,
                Role = request.Role,
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow
            };


            // ✅ Save user to database
            db.Users.Add(user);
            await db.SaveChangesAsync();

            return Ok(new { message = "User registered successfully" });
        }

        // ✅ Hash Password Method (SHA256)
        private string HashPassword(string password)
        {
            var passwordHasher = new PasswordHasher<User>();
            return passwordHasher.HashPassword(null, password);
        }
    }
}
