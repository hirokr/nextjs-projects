import Link from "next/link"

const NotFound = () => {
  // throw new Error('NotFound')
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, error</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
