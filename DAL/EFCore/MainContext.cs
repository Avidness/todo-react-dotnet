using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using todo.Models;

namespace todo.DAL.EFCore
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) : base(options)
        { }

        public DbSet<Item> Items { get; set; }
    }
}