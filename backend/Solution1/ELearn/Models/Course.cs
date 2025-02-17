using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Course
    {
        public Course()
        {
            Carts = new HashSet<Cart>();
            Discussions = new HashSet<Discussion>();
            Lessons = new HashSet<Lesson>();
            Questions = new HashSet<Question>();
        }

        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string CourseName { get; set; } = null!;
        public string? Description { get; set; }
        public string? ImageLink { get; set; }
        public ulong IsDeleted { get; set; }
        public double Price { get; set; }
        public long? UserId { get; set; }

        public virtual User? User { get; set; }
        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Discussion> Discussions { get; set; }
        public virtual ICollection<Lesson> Lessons { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
