using Dul.Articles;

namespace BookApp.Shared
{
    public interface ICrudRepositoryBase<T, TIdentifier>
    {
        // Task<T> AddAsync(T model);  // 입력
        // Task<List<T>> GetAllAsync();    // 출력
        // Task<T> GetByIdAsync(int id);   // 상세
        // Task<bool> UpdateAsync(T model);    // 수정
        // Task<bool> DeleteAsync(int id);    // 삭제
    }
    /// <summary>
    /// Generic Repository Interface => ICrudRepositoryBase.cs
    /// </summary>
    public interface IBookCrudRepository<T> : ICrudRepositoryBase<T, int>
    {

    }
}