export default function handler(req, res) {
   const { idea = '' } = req.query;
  const base = idea.toString().replace(/\s+/g, '').slice(0, 5) || 'idea';
  res.status(200).json({
    names: [`${base}ly`, `${base}ify`, `${base}hub`]
  });
}
