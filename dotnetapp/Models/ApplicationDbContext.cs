﻿using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Models;
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Player> Players{get;set;}
 
        public virtual DbSet<Team> Teams{get;set;}
    }

