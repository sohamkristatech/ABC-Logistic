namespace ABCLogistic.DataServices.ShipmentService;

public class ShipmentService : IShipmentService
{
    private readonly ABCLogisticContext _context;

    public ShipmentService(ABCLogisticContext context)
    {
        _context = context;
    }

    public async Task<ShipmentDbModel> CreateAsync(ShipmentViewModel model)
    {
        var dbModel = new ShipmentDbModel
        {
            SenderName = model.SenderName,
            ShipmentTypeId = model.ShipmentTypeId,
            Description = model.Description,
            Expedited = model.Expedited,
            CreatedOn = DateTime.Now
        };

        await CreateAsync(dbModel);

        return dbModel;
    }

    public async Task CreateAsync(ShipmentDbModel model)
    {
        await _context.Shipments.AddAsync(model);
        await _context.SaveChangesAsync();
    }

    public async Task<IList<ShipmentDbModel>> DeleteAsync(params int[] ids)
    {
        var dbModels = await _context.Shipments
           .Where(x => ids.Contains(x.Id))
           .ToListAsync();

        _context.Shipments.RemoveRange(dbModels);

        await _context.SaveChangesAsync();

        return dbModels;
    }

    public async Task DeleteAsync(ShipmentDbModel model)
    {
        _context.Shipments.Remove(model);
        await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
        SuppressFinalize(this);
    }

    public IQueryable<ShipmentViewModel> GetAll() => _context.Shipments
        .Select(x => new ShipmentViewModel
        {
            Id = x.Id,
            Description = x.Description,
            CreatedOn = x.CreatedOn.ToString("dd-MM-yyyy"),
            Expedited = x.Expedited,
            SenderName = x.SenderName,
            ShipmentType = x.ShipmentType.Type,
            StrExpedited = x.Expedited ? "Yes" : "No"
        });

    public async Task<IList<ShipmentViewModel>> GetAllListAsync() => await _context.Shipments
        .Select(x => new ShipmentViewModel
        {
            Id = x.Id,
            Description = x.Description,
            CreatedOn = x.CreatedOn.ToString("dd-MM-yyyy"),
            Expedited = x.Expedited,
            SenderName = x.SenderName,
            ShipmentType = x.ShipmentType.Type
        }).ToListAsync();

    public async Task<ShipmentViewModel?> GetByExpressionAsync(Expression<Func<ShipmentDbModel, bool>> predicate) =>
        await _context.Shipments.Where(predicate)
            .Select(x => new ShipmentViewModel
            {
                Id = x.Id,
                Description = x.Description,
                CreatedOn = x.CreatedOn.ToString("dd-MM-yyyy"),
                Expedited = x.Expedited,
                SenderName = x.SenderName,
                ShipmentType = x.ShipmentType.Type,
                StrExpedited = x.Expedited ? "Yes" : "No"
            }).FirstOrDefaultAsync();

    public async Task<ShipmentViewModel?> GetByIdAsync(int id) =>
        await _context.Shipments.Where(x => x.Id == id)
            .Select(x => new ShipmentViewModel
            {
                Id = x.Id,
                Description = x.Description,
                CreatedOn = x.CreatedOn.ToString("dd-MM-yyyy"),
                Expedited = x.Expedited,
                SenderName = x.SenderName,
                ShipmentType = x.ShipmentType.Type,
                StrExpedited = x.Expedited ? "Yes" : "No"
            }).FirstOrDefaultAsync();

    public async Task<ShipmentDbModel?> UpdateAsync(ShipmentViewModel model)
    {
        var dbModel = await _context.Shipments
            .SingleOrDefaultAsync(x => x.Id == model.Id)
            .ConfigureAwait(false);

        if (dbModel is null)
        {
            return null;
        }

        dbModel.Description = model.Description;
        dbModel.Expedited = model.Expedited;
        dbModel.SenderName = model.SenderName;
        dbModel.ShipmentTypeId = model.ShipmentTypeId;

        await UpdateAsync(dbModel);

        return dbModel;
    }

    public async Task UpdateAsync(ShipmentDbModel model)
    {
        _context.Shipments.Update(model);
        await _context.SaveChangesAsync();
    }
}