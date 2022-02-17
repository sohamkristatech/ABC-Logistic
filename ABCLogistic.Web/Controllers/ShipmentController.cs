namespace ABCLogistic.Controllers
{
    public class ShipmentController : Controller
    {
        private readonly IShipmentService _shipmentService;
        private readonly Lazy<IShipmentTypeService> _shipmentTypeService;

        public ShipmentController(IShipmentService shipmentService, Lazy<IShipmentTypeService> shipmentTypeService)
        {
            _shipmentService = shipmentService;
            _shipmentTypeService = shipmentTypeService;
        }

        protected override void Dispose(bool disposing)
        {
            _shipmentService.Dispose();
            base.Dispose(disposing);
        }

        public async Task<IActionResult> List()
        {
            await Task.Delay(10);
            return View();
        }

        public async Task<IActionResult> AjaxBinding([DataSourceRequest] DataSourceRequest request)
        {
            var data = _shipmentService.GetAll();

            var result = new DataSourceResult();

            data = data.ApplyFiltering(request.Filters);

            data = data.ApplySorting(request.Groups, request.Sorts);

            data = data.ApplyPaging(request.Page, request.PageSize);

            if (request.Groups.Any())
            {
                await Task.Delay(100);

                result.Data = data;
                result.Total = data.Count();

                return Json(result);
            }

            var list = await data.ToListAsync();

            result.Data = list;
            result.Total = list.Count;

            return Json(result);
        }

        public async Task<IActionResult> Create()
        {
            var shipmentTypeService = _shipmentTypeService.Value;

            var data = await shipmentTypeService.GetAllListAsync();

            var model = new ShipmentViewModel
            {
                SelectListForShipmentType = new Microsoft.AspNetCore.Mvc.Rendering
                    .SelectList(data, nameof(ShipmentTypeDbModel.Id), nameof(ShipmentTypeDbModel.Type))
            };

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(ShipmentViewModel model)
        {
            await _shipmentService.CreateAsync(model);

            return RedirectToAction(nameof(List));
        }

        [HttpPost]
        public async Task<IActionResult> Delete(int[] chkDelete)
        {
            var data = await _shipmentService.DeleteAsync(chkDelete);

            if (data is { Count: < 1 })
            {
                return NotFound();
            }

            return RedirectToAction(nameof(List));
        }

        public async Task<IActionResult> Details(int id)
        {
            var data = await _shipmentService.GetByIdAsync(id);

            if (data is null)
            {
                return NotFound();
            }

            return View(data);
        }
    }
}
