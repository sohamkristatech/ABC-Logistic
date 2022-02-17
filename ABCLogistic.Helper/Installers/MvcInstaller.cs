namespace ABCLogistic.Helper.Installers
{
    internal class MvcInstaller : IServicesInstaller
    {
        public void Install(IServiceCollection services, IConfiguration configuration)
        {
            services.AddControllersWithViews().AddJsonOptions(x =>
            {
                x.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
                x.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
        }
    }
}
