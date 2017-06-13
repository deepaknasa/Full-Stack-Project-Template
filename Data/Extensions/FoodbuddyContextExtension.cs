using Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Data.Entities;

namespace Data.Extensions
{
    public static class FoodbuddyContextExtension
    {
        public static void Seed(this FoodbuddyContext context)
        {
            if(!context.Database.GetPendingMigrations().Any())
            {
                if (!context.FoodUnit.Any())
                {
                    var foodUnits = from item in context.FoodItem
                                let unit = context.Unit.Where(u => u.TxtShortName.Equals("pc")).First()
                                select new FoodUnit {
                                    Rowguid = Guid.NewGuid(),
                                    GnuFoodItem = item.Rowguid,
                                    GnuUnit = unit.Rowguid
                                };

                    context.FoodUnit.AddRange(foodUnits);
                    context.SaveChanges();
                }

                if (!context.FoodSupply.Any())
                {
                    var supplies = from unit in context.FoodUnit
                                   select new FoodSupply
                                   {
                                       Rowguid = Guid.NewGuid(),
                                       GnuFoodUnit = unit.Rowguid,
                                       DteSuppliedOn = DateTime.UtcNow.AddDays(-(new Random().Next(1, 15))),
                                       IntQuantity = 5
                                   };

                    context.FoodSupply.AddRange(supplies);
                    context.SaveChanges();
                }

                if (!context.Consumption.Any())
                {
                    var consumptions = from unit in context.FoodUnit
                                   select new Consumption
                                   {
                                       Rowguid = Guid.NewGuid(),
                                       GnuFoodUnit = unit.Rowguid,
                                       IntConsumedByPersons = 1,
                                       IntConsumptionDays = 10
                                   };

                    context.Consumption.AddRange(consumptions);
                    context.SaveChanges();
                }
            }
            
        }
    }
}
