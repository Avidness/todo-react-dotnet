using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using todo.Models;
using todo.DAL.EFCore;

namespace todo.DAL.Repositories
{
    public class ItemRepository : IRepository<Item>
    {
        private readonly MainContext _db;

        public ItemRepository(MainContext db)
        {
            _db = db;
        }
        
        public void Create(Item item)
        {
            item.Id = Guid.NewGuid().ToString();
            item.LastModifiedAt = DateTime.UtcNow;
            item.CreatedAt = DateTime.UtcNow;
            _db.Items.Add(item);
            _db.SaveChanges();
        }

        public void Update(Item item)
        {
            var existing_item = _db.Items.Find(item.Id);
            existing_item.Label = item.Label;
            existing_item.Description = item.Description;
            existing_item.LastModifiedAt = DateTime.UtcNow;

            _db.Items.Update(existing_item);
            _db.SaveChanges();
        }

        public async Task<IEnumerable<Item>> GetAll()
        {
            return await _db.Items.ToListAsync();
        } 

        public async Task<IEnumerable<Item>> GetByCategory(int category_id)
        {
            return await _db.Items.ToListAsync();
        } 

        public async Task<Item> Get(string id)
        {
            return await _db.Items.SingleAsync(d => d.Id == id);
        } 

        public void Delete(string id)
        {
            var item = _db.Items.Find(id);
            _db.Items.Remove(item);
            _db.SaveChanges();
        }
    }
}