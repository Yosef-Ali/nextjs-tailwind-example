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
