const services = require("../services/services");

exports.create = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };

    let result = await services.create(data);
    res.status(200).json({ message: "Blog posted successfully", data: result });
  } catch (error) {
    res.status(500).send("Blog post failed!");
    console.log(error);
  }
};

exports.getdata = async (req, res) => {
  try {
    let data = await services.getdata(); 
    data ? res.send(data) : null;
  } catch (error) {
    res.status(500).send("blog get failed !");
    console.error(error) || console.log("blog get failed");
  }
};
