import { table } from "@/airtable";

export default async function signup(req, res) {
    const { emailAdd } = req.body;

    try {
        await table.create({"Email": emailAdd})
        res.status(200).json({ message: 'Email added successfully' })
    } catch (error) {
        res.status(400).send(error.message);
    }
  }