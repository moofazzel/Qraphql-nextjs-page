import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../graphql/queries';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { loading, error, data } = useQuery(QUERY_USERS,);
  const users = data?.getUsers?.users || []

  if (loading) {
    return <>Loading....</>
  }

  return (
    <>
      <h1>Helloo !!! </h1>
      <div>
        {users.map((user, i) => <p key={i}>{user.name || "No User Found"}</p>)}
      </div>
    </>

  )
}
