export default async function handler(req, res) {

  const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
    }
  })

  const { records } = await response.json()

  const posts = records.map( record => {
    return {
      id: record.id,
      ...record.fields
    }
  })

  
  res.status(200).json({ posts })
}
