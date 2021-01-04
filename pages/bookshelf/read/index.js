import { connectToDatabase } from '../../../utils/mongodb'

export default function ReadBooks({ books }) {
  const renderBookList = () => {
    return books.map(({ title, author}) => {
      return (
        <div className="flex items-center mt-8">
          <img className="w-24 mr-8" src="/images/storytelling.png" alt={title} />
          <div>
            <h3 className="text-2xl text-gray-900">{title}</h3>
            <p className="text-lg text-gray-700">{author}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="container mx-auto">
     <h1 className="text-2xl">Bookshelf with read books</h1>
     {renderBookList()}
    </div>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()
  const data = await db.collection("books").find().sort({_id: 1}).toArray();
  const books = data.map(({ title, author }) => {
    return {
      title,
      author,
    }
  })

  return {
    props: { books  },
  }
}
