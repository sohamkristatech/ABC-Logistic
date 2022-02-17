namespace ABCLogistic.Helper.Installers;

internal class ValueProvider : IServicesInstaller
{
    public void Install(IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient<IShipmentService, ShipmentService>()
            .AddTransient(x => new Lazy<IShipmentService>(() => x.GetService<IShipmentService>()!));

        services.AddTransient<IShipmentTypeService, ShipmentTypeService>()
            .AddTransient(x => new Lazy<IShipmentTypeService>(() => x.GetService<IShipmentTypeService>()!));
    }
}