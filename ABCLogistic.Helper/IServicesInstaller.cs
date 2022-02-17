namespace ABCLogistic.Helper;

public interface IServicesInstaller
{
    void Install(IServiceCollection services, IConfiguration configuration);
}