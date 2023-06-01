import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies"
import Layout from "../layouts"
import CarouselComponent from "../components/Carousel"

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
      <Layout>
        <div className="text-gray-100 px-20 py-20">
            <CarouselComponent />
            <div className="flex flex-col items-center mt-10 text-3xl px-6">
              <p className="text-gray-200">Track albums you've listened to</p>
              <p className="text-gray-200">Save those you want to hear</p>
              <p className="text-gray-200">Share your favorites with friends</p>
            </div>
        </div>
      </Layout>
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