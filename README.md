# 1CS Project

This project is a web application built with Next.js, Tailwind CSS, and Docker. It includes features such as user authentication, image uploads to Cloudinary, and price estimation using Google Generative AI.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Docker](#docker)
- [Folder Structure](#folder-structure)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/W4ssim23/1CS_Project
   cd 1cs-project
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Environment Variables

Create a [.env.local](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:

```env
GEMENI_API=your_gemini_api_key
NEXT_PUBLIC_API_URL=https://your-api-url.com/app/
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Running the Project

To run the project locally, use the following command:

    ```sh
    npm run dev
    ```

This will start the development server on [http://localhost:3000](http://localhost:3000).

## Testing

To run the tests, use the following command:

    ```sh
    npm test
    ```

The tests are configured using Jest and can be found in the **tests** directory.

## Docker

### Building and Running the Application

To build and run the application using Docker, use the following command:

    ```sh
    docker compose up --build
    ```

### Deploying to the Cloud

Build your Docker image:

    ```sh
    docker build -t myapp .
    ```

Push the image to your registry:

    ```sh
    docker push myregistry.com/myapp
    ```

## Folder Structure

```sh
1cs-project/
├── __tests__/
│   └── Login.test.jsx
├── .dockerignore
├── .env.local
├── .gitignore
├── .next/
├── .swc/
├── compose.yaml
├── Dockerfile
├── jest.config.js
├── jest.setup.js
├── jsconfig.json
├── messages/
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public/
├── README.Docker.md
├── README.md
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── i18n/
│   ├── lib/
│   ├── middleware.js
├── tailwind.config.js
```

## License

This project is licensed under the MIT License.
