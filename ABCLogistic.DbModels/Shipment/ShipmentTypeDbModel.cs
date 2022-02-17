namespace ABCLogistic.DbModels.Shipment;

public class ShipmentTypeDbModel : DbModelBase
{
    [StringLength(50)]
    public string Type { get; set; }
}