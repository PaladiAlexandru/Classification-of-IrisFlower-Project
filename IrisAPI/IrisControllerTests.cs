using IrisFlowerAPI.Controllers;
using IrisFlowerAPI.DataModels;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace IrisAPI
{
    public class IrisControllerTests
    {
        [Fact]
        public void Test1()
        {
            MLIrisFlower ml = new MLIrisFlower();
            MLIrisFlower.ModelInput DataTest = new MLIrisFlower.ModelInput()
            {
                Petal_length = 0.0f,
                Petal_width = 0.0f,
                Sepal_length = 0.0f,
                Sepal_width = 0.0f
            }
            ;
            Assert.Equal("Iris-setosa", MLIrisFlower.Predict(DataTest).Prediction);
        }
        [Fact]
        public void Test2()
        {
            IrisController controller = new IrisController();
            var flowerTest = new IrisData()
            {
                PetalLength = 0.0f,
                PetalWidth = 0.0f,
                SepalLength = 0.0f,
                SepalWidth = 0.0f
            }
            ;
            var result = (OkObjectResult)controller.Post(flowerTest).Result;
            Assert.Equal("Iris Setosa",result.Value);
        }
    }
}
