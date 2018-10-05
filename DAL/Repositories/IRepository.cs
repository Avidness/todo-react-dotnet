using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace todo.DAL.Repositories
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAll(); 
        Task<T> Get(string id); 
        void Create(T entity); 
        void Delete(string id); 
        void Update(T entity); 
    }
}