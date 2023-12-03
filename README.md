# Timestamp Microservice

This project is a simple Express.js application that processes user-provided date information. The API handles date operations by returning the Unix timestamp and UTC representation of the input date.

## API Endpoint

`GET /api/:date`

## Usage

- **Request with a Valid Date:**
  - You can receive a JSON response with the following properties:
    - `unix`: The Unix timestamp of the input date (in milliseconds).
    - `utc`: The UTC representation of the input date.

- **Request with an Invalid Date:**
  - If an invalid date is provided, the following JSON response will be returned:
    ```
    { "error": "Invalid Date" }
    ```

- **Request with an Empty Date Parameter:**
  - If the date parameter is empty, you can receive a JSON response containing the current time:
    ```
    { "unix": <Unix timestamp of the current time>, "utc": "<UTC representation of the current time>" }
    ```

## Examples

- `/api/2023-11-25`
  - **Response:**
    ```json
    { "unix": 1679942400000, "utc": "Fri, 25 Nov 2023 00:00:00 GMT" }
    ```

- `/api/1451001600000`
  - **Response:**
    ```json
    { "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
    ```

- `/api/invalid-date`
  - **Response:**
    ```json
    { "error": "Invalid Date" }
    ```

- `/api/` (empty parameter)
  - **Response:**
    ```json
    { "unix": <Unix timestamp of the current time>, "utc": "<UTC representation of the current time>" }
    ```

## Installation

1. Download the project files to your computer.
2. Navigate to the project directory in the terminal or command prompt.
3. Install the necessary dependencies using the `npm install` command.
4. Start the application with the `npm start` command.
5. Use the API by visiting `http://localhost:3000` in your browser.

## Dependencies

- [Express.js](https://expressjs.com/): A lightweight web framework used for building web applications and APIs.


