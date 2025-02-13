using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ELearning.Database;
using ELearning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ELearning.Controllers
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
        public IActionResult Post([FromBody] Login loginData)
        {
            User user = db.users.FirstOrDefault(x => x.Email == loginData.Email && x.Password == loginData.Password);
            if (user != null)
            {
                var Claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub,configuration["Jwt:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                    new Claim("UserId",user.id.ToString()),
                    new Claim("Email",user.Email.ToString())
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
                return Ok(new { Token = tokenValue, User = user });
                //return Ok(user);
            }
            return NoContent();
        }

    }
}
