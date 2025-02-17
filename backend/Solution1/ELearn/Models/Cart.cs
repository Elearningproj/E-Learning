using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Cart
    {
        public Cart()
        {
            MyCourses = new HashSet<MyCourse>();
        }

        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public long? CourseId { get; set; }
        public long UserId { get; set; }

        public virtual Course? Course { get; set; }
        public virtual User User { get; set; } = null!;
        public virtual ICollection<MyCourse> MyCourses { get; set; }
    }
}
