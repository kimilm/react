using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace BookApp.Shared
{
    public class BookAppDBContext : DbContext
    {
        public BookAppDBContext()
        {

        }

        public BookAppDBContext(DbContextOptions<BookAppDBContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>().Property(m => m.Created).HasDefaultValueSql("GetDate()");
        }

        public DbSet<Book> Books { get; set; }
    }
}