using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Elevated_WPF
{
    public class CourseInfoDbContext:DbContext
    {
        public DbSet<CourseInfo> Courses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\GitHub\DesktopApp\courseinfo_app.db");
        }
    }
}
