using Cookbook.Application.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Cookbook.Api.Controllers;

[Route("recipes")]
public class RecipesController(ISender sender) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Index(string? searchTerm, long[]? categoryIds)
        => Ok(await sender.Send(new GetRecipesBySearchTermAndCategories(searchTerm, categoryIds)));
    
    [HttpGet("{recipeId}")]
    public async Task<IActionResult> Get(long? recipeId)
    {
        if (!recipeId.HasValue)
        {
            return BadRequest();
        }
        var recipe = await sender.Send(new GetRecipeById(recipeId.Value));
        if (recipe is null)
        {
            return NotFound();
        }
        return Ok(recipe);
    }
}
