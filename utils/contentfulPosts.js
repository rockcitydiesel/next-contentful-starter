const space = '7gbzwsajf8x5'; // process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = '1PCCEThwWHfLb3FZkSPQV0BX6pn46nf1k6qBfl1AXfw'; // process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
