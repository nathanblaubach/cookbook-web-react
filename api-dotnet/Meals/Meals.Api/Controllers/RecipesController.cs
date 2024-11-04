using Microsoft.AspNetCore.Mvc;

namespace Meals.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RecipesController(IRecipeRepository repository) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetRecipesAsync(string? searchTerm, string[]? categories)
        {
            return Ok(await repository.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, categories));
        }

        [HttpGet("{recipeId:long}")]
        public async Task<IActionResult> GetRecipeByIdAsync(long recipeId)
        {
            var recipe = await repository.GetRecipeByIdAsync(recipeId);
            return recipe is null ? NotFound() : Ok(recipe);
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategoriesAsync()
        {
            return Ok(await repository.GetCategoriesAsync());
        }
    }
}
