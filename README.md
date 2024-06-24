# Random-Advice-Generator

A simple and fun Random Advice Generator built using React, which fetches random pieces of advice from the [Advice Slip API](https://api.adviceslip.com/advice). This project helps practice API integration in React apps. 

![Screenshot 2024-06-23 011700](https://github.com/TanishqKashla/Random-Advice-Generator/assets/143280732/83d7338f-ba0f-4317-a7d8-59727fce4d12)


## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Details](#api-details)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Author](#author)

## Features
- Fetches a random piece of advice from the Advice Slip API.
- Displays the advice along with its unique ID.
- Button with a dice image to generate a new piece of advice.
- Prevents fetching new advice for 2 seconds to comply with the API rate limit.

## Demo
You can see a live demo of the project [here](https://tanishqkashla.github.io/Random-Advice-Generator/)

## Installation

To get a local copy up and running, follow these simple steps.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Random-Advice-Generator.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd Random-Advice-Generator
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**
    ```bash
    npm start
    ```

2. **Open your browser and visit:**
    ```bash
    http://localhost:3000
    ```

3. **Use the dice button to get a new random piece of advice!**


## API Details

The project utilizes the [Advice Slip API](https://api.adviceslip.com/advice) to fetch random pieces of advice. 

- **Endpoint:** `https://api.adviceslip.com/advice`
- **Method:** GET
- **Rate Limit:** Requests are limited to one per 2 seconds.


## API Integration

This project uses [Axios](https://axios-http.com/) to make HTTP requests to the Advice Slip API. Here’s a snippet of how Axios is used to fetch the data:

```javascript
import axios from 'axios';

const fetchAdvice = async () => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        // Extracting advice and id from the API response
        const advice = response.data.slip.advice;
        const adviceNumber = response.data.slip.id;

        // Update the state or handle advice data
        getAdvice(advice);
        getAdviceNumber(adviceNumber);
    } catch (error) {
        console.error('Error fetching the advice:', error);
    }
};
```


## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **CSS:** For styling the components.
- **Advice Slip API:** Free API for generating random advice.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

- [@Tanishq Kashla](https://github.com/TanishqKashla)
- Email : tanishqkashla11@gmail.com
