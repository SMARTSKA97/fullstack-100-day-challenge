# Angular Setup and Commands

## Setting up Node.js
1. Download and install Node.js from the [official website](https://nodejs.org/).
2. Verify the installation by running:
    ```sh
    node -v
    npm -v
    ```

## Installing Angular CLI using NPX
1. Create a new Angular project:
    ```sh
    npx @angular/cli new my-angular-app
    cd my-angular-app
    ```

## Installing PrimeNG, PrimeFlex, and PrimeIcons
1. Install Angular CLI globally:
    ```sh
    npm install -g @angular/cli
    ```
    ```sh
    cd my-angular-app
    ```
2. Install PrimeNG:
    ```sh
    npm install primeng --save
    ```
3. Install PrimeFlex:
    ```sh
    npm install primeflex --save
    ```
4. Install PrimeIcons:
    ```sh
    npm install primeicons --save
    ```

## Building the Angular Project
1. To build the project, run:
    ```sh
    ng build
    ```

## Running the Angular Project
1. To serve the project locally, run:
    ```sh
    ng serve
    ```
2. Open your browser and navigate to `http://localhost:4200/`.
