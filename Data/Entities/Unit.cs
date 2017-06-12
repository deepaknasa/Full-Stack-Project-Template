using System;
using System.Collections.Generic;

namespace Data.Entities
{
    public partial class Unit
    {
        public Unit()
        {
            FoodUnit = new HashSet<FoodUnit>();
        }

        public Guid Rowguid { get; set; }
        public string TxtName { get; set; }
        public string TxtShortName { get; set; }
        public string TxtDescription { get; set; }
        public DateTime DteCreatedOn { get; set; }

        public virtual ICollection<FoodUnit> FoodUnit { get; set; }
    }
}
