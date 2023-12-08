const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_TOKEN })

async () => {
  try{
    const databaseID = process.env.NOTION_DATABASE_ID

    var response = await notion.databases.retrieve({
      database_id: databaseID,
    })

    console.log(response)
  }catch(e){
    console.error(e.body)
  }
}

console.log(process.env.NOTION_TOKEN, process.env.NOTION_DATABASE_ID)
