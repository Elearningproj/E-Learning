// ELearn.Model;
using ELearn.Models;
using Microsoft.EntityFrameworkCore;

namespace ELearn.Database
{
    public class MyDbContext : DbContext
    {
     
            public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

          public DbSet<User> Users { get; set; } // Capitalized for convention
        
    }
}
