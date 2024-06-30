import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
// companies
const companiesSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const companiesModule = mongoose.model("companies", companiesSchema);
app.get("/companies", async (req, res) => {
  const companies = await companiesModule.find();
  res.send(companies);
});
app.get("/companies/:id", async (req, res) => {
  const { id } = req.params;
  const companies = await companiesModule.findById(id);
  res.send(companies);
});

app.post("/companies", async (req, res) => {
  const body = req.body;
  const companies = new companiesModule(body);
  await companies.save();
  res.send(companies);
});

app.put("/companies/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const companies = await companiesModule.findByIdAndUpdate(id, body);
  res.send(companies);
});

app.delete("/companies/:id", async (req, res) => {
  const { id } = req.params;
  const companies = await companiesModule.findByIdAndDelete(id);
  res.send(companies);
});

// //////////////// Menyu
const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  description: String,
  price: Number
});
const menuModule = mongoose.model("menu", menuSchema);
app.get("/menu", async (req, res) => {
  const menu = await menuModule.find();
  res.send(menu);
});
app.get("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const menu = await menuModule.findById(id);
  res.send(menu);
});
app.get("/categories", async (req, res) => {
  const menu = await menuModule.find();
  res.send(menu);
});
app.get("/categories/:category", async (req, res) => {
  const catgor = req.params.category;
  const menu = await menuModule.find({ category: catgor });
  res.send(menu);
});

app.post("/menu", async (req, res) => {
  const body = req.body;
  const menu = new menuModule(body);
  await menu.save();
  res.send(menu);
});

app.put("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const menu = await menuModule.findByIdAndUpdate(id, body);
  res.send(menu);
});

app.delete("/menu/:id", async (req, res) => {
  const { id } = req.params;
  const menu = await menuModule.findByIdAndDelete(id);
  res.send(menu);
});

// //////////////// reservation
const reservationSchema = new mongoose.Schema({
  date: String,
  time: String,
  count: Number,
  name: String,
  phone: Number,
  email: String,
});
const reservationModule = mongoose.model("reservation", reservationSchema);
app.get("/reservation", async (req, res) => {
  const reservation = await reservationModule.find();
  res.send(reservation);
});
app.get("/reservation/:id", async (req, res) => {
  const { id } = req.params;
  const reservation = await reservationModule.findById(id);
  res.send(reservation);
});

app.post("/reservation", async (req, res) => {
  const body = req.body;
  const reservation = new reservationModule(body);
  await reservation.save();
  res.send(reservation);
});

app.put("/reservation/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const reservation = await reservationModule.findByIdAndUpdate(id, body);
  res.send(reservation);
});

app.delete("/reservation/:id", async (req, res) => {
  const { id } = req.params;
  const reservation = await reservationModule.findByIdAndDelete(id);
  res.send(reservation);
});

// blog
const blogSchema = new mongoose.Schema({
  image: String,
  name: String,
  items: String,
  description: String,
  detail: String,
});
const blogModule = mongoose.model("blog", blogSchema);
app.get("/blog", async (req, res) => {
  const blog = await blogModule.find();
  res.send(blog);
});
app.get("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await blogModule.findById(id);
  res.send(blog);
});

app.post("/blog", async (req, res) => {
  const body = req.body;
  const blog = new blogModule(body);
  await blog.save();
  res.send(blog);
});

app.put("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const blog = await blogModule.findByIdAndUpdate(id, body);
  res.send(blog);
});

app.delete("/blog/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await blogModule.findByIdAndDelete(id);
  res.send(blog);
});
// contact
const contactSchema = new mongoose.Schema({
  image: String,
  name: String,
  items: String,
  description: String,
  detail: String,
});
const contactModule = mongoose.model("contact", contactSchema);
app.get("/contact", async (req, res) => {
  const contact = await contactModule.find();
  res.send(contact);
});
app.get("/contact/:id", async (req, res) => {
  const { id } = req.params;
  const contact = await contactModule.findById(id);
  res.send(contact);
});

app.post("/contact", async (req, res) => {
  const body = req.body;
  const contact = new contactModule(body);
  await contact.save();
  res.send(contact);
});

app.put("/contact/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const contact = await contactModule.findByIdAndUpdate(id, body);
  res.send(contact);
});

app.delete("/contact/:id", async (req, res) => {
  const { id } = req.params;
  const contact = await contactModule.findByIdAndDelete(id);
  res.send(contact);
});
// auth
mongoose
  .connect("mongodb+srv://rufet:rufet@developermongo.nxg6jik.mongodb.net/")
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
