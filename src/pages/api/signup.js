import Airtable from 'airtable';

export default function signup(req, res) {
    const { emailAdd } = req.body;
    
    const base = new Airtable({apiKey: process.env.AIRTABLE_API}).base(process.env.AIRTABLE_NAME);

    try {
        // Check if email exists
        base('Emails')
        .select({
            filterByFormula: `Email = "${emailAdd}"`,
            maxRecords: 1,
        }).firstPage(function(err, records){
            if (err) { 
                console.error(err); 
                return; 
            }
            if (records.length > 0) {
                res.status(405).send('Email already exists!')
                return;
            } 
        
        // Email does not exist, so add email to list
        base('Emails').create({
            "Email": emailAdd
        });
        res.status(200).json({ message: 'Email added successfully' })
    
        })
        
    } catch (error) {
        res.status(400).send(error.message);
    }
  }