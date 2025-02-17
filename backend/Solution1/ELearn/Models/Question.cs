using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Question
    {
        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string Answer { get; set; } = null!;
        public string Question1 { get; set; } = null!;
        public long CourseId { get; set; }

        public virtual Course Course { get; set; } = null!;
    }
}
