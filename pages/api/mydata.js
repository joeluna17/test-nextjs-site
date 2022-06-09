export default function handler(req, res) {
  const { id } = req.query
  const data = [
    { name: 'Data one', title: 'Get data One' },
    { name: 'Data Two', title: 'Get data Two' },
    { name: 'Data Three', title: 'Get data Three' },
  ]

  const data2 = [
    { name: 'Data one Silly', title: 'Get data One' },
    { name: 'Data Two Silly', title: 'Get data Two' },
    { name: 'Data Three Silly', title: 'Get data Three' },
  ]
  res.status(200).json(id && parseInt(id) === 1 ? data : data2)
}
