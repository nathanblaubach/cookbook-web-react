using Meals.Api;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .RegisterLocalServices()
    .AddProblemDetails()
    .AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapControllers();

app.UseExceptionHandler(handler => handler
    .Run(async context => await Results.Problem().ExecuteAsync(context)));

app.UseStatusCodePages(async statusCodeContext => await Results
    .Problem(statusCode: statusCodeContext.HttpContext.Response.StatusCode)
    .ExecuteAsync(statusCodeContext.HttpContext));

await app.RunAsync();
