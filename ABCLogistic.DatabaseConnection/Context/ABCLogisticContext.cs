using ABCLogistic.DbModels.Shipment;

namespace ABCLogistic.DatabaseConnection.Context
{
    public class ABCLogisticContext : DbContext
    {
        public ABCLogisticContext(DbContextOptions<ABCLogisticContext> options) : base(options)
        {

        }

        public DbSet<ShipmentTypeDbModel> ShipmentTypes { get; set; }

        public DbSet<ShipmentDbModel> Shipments { get; set; }
    }
}
