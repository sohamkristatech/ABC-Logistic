global using static System.GC;

namespace ABCLogistic.DataServices.ShipmentService
{
    public interface IShipmentService : IRepository<ShipmentDbModel, ShipmentViewModel>
    {
    }
}