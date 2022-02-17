namespace ABCLogistic.DataServices.ShipmentTypeService;

public class ShipmentTypeService : IShipmentTypeService
{
    private readonly ABCLogisticContext _context;

    public ShipmentTypeService(ABCLogisticContext context)
    {
        _context = context;
    }

    public async Task<ShipmentTypeDbModel> CreateAsync(ShipmentTypeDbModel model)
    {
        await _context.ShipmentTypes.AddAsync(model);
        await _context.SaveChangesAsync();

        return model;
    }

    public async Task<IList<ShipmentTypeDbModel>> DeleteAsync(params int[] ids)
    {
        var dbModels = await _context.ShipmentTypes
           .Where(x => ids.Contains(x.Id))
           .ToListAsync();

        _context.ShipmentTypes.RemoveRange(dbModels);

        await _context.SaveChangesAsync();

        return dbModels;
    }

    public async Task DeleteAsync(ShipmentTypeDbModel model)
    {
        _context.ShipmentTypes.Remove(model);
        await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
        SuppressFinalize(this);
    }

    public IQueryable<ShipmentTypeDbModel> GetAll() => _context.ShipmentTypes;

    public async Task<IList<ShipmentTypeDbModel>> GetAllListAsync() => await GetAll().ToListAsync();

    public async Task<ShipmentTypeDbModel?> GetByExpressionAsync(Expression<Func<ShipmentTypeDbModel, bool>> predicate) =>
        await _context.ShipmentTypes.Where(predicate)
            .Select(x => new ShipmentTypeDbModel
            {
                Id = x.Id,
                Type = x.Type,
            }).FirstOrDefaultAsync();

    public async Task<ShipmentTypeDbModel?> GetByIdAsync(int id) =>
        await _context.ShipmentTypes.Where(x => x.Id == id)
            .Select(x => new ShipmentTypeDbModel
            {
                Id = x.Id,
                Type = x.Type
            }).FirstOrDefaultAsync();

    public async Task<ShipmentTypeDbModel?> UpdateAsync(ShipmentTypeDbModel model)
    {
        _context.ShipmentTypes.Update(model);
        await _context.SaveChangesAsync();

        return model;
    }

    async Task IRepository<ShipmentTypeDbModel, ShipmentTypeDbModel>.CreateAsync(ShipmentTypeDbModel model)
    {
        await CreateAsync(model);
    }

    async Task IRepository<ShipmentTypeDbModel, ShipmentTypeDbModel>.UpdateAsync(ShipmentTypeDbModel model)
    {
        await UpdateAsync(model);
    }
}