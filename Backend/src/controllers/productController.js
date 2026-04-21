import { pool } from "../config/db.js";

export const getProducts = async (req, res) => {
  const products = await pool.query("SELECT * FROM products");
  res.json(products.rows);
};

export const addProduct = async (req, res) => {
  const { name, price } = req.body;

  const product = await pool.query(
    "INSERT INTO products(name, price) VALUES($1,$2) RETURNING *",
    [name, price]
  );

  res.json(product.rows[0]);
};