using Microsoft.ML.Data;

namespace IrisFlowerAPI.DataModels
{
    public class IrisData
    {
        [ColumnName(@"SepalLength")]
        public float SepalLength { get; set; }

        [ColumnName(@"SepalWidth")]
        public float SepalWidth { get; set; }

        [ColumnName(@"PetalLength")]
        public float PetalLength { get; set; }

        [ColumnName(@"PetalWidth")]
        public float PetalWidth { get; set; }

        [ColumnName(@"iris_class")]
        public string IrisType { get; set; }
    }
}
