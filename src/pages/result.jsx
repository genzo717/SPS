import { useRouter } from 'next/router';

export default function Result() {
   const router = useRouter();
  const { idea } = router.query;

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold uppercase">Your Idea</h1>
        {idea ? <p className="text-lg text-[#f5f542]">{idea}</p> : <p>Loading...</p>}
      </div>
    </main>
  );
}
