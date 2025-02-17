using static ELearn.Models.User;
using System.ComponentModel.DataAnnotations;

namespace ELearn.Models
{
    public class UserRegistrationDto
    {
        [Required]
        public string UserName { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required, MinLength(6)]
        public string Password { get; set; }

        [Required]
        public string Dob { get; set; }

        public string Gender { get; set; }
        public string Phno { get; set; }

        [Required]
        public UserRole Role { get; set; }  // Use enum instead of string
    

}
}
