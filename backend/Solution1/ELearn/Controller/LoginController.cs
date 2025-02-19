using ELearn.Database;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ELearn.Models;
using Microsoft.AspNetCore.Identity;

namespace ELearn.Controller
{

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private MyDbContext db;
        private readonly IConfiguration configuration;

        public LoginController(MyDbContext myDbContext, IConfiguration configuration)
        {
            db = myDbContext;
            this.configuration = configuration;
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] UserLogin loginData)
        {
            var passwordHasher = new PasswordHasher<object>();
            var user = db.Users
    .Where(x => x.Email == loginData.Email)
    .Select(u => new { u.Id, u.Email, Role = (int)u.Role, u.Password }) // Cast Role to int
    .FirstOrDefault();






            //User user = db.Users.FirstOrDefault(x => x.Email == loginData.Email && x.Password == loginData.Password);
            if (user != null && passwordHasher.VerifyHashedPassword(null, user.Password, loginData.Password) == PasswordVerificationResult.Success)
            {
                var Claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub,configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                    new Claim("UserId",user.Id.ToString()),
                    new Claim("Email",user.Email.ToString()),
                    new Claim("Role", user.Role.ToString())
                };
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
                var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    configuration["Jwt:Issuer"],
                    configuration["Jwt:Audience"],
                    Claims,
                    expires: DateTime.UtcNow.AddMinutes(60),
                    signingCredentials: signIn
                    );
                string tokenValue = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(new {Token = tokenValue, User = user });
                //return Ok(user);
            }
            return Unauthorized("Invalid Email or Password");

        }
    }
}
