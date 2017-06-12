using System;
using System.Collections.Generic;

namespace Data.Entities
{
    public partial class FoodSupply
    {
        public Guid Rowguid { get; set; }
        public int IntQuantity { get; set; }
        public DateTime DteSuppliedOn { get; set; }
        public Guid GnuFoodUnit { get; set; }

        public virtual FoodUnit GnuFoodUnitNavigation { get; set; }
    }
}
