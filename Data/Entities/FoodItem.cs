using System;
using System.Collections.Generic;

namespace Data.Entities
{
    public partial class FoodItem
    {
        public FoodItem()
        {
            FoodUnit = new HashSet<FoodUnit>();
        }

        public Guid Rowguid { get; set; }
        public string TxtName { get; set; }
        public string TxtDescription { get; set; }
        public DateTime DteCreatedOn { get; set; }
        public DateTime? DteLastUpdateOn { get; set; }

        public virtual ICollection<FoodUnit> FoodUnit { get; set; }
    }
}
