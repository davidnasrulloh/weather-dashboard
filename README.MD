# FrontEnd and Backend Application Weathers App

This is the README documentation for the backend application. It provides an overview of the application and instructions on how to use the provided APIs.

## APIs

1. setting .env WEATHER_API=
2. Setting user and password in file database.js for create and connection to database postgres
3. Create database `weather_dashboard` with table `cities` -> and column `id`, `city_name`

### Get Cities

- Endpoint: `http://localhost:5000/api/cities`
- Method: GET
- Description: Retrieves a list of cities.
- Example Response:
  ```json
  [
    {
      "id": 1,
      "name": "Jakarta"
    },
    {
      "id": 2,
      "name": "Surabaya"
    },
    {
      "id": 3,
      "name": "Bandung"
    }
  ]
  ```

### Post Cities

- Endpoint: `http://localhost:5000/api/cities`
- Method: POST
- Description: Adds a new city to the list.
- Request Body:

  ```json
  {
    "city": "Mojokerto"
  }
  ```

  - Example Response:

  ```json
  {
    "id": 4,
    "name": "Mojokerto"
  }
  ```

### Get Weather

- Endpoint: http://localhost:5000/api/weather/{city}
- Method: GET
- Description: Retrieves the weather information for a specific city.
- Example: To get the weather information for Jakarta, use http://localhost:5000/api/weather/jakarta.

### Getting Started Backend & Frontend

To get started with the backend application, follow the instructions below:

1. Clone the repository: git clone <repository-url>
2. Install dependencies: npm install global app and make sure npm install in client directory
3. Run the application: npm run dev in global app
4. Access the APIs using the provided endpoints and methods.

Make sure to replace http://localhost:5000 with the appropriate host and port if you are running the application on a different environment.
And using port http://localhost:3000 using frontend weather app

Happy coding!
