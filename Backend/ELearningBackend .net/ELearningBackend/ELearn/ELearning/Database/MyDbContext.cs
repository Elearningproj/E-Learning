using ELearning.Model;
using Microsoft.EntityFrameworkCore;

namespace ELearning.Database
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions options) : base(options) { }


        public DbSet<User> users { get; set; }

    }
}
