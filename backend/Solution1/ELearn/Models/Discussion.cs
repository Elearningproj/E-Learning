using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Discussion
    {
        public Discussion()
        {
            Replies = new HashSet<Reply>();
        }

        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string? Content { get; set; }
        public long CourseId { get; set; }
        public long UserId { get; set; }

        public virtual Course Course { get; set; } = null!;
        public virtual User User { get; set; } = null!;
        public virtual ICollection<Reply> Replies { get; set; }
    }
}
