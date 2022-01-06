using IrisFlowerAPI.DataModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using System;

namespace IrisFlowerAPI.Controllers
{
    [Route("api/v1/predictions")]
    [ApiController]
    public class IrisController : ControllerBase 
    {
        public static readonly Lazy<PredictionEngine<IrisData, IrisPrediction>> PredictEngine = new Lazy<PredictionEngine<IrisData, IrisPrediction>>(() => CreatePredictEngine(), true);

        public IrisController()
        {
           
        }
        
        private static string GetTypeFromCluster(uint clusterId)
        {
            return clusterId switch
            {
                1 => "Iris Setosa",
                2 => "Iris Versicolor",
                3 => "Iris Virginica",
                _ => null,
            };
        }
        public static PredictionEngine<IrisData, IrisPrediction> CreatePredictEngine()
        {
            var mlContext = new MLContext();
            ITransformer mlModel = mlContext.Model.Load("MLModels/IrisClusteringModel.zip", out var _);
            return mlContext.Model.CreatePredictionEngine<IrisData, IrisPrediction>(mlModel);
        }
        [HttpPost]
        public ActionResult<string> Post([FromBody] IrisData data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            IrisPrediction predictedValue = PredictEngine.Value.Predict( example: data);
            return Ok(GetTypeFromCluster(predictedValue.ClusterPrediction));
        }
    }
}
