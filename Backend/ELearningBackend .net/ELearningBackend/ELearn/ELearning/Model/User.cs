using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ELearning.Model
{
    [Table("Users")]
    public class User
    {
        [Key]
        [Column("id")]
        public int id { get; set; }

        [Column("UserName")]
        //[Required(ErrorMessage = "Name cannot be empty")]
        [StringLength(20)]
        public string UserName { get; set; }

        [Column("Email")]
        //[Required(ErrorMessage = "Email cannot be empty")]
        [EmailAddress]
        public string Email { get; set; }

        //[Required(ErrorMessage = "Password cannot be empty")]
        [StringLength(20)]
        public string Password { get; set; }

        [StringLength(10)]
        public string Phno { get; set; }

        public string Dob { get; set; }
        public string Gender { get; set; }

        [Column(TypeName = "varchar(20)")]
        public UserRole Role { get; set; }


    }

    public enum UserRole
    {
        Admin,
        Learner
    }
}

