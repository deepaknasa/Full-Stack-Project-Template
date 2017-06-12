using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Foodbuddy.Models
{
    public class FoodStat
    {
        public Guid FoodGuid { get; set; }
        public string foodName { get; set; }
        public int supplyLeft { get; set; }
    }
}
