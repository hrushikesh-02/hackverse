export default function handler(req, res) {
  const { slug } = req.query;
  let arr = slug.split(",").map((el) => parseFloat(el));
  let found = true;
  let data = {};
  if (found) {
    data = {
      nft: arr, //temp
      rarity: "rare",
      price: "10.8",
      owner: "xyz_1234",
    };
  }
  if (found) res.status(200).json({ found, ...data });
  else {
    res.status(404).json({ found });
  }
}

