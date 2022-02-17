using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABCLogistic.Helper.Installers
{
    public class KendoGridInstaller : IServicesInstaller
    {
        public void Install(IServiceCollection services, IConfiguration configuration)
        {
            services.AddKendo();
        }
    }
}
