using Microsoft.ML.Data;

namespace IrisFlowerAPI.DataModels
{
    public class IrisPrediction : IrisData
    {
        [ColumnName("PredictedLabel")]
        public uint ClusterPrediction { get; set; }

        [ColumnName("Score")]
        public float[] Distances { get; set; }
    }
}
