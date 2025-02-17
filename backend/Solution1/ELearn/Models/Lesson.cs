using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Lesson
    {
        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string? LessonName { get; set; }
        public string SourceLink { get; set; } = null!;
        public string VideoLink { get; set; } = null!;
        public long AdminId { get; set; }
        public long CourseId { get; set; }

        public virtual User Admin { get; set; } = null!;
        public virtual Course Course { get; set; } = null!;
    }
}
