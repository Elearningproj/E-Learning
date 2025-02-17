using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class Reply
    {
        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string? Text { get; set; }
        public long? DiscussionId { get; set; }

        public virtual Discussion? Discussion { get; set; }
    }
}
