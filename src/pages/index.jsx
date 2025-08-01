import IdeaForm from '../components/IdeaForm';

export default function Home() {
  return (
   <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <section className="text-center space-y-6 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">Let’s validate your stupid, brilliant idea.</h1>
        <p className="text-lg md:text-xl text-gray-300">The world doesn't need another startup... unless it's yours.</p>
        <IdeaForm />
      </section>
      <footer className="mt-12 text-xs text-gray-400">Built by the sick minds of SPS. No regrets.</footer>
    </main>
  );
}
