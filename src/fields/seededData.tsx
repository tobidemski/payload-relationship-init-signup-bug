import { Payload } from 'payload'

export async function SeededData({ payload }: { payload: Payload }) {
  const myCollectionitemsResponse = await payload.find({
    collection: 'mycollection',
  })

  return (
    <div>
      <div>Seeded data in &quot;mycollection&quot; collection</div>
      {myCollectionitemsResponse.totalDocs > 0 &&
        myCollectionitemsResponse.docs.map((doc, index) => {
          return (
            <div key={index}>
              {index + 1}. {doc.name}
            </div>
          )
        })}
    </div>
  )
}
