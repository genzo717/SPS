import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Names() {
  const router = useRouter();
  const { idea } = router.query;
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [context, setContext] = useState('');

  const fetchNames = async (ctx = '') => {
    if (!idea) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({ idea });
      if (ctx) params.append('context', ctx);
      const res = await fetch(`/api/generateName?${params.toString()}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idea) {
      setAttempt(1);
      fetchNames();
    }
  }, [idea]);

  const handleSelect = (name) => {
    router.push(`/result?idea=${encodeURIComponent(idea)}&name=${encodeURIComponent(name)}`);
  };

 const handleRegenerate = () => {
    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);
    fetchNames(nextAttempt >= 3 ? context : '');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 space-y-4">
      <h1 className="text-2xl font-bold uppercase">Choose a name</h1>
      {loading && <p>Loading...</p>}
      <ul className="space-y-2">
        {names.map((n) => (
          <li key={n}>
            <button
              onClick={() => handleSelect(n)}
              className="bg-[#f5f542] text-black px-4 py-2 rounded-sm font-bold"
          >
              {n}
            </button>
          </li>
        ))}
      </ul>
      {attempt >= 3 && (
        <input
          type="text"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Add more context..."
          className="px-4 py-2 text-black rounded-sm w-full max-w-xs"
        />
      )}
      <button onClick={handleRegenerate} className="underline">
        {attempt >= 3 ? 'Generate More Names' : 'Regenerate Names'}
      </button>
    </main>
  );
}
