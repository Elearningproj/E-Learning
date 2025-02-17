using System;
using System.Collections.Generic;

namespace ELearn.Models
{
    public partial class MyCourse
    {
        public long Id { get; set; }
        public DateOnly? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public long? CartId { get; set; }
        public long UserId { get; set; }

        public virtual Cart? Cart { get; set; }
        public virtual User User { get; set; } = null!;
    }
}
