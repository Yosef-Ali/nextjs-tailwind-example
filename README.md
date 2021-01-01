This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Create Next App

Inside of your newly created repo spin up a brand new Next.js project

```bash
 npx create-next-app .
```

The command that will start the local development server.

```bash
 yarn dev
```

# Install TailwindCSS

install autoprefixer with tailwindcss and postcss

```bash
 yarn add install tailwindcss postcss autoprefixer
```

Generate tailwind config

```bash
 npx tailwindcss init -p
```

Generate tailwind full config - I will explain later

```bash
 npx tailwindcss init tailwind.config-full.js  --full
```

## Create SRC folder

Create `src` folder and move `pages`, and `styles` inside of it.

```bash
public/
src/
|-- pages
|-- styles
postcss.config.js
tailwind.config-full.js
tailwind.config.js
...
```

## Create and import tailwind.css

Inside of `src/styles` we will create tailwind.css with the default layers and delete the other default css files. _`src/styles/tailwind.css`_

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `tailwind.css` it in the` _app.js.`

_`src/pages/_app.js`_

```bash
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

To get the **TailwindCSS autocompletion** in your components you might need to restart your VSCode.

## Page Content

`index.js` is the home page of your Next.js project, replace the content with your`s.

```jsx
import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Next.js example!</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='min-h-screen flex flex-col justify-center'>
				<img
					className='m-auto my-4 w-24 sm:w-auto'
					alt='Ihatetomatoes'
					src='/assets/img_logo.svg'
				/>
				<h1 className='mx-auto text-4xl font-bold'>
					Welcome to Next.js example!
				</h1>
			</main>
		</div>
	);
}
```

# Push everything to GitHub

```bash
git add .
git commit -m 'project setup'
git push
```

it will ask your pc login(admin) password

# Pages

A `custom Document` is commonly used to augment your application's <html> and <body> tags. This is necessary because Next.js pages skip the definition of the surrounding document's markup.

create the file ./pages/\_document.js

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
```
