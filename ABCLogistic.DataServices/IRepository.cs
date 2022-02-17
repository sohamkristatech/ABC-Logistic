namespace ABCLogistic.DataServices
{
    public interface IRepository<TDbModel, TViewModel> : IDisposable where TDbModel : DbModelBase
    {
        public IQueryable<TViewModel> GetAll();

        public Task<IList<TViewModel>> GetAllListAsync();

        public Task<TViewModel?> GetByIdAsync(int id);

        public Task<TViewModel?> GetByExpressionAsync(Expression<Func<TDbModel, bool>> predicate);

        public Task<TDbModel> CreateAsync(TViewModel model);

        public Task CreateAsync(TDbModel model);

        public Task<TDbModel?> UpdateAsync(TViewModel model);

        public Task UpdateAsync(TDbModel model);

        public Task<IList<TDbModel>> DeleteAsync(params int[] ids);

        public Task DeleteAsync(TDbModel model);
    }
}
