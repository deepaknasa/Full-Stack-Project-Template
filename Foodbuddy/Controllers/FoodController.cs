using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Data.Context;
using Foodbuddy.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Foodbuddy.Controllers
{
    [Route("api/[controller]")]
    public class FoodController : Controller
    {
        private FoodbuddyContext _db;

        public FoodController(FoodbuddyContext db)
        {
            _db = db;
        }

        [HttpGet("getFoodItems")]
        public IEnumerable<FoodStat> GetFoods()
        {
            var foods = from f in _db.FoodItem
                        join fUnit in _db.FoodUnit on f.Rowguid equals fUnit.GnuFoodItem
                        join consumption in _db.Consumption on fUnit.Rowguid equals consumption.GnuFoodUnit
                        join supply in _db.FoodSupply on fUnit.Rowguid equals supply.GnuFoodUnit
                        let daysElapsed = (int)(DateTime.UtcNow.Date - supply.DteSuppliedOn.Date).TotalDays
                        //let daysElapsed = 2
                        let consumptionDays = supply.IntQuantity * consumption.IntConsumptionDays
                        select new FoodStat
                        {
                            FoodGuid = f.Rowguid,
                            foodName = f.TxtName,
                            supplyLeft = (daysElapsed * 100) / consumptionDays
                        };

            return foods;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
