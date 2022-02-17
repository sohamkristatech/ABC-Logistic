namespace ABCLogistic.Helper.ExtensionMapper;

public static class StartUpExtension
{
    public static void InstallServices(this IServiceCollection services, IConfiguration configuration, Type type)
        => services.InstallServices(configuration, type.Assembly);

    private static void InstallServices(this IServiceCollection services, IConfiguration configuration,
        Assembly assembly) => assembly.GetTypes()
        .Where(x => typeof(IServicesInstaller).IsAssignableFrom(x) & !x.IsAbstract & !x.IsInterface)
        .Select(Activator.CreateInstance)
        .Cast<IServicesInstaller>()
        .ToList()
        .ForEach(x => x.Install(services, configuration));
}