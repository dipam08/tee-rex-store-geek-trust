import {ReactNode} from "react";
import {Navbar} from "../components/NavBar.tsx";

type Props = {
    sideSection: ReactNode
    mainSection: ReactNode
}

export const RootLayout = (props: Props) => {
    return <div className="h-[calc(100vh-62px)] w-screen">
        <Navbar/>
        <div className="flex items-start w-full h-full">
            <div className="w-1/3 max-w-72 min-w-36 h-full">{props.sideSection}</div>
            <div className="w-full h-full">{props.mainSection}</div>
        </div>
    </div>
}