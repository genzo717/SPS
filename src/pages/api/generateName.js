export default function handler(req, res) {
    const { idea = '', context = '' } = req.query;
  const seed = `${idea} ${context}`.trim();
  const base = seed.replace(/\s+/g, '').slice(0, 5) || 'idea';
  res.status(200).json({
    names: [`${base}ly`, `${base}ify`, `${base}hub`]
  });
}
