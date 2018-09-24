using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace SickBoy.Server.ItemTypes
{
    public class Item
    {
        public int Id { get; set; }

 
        public string Name { get; set; }

        public ICollection<ItemType> ItemTypes { get; set; }

        public Item()
        {
            ItemTypes = new Collection<ItemType>();
        }
    }
}
