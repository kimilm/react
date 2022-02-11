using Dul.Articles;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookApp.Shared
{
    public class BookRepository : IBookRepository
    {
        private readonly BookAppDBContext _context;
        private readonly ILogger _logger;

        public BookRepository(BookAppDBContext context, ILoggerFactory loggerFactory)
        {
            this._context = context;
            this._logger = loggerFactory.CreateLogger(nameof(BookRepository));
        }

        #region AddAsync
        public async Task<Book> AddAsync(Book model)  // 입력
        {
            try
            {
                _context.Books.Add(model);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                _logger?.LogError($"ERROR({nameof(AddAsync)}): {e.Message}");
            }

            return model;
        }
        #endregion

        #region GetAllAsync
        public async Task<List<Book>> GetAllAsync()    // 출력 
        {
            // return await _context.Books.FromSqlRow<Book>("Select * From dbo.Boos Order By Id Desc")  // InMemory 에서는 사용 불가
            return await _context.Books.OrderByDescending(m => m.Id)
            // .Include(m => m.BooksLinks)
                        .ToListAsync();
        }
        #endregion

        #region GetByIdAsync
        public async Task<Book> GetByIdAsync(int id)   // 상세
        {
            var model = await _context.Books
            // .Include(m => m.BooksLinks)
            .SingleOrDefaultAsync(m => m.Id == id);

            return model;
        }
        #endregion

        #region UpdateAsync
        public async Task<bool> UpdateAsync(Book model)    // 수정
        {
            try
            {
                _context.Update(model);
                return await _context.SaveChangesAsync() > 0 ? true : false;
            }
            catch (Exception e)
            {
                _logger?.LogError($"ERROR({nameof(UpdateAsync)}): {e.Message}");
            }

            return false;
        }
        #endregion

        #region DeleteAsync
        public async Task<bool> DeleteAsync(int id)    // 삭제
        {
            try
            {
                var model = await _context.Books.FindAsync(id);
                _context.Remove(model);
                return await _context.SaveChangesAsync() > 0 ? true : false;
            }
            catch (Exception e)
            {
                _logger?.LogError($"ERROR({nameof(UpdateAsync)}): {e.Message}");
            }

            return false;
        }
        #endregion

        #region GetArticlesAsync
        public Task<ArticleSet<Book, int>> GetArticlesAsync<TParentIdentifier>(int pageIndex, int pageSize, string searchField, string searchQuery, string sortOrder, TParentIdentifier parentIdentifier)
        {
            throw new NotImplementedException();
        }
        #endregion    
    }
}