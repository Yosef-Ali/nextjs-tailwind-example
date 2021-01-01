import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<Layout>
			<main className='bg-white p-4'>
				<Hero />
			</main>
		</Layout>
	);
}
