using Cookbook.Api;
using Cookbook.Application;
using Cookbook.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .ConfigureInfrastructureServices()
    .ConfigureApplicationServices()
    .ConfigureApiServices();

builder
    .Build()
    .ConfigureApi()
    .Run();
