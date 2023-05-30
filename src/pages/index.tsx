import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies"
import Navbar from "../components/Navbar"

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
      <Navbar>
        <div className="text-gray-100">
            {user?.username}
        </div>
      </Navbar>
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