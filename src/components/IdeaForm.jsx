import { useState } from 'react';
import { useRouter } from 'next/router';

export default function IdeaForm() {
  const [idea, setIdea] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    router.push(`/names?idea=${encodeURIComponent(idea.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col items-center space-y-4">
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Your brilliant idea..."
        className="w-full px-4 py-3 text-black placeholder-gray-500 rounded-sm focus:outline-none" />
      <button
        type="submit"
        className="w-full bg-[#f5f542] text-black font-bold py-3 uppercase tracking-wide hover:opacity-90">
        Launch
      </button>
    </form>
  );
}
