import { ReactElement } from "react"
import { Navbar } from "../components/Navbar/Navbar"

export const Layout = ({children}:{children: ReactElement}) => {
    return (
        <main className="w-100">
            <Navbar />
            <div>{children}</div>
        </main>
    )
}