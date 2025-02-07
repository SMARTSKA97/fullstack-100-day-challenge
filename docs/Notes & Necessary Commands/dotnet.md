# .NET Commands Cheat Sheet

## Installation

To install the .NET SDK, use the following command:

```sh
# Install .NET SDK
dotnet sdk install
```

## Setting Up a New Project

To create a new .NET project, use the following commands:

```sh
# Create a new console application
dotnet new console -n MyConsoleApp

# Navigate to the project directory
cd MyConsoleApp
```

## Building the Project

To build your .NET project, use the following command:

```sh
# Build the project
dotnet build
```

## Running the Project

To run your .NET project, use the following command:

```sh
# Run the project
dotnet run
```

## Additional Commands

### Adding a Package

To add a NuGet package to your project, use the following command:

```sh
# Add a NuGet package
dotnet add package <PackageName>
```

### Running Tests

To run tests in your .NET project, use the following command:

```sh
# Run tests
dotnet test
```

### Publishing the Project

To publish your .NET project, use the following command:

```sh
# Publish the project
dotnet publish -c Release -o ./publish
```

### Cleaning the Project

To clean the build artifacts of your .NET project, use the following command:

```sh
# Clean the project
dotnet clean
```

### Restoring Dependencies

To restore the dependencies of your .NET project, use the following command:

```sh
# Restore dependencies
dotnet restore
```

## Conclusion

These commands should help you get started with .NET development, from installation to running and managing your projects. Happy coding!

## Creating a 3-Layer Web API (MVC)

To create a 3-layer Web API project, use the following commands:

### Step 1: Create the Solution

```sh
# Create a new solution
dotnet new sln -n MyWebApiSolution
```

### Step 2: Create the Projects

```sh
# Create the Web API project
dotnet new webapi -n MyWebApi

# Create the Business Logic Layer (BLL) project
dotnet new classlib -n MyWebApi.BLL

# Create the Data Access Layer (DAL) project
dotnet new classlib -n MyWebApi.DAL
```

### Step 3: Add Projects to the Solution

```sh
# Add the Web API project to the solution
dotnet sln add MyWebApi/MyWebApi.csproj

# Add the BLL project to the solution
dotnet sln add MyWebApi.BLL/MyWebApi.BLL.csproj

# Add the DAL project to the solution
dotnet sln add MyWebApi.DAL/MyWebApi.DAL.csproj
```

### Step 4: Add References Between Projects

```sh
# Add reference from Web API to BLL
dotnet add MyWebApi/MyWebApi.csproj reference MyWebApi.BLL/MyWebApi.BLL.csproj

# Add reference from BLL to DAL
dotnet add MyWebApi.BLL/MyWebApi.BLL.csproj reference MyWebApi.DAL/MyWebApi.DAL.csproj
```

### Step 5: Restore Dependencies and Build the Solution

```sh
# Restore dependencies
dotnet restore

# Build the solution
dotnet build
```

### Step 6: Run the Web API Project

```sh
# Navigate to the Web API project directory
cd MyWebApi

# Run the Web API project
dotnet run
```

These steps will help you set up a 3-layer Web API project using the MVC pattern in .NET. Happy coding!