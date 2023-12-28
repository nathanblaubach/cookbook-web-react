using Cookbook.Domain;
using Cookbook.Infrastructure;
using Cookbook.Api;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .ConfigureDomain()
    .ConfigureInfrastructure()
    .ConfigureApi();

builder
    .Build()
    .Configure()
    .Run();
