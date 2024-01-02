
import {LayoutProps} from "interfaces/layout.props";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";


const Layout: React.FC<LayoutProps> = ({ children }) =>{

    return(
        <div className={"flex flex-col min-h-screen"}>
            <Header/>
            {children}
            <Footer/>
        </div>



    )

}

export default Layout;