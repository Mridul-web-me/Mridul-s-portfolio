import Link from "next/link"
import Layout from "./Layout"
import HireMe from "./HireMe"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
        <Layout className="flex py-8 items-center justify-between">
            <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
            <div className="flex items-center">
                Build with <span className="text-primary text-2xl px-1 dark:text-primaryDark">&#9825;</span> by &nbsp;<Link className="underline underline-offset-2" href="/">Mridu</Link>
            </div>
            <Link href="/" className="underline underline-offset-2">Say Hello</Link>
        </Layout>
        
    </footer>
  )
}

export default Footer