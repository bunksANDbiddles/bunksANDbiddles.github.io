using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SickBoy.Server.ItemTypes;


namespace SickBoy.Server.Persistence
{
    public class BunksLibraryDbContext : DbContext
    {
        public BunksLibraryDbContext(DbContextOptions<BunksLibraryDbContext> options)
            : base(options)
        {

        }



        
    }
}