using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.ML;
using Microsoft.OpenApi.Models;
using IrisFlowerAPI.DataModels;

namespace ML_API_V1
{
    public class Startup
    {


        readonly string MyAllowedSpecificOrigins = "_myAllowedSpecificOrigins";


        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "IrisFlowerWebApi", Version = "v1" });
            });
            services.AddPredictionEnginePool<IrisData, IrisPrediction>()
                .FromFile(modelName: "IrisModel", filePath: "MLModels/IrisClusteringModel.zip", watchForChanges: true);


            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowedSpecificOrigins,
                                    builder =>
                                    {
                                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "IrisFlowerWebApi v1"));
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(this.MyAllowedSpecificOrigins);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors(this.MyAllowedSpecificOrigins);
                
            });


        }
    }
}
