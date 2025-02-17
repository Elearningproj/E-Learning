using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ELearn.Models
{
    public partial class User
    {
        public User()
        {
            Courses = new HashSet<Course>();
            Discussions = new HashSet<Discussion>();
            Lessons = new HashSet<Lesson>();
            MyCourses = new HashSet<MyCourse>();
        }

        public enum UserRole
        {
            Learner , Admin
        }
        public long Id { get; set; }

        [Column("created_on")]
        public DateTime CreatedOn { get; set; }

        [Column("updated_on")]
        public DateTime UpdatedOn { get; set; }

        [Column("dob")]
        public string? Dob { get; set; }

        [Column("email")]
        public string Email { get; set; } = null!;

        [Column("gender")]
        public string? Gender { get; set; }

        [Column("password")]
        [StringLength(255)]
        public string Password { get; set; } = null!;

        [Column("phno")]
        public string? Phno { get; set; }

        [Column("role")]
        public UserRole Role { get; set; }

        [Column("user_name")]
        public string UserName { get; set; } = null!;

        public virtual Cart? Cart { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<Discussion> Discussions { get; set; }
        public virtual ICollection<Lesson> Lessons { get; set; }
        public virtual ICollection<MyCourse> MyCourses { get; set; }
    }
}
