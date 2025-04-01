# README.md - The Formal Club Website Clone

This project is a clone of [The Formal Club](https://theformalclub.in/) website, built using Next.js and Tailwind CSS. It's designed to be deployed on Netlify.

## Project Structure

The project follows a standard Next.js structure:

- `src/app/` - Next.js pages
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and data
- `public/` - Static assets like images

## Features

- Responsive design for all screen sizes
- Product listing with filtering and sorting
- Product detail pages with size selection
- Shopping cart functionality
- Contact form with validation
- About Us and Contact Us pages

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand (for state management)

## Local Development

To run the project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Netlify

This project is configured for easy deployment to Netlify. Follow these steps:

1. Create a new site on Netlify
2. Connect to your Git repository
3. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy the site

Alternatively, you can deploy directly from the command line:

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
2. Login to Netlify:
   ```
   netlify login
   ```
3. Initialize and deploy:
   ```
   netlify init
   netlify deploy --prod
   ```

## Configuration

The project includes a `netlify.toml` file with the necessary configuration for deploying a Next.js application to Netlify.

## License

This project is for educational purposes only.
