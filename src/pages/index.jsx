export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white font-bold p-6">
      <h1 className="text-4xl mb-8 text-neon-yellow">Startup Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Name Ideas" />
        <Card title="Domain Check" />
        <Card title="Market Size Chart" />
        <Card title="Pricing" />
        <Card title="Competitors" />
        <Card title="Recommended Tools" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-gray-900 border border-neon-yellow rounded-lg p-4 shadow-lg">
      <h2 className="text-neon-yellow mb-2">{title}</h2>
      <div className="h-24" />
    </div>
  );
}
