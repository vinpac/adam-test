const sleep = () => new Promise((resolve) => setTimeout(resolve, 5000));
let i = 1;

export default async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59");
  const data = { adam: i };
  await sleep();
  i += 1;

  return res.json(data);
};
