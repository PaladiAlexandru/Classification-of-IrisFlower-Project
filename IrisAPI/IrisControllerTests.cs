using IrisFlowerAPI.Controllers;
using IrisFlowerAPI.DataModels;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace IrisAPI
{
    public class IrisControllerTests
    {
        [Fact]
        public void GivenIrisDataThenPostMethodShouldReturnTheExpectedCategory()
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
