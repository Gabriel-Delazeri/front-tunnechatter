import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies"

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div className="text-gray-100">
            {user?.username}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['tunechatter.token']: token } = parseCookies(ctx)
  
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
}