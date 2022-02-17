namespace ABCLogistic.ViewModels.Shipment
{
    public class ShipmentViewModel
    {
        public int Id { get; set; }

        [StringLength(150, ErrorMessage = "Only upto 150 character is allowed.")]
        [Required(ErrorMessage = "Sender Name is required.")]
        public string SenderName { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        public string Description { get; set; }

        public SelectList SelectListForShipmentType { get; set; }

        public bool Expedited { get; set; }

        public string StrExpedited { get; set; }

        [Required(ErrorMessage = "Shipment Type is required.")]
        public int ShipmentTypeId { get; set; }

        public string ShipmentType { get; set; }

        public string CreatedOn { get; set; }
    }
}
