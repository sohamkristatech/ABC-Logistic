namespace ABCLogistic.Helper.Installers;

internal class ContextInstaller : IServicesInstaller
{
    public void Install(IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContextPool<ABCLogisticContext>(option =>
        {
            option.UseSqlServer(configuration.GetConnectionString("ABCLogistic"));
        });
    }
}