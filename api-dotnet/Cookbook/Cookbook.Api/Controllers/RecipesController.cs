using System.ComponentModel.DataAnnotations;
using Cookbook.Application.Interfaces;
using Cookbook.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Cookbook.Api.Controllers;

[Route("recipes")]
public class RecipesController(IRecipeQueries recipeQueries) : Controller
{
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Recipe>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Index(string? searchTerm, long[]? categoryIds)
        => Ok(await recipeQueries.GetByParamsAsync(searchTerm, categoryIds));
    
    [HttpGet("{recipeId}")]
    [ProducesResponseType(typeof(Recipe), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Get(long? recipeId)
    {
        if (!recipeId.HasValue)
        {
            throw new ValidationException($"Invalid {nameof(recipeId)} provided");
        }
        return Ok(await recipeQueries.GetByIdAsync(recipeId.Value));
    }
}
