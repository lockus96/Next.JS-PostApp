export default async function handler(req, res) {
  
  if( req.method === 'GET' ){

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

    return
  }

  if( req.method === 'POST' ){

    const { content } = JSON.parse(req.body)

    const data = {
        records: [
            {
              fields: {
                content,
                date: new Date().toISOString()
              }
            }
        ]
    }

    const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    console.log('response', response)

    res.status(201).json({ response })
  }

  return
}
