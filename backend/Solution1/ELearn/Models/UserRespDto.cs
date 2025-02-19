using static ELearn.Models.User;
using System.ComponentModel.DataAnnotations;

namespace ELearn.Models
{
    public class UserRespDto
    {
        public long Id { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

  
        public string Dob { get; set; }

        public string Gender { get; set; }
        public string Phno { get; set; }

  
        public string Role { get; set; }
    }
}
