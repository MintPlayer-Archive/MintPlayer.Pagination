using Microsoft.Extensions.DependencyInjection;

namespace MintPlayer.Mapping.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IMapper<TSource, TTarget> GetMapper<TSource, TTarget>(this IServiceProvider services)
        {
            return services.GetRequiredService<IMapper<TSource, TTarget>>();
        }
    }
}
