namespace ABCLogistic.DbModels.Shipment;

public class ShipmentDbModel : DbModelBase
{
    [StringLength(150)]
    [Required]
    public string SenderName { get; set; }

    [Required]
    public string Description { get; set; }

    public bool Expedited { get; set; }

    [Required]
    public int ShipmentTypeId { get; set; }

    [ForeignKey(nameof(ShipmentTypeId))]
    public ShipmentTypeDbModel ShipmentType { get; set; }

    public DateTime CreatedOn { get; set; }
}