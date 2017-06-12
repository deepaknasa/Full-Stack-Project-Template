using System;
using System.Collections.Generic;

namespace Data.Entities
{
    public partial class FoodUnit
    {
        public FoodUnit()
        {
            Consumption = new HashSet<Consumption>();
            FoodSupply = new HashSet<FoodSupply>();
        }

        public Guid Rowguid { get; set; }
        public Guid GnuUnit { get; set; }
        public Guid GnuFoodItem { get; set; }
        public DateTime DteCreatedOn { get; set; }
        public DateTime? DteLastUpdateOn { get; set; }

        public virtual ICollection<Consumption> Consumption { get; set; }
        public virtual ICollection<FoodSupply> FoodSupply { get; set; }
        public virtual FoodItem GnuFoodItemNavigation { get; set; }
        public virtual Unit GnuUnitNavigation { get; set; }
    }
}
