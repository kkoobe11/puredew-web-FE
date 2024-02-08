Jump to 
[Go to author README](#author-readme) |
[Go to Next.js README](#nextjs-readme)


# Repository Author Generated README
<a id="author-readme"></a>
This project is built with the following key libraries and frameworks:

NextJS 14.1.0 (App router)
https://nextjs.org/docs/getting-started/installation

next js requires node version above 18.17.0, manage your node version through
[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)

## Main Libraries

- [Next.js](https://nextjs.org/docs/getting-started/installation) - A React framework for building modern web applications.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Zustand](https://github.com/pmndrs/zustand) - A small, fast and scaleable bearbones state-management solution.

## UI Libraries

- [Tailwind CSS](https://tailwindcss.com/docs/installation) - A utility-first CSS framework for rapidly building custom user interfaces.
- [Headless UI](https://headlessui.dev/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- [Heroicons](https://github.com/tailwindlabs/heroicons) - A set of free MIT-licensed high-quality SVG icons for UI development.
- [Tailwind Components](https://tailwindui.com/components) - Tailwind UI components and templates.
- [shadcn](https://ui.shadcn.com/) - A collection of reusable components for Tailwind CSS.

## Other Libraries

- [Husky](https://typicode.github.io/husky/get-started.html) - Used for automating tasks such as linting and testing before commits.
- [Cross-env](https://github.com/kentcdodds/cross-env) - A library that allows for cross-platform environment variable usage.
- [Prettier](https://prettier.io/) - An opinionated code formatter.

## Development Tools

- [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Yarn](https://classic.yarnpkg.com/en/) - Fast, reliable, and secure dependency management.

--------------------------------------------
This project requires node version above 18.17.0

to check your node version

```bash
node -v
```

in case that you node version is below 18.17.0, you can use nvm to manage your node version

```bash
nvm install 18.17.0
nvm use 18.17.0
```

to check node versions installed in your machine

```bash
nvm ls
```

## Installation

To install the project, you need to have Node.js version 18 or above. You can manage your Node.js version using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-name>
yarn install
```

then run the development server

```bash
yarn dev
```


## Project Structure

### [middleware.js](https://nextjs.org/docs/app/building-your-application/routing/middleware) 
Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly. Middleware runs before cached content and routes are matched. See [Matching Paths](https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths) for more details.

### [app directory](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
The app directory is the main directory for the project, it contains the pages and components of the project.

Next.js uses a file-system based router where folders are used to define routes.

Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
### assets directory
The assets directory contains the images, fonts, and other assets used in the project.

### components directory
The components directory contains the reusable components used in the project. layout contains the generally made components for the layout but ui contains the components that are installed from [shadcn](https://ui.shadcn.com/).

### containers directory
The containers directory contains mostly all of the code that is displayed in the frontend. The use of containers is mostly to elevate architecture aimed to elevate scalability and maintainability.

containers are usually named after the directory, and it can use the components from the components directory, or it can opt in to have its own component folder, where special cases of components are used only in the container.

### lib directory
The lib directory contains the utility functions and hooks used in the project.

### store directory
The store directory contains the state management of the project, it uses zustand for state management.
to learn more about zustand you can visit [zustand](https://github.com/pmndrs/zustand)

### styles directory
The styles directory contains the global styles and tailwind css configuration.

### misc
The project also contains a .env file for environment variables, .eslintrc.js for eslint configuration, .prettierrc for prettier configuration, and .husky directory for husky configuration.


## Usage
in next js 14.1 using app router, you can create a new page by creating a new file in the app directory, the name of the directory will be the route and name of the page.


```bash
app/about/page.js
```

to add metadata to the page you can add a metadata object to the page file in the app directory.

```bash
export const metadata = {
  title: 'Project Name | Current Page',
  description: 'Page Description',
}
```

containers are usually imported in the app directory for scalability and maintanability.

### Client Side Rendering
a page can opt in to render on client side by specifying 'use client' on top of the code. read more with this [link](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

### Server side rendering
in nextJS (app router), the use of getStaticPaths, getStaticProps and getServerSideProps are removed, instead you can use 
```export default async function``` to render server side components.

# Author
<div>
<img src="https://avatars.githubusercontent.com/u/102146326?v=4" alt="Profile Picture" style="border-radius: 50%; width: 48px;">
<div>
<p><strong>kkoobe11</strong></p>
</div>
</div>


This project scaffolding in next.JS is maintained by [kkoobe11](https://github.com/kkoobe11). Feel free to reach out if you have any questions or suggestions.

--------------------------------------------

# Next.js Generated README


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<a id="nextjs-readme"></a>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.