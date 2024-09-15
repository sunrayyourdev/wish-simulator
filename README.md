# Wish Simulator

A Genshin Impact wishing simulator.

## Table of Contents

- [Wish Simulator](#wish-simulator)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Stack](#stack)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

Wish Simulator is a web application that mimicks the wishing system from the popular game, [Genshin Impact](https://genshin.hoyoverse.com/). Users can wish for characters and weapons from a limited pool to test their luck in a fun, risk-free environment.

## Features

- Wish from different banners
  - Rates and pity system work like the game
  - Available: Venti, Standard
- View their wish history

## Installation

To install and run the Wish Simulator locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/wish-simulator.git
    cd wish-simulator
    ```

2. Create a virtual environment and activate it:

    ```sh
    python -m venv venv
    venv\Scripts\activate  # On Windows
    # source venv/bin/activate  # On macOS/Linux
    ```

3. Install the required dependencies:

    ```sh
    pip install -r requirements.txt
    ```

4. Run the application:

    ```sh
    python __init__.py
    ```

## Usage

1. Open your web browser and go to `http://127.0.0.1:5000`.
2. Select a banner and start wishing.
3. View your wish history and results.

## Stack

- Python
- Flask
- HTML/CSS

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
