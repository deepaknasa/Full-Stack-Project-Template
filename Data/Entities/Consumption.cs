using System;
using System.Collections.Generic;

namespace Data.Entities
{
    public partial class Consumption
    {
        public Guid Rowguid { get; set; }
        public Guid GnuFoodUnit { get; set; }
        public int IntConsumptionDays { get; set; }
        public int IntConsumedByPersons { get; set; }

        public virtual FoodUnit GnuFoodUnitNavigation { get; set; }
    }
}
