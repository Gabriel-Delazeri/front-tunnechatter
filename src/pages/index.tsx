import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies"
import HomeLayout from "../layouts/Home"

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
      <HomeLayout/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['tunechatter.token']: token } = parseCookies(ctx)
  
    if (!token) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
}