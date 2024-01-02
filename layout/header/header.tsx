import {HeaderData} from "../../data/header.data";
import {useState} from "react";
import HeaderModal from "../../component/modal/headerModal";

const Header = () =>{

    const [headerState, setHeaderState] = useState<boolean>(false)

    const switchState = () =>{
        setHeaderState(prevState => !prevState)
    }

    return(
        <header className={"mt-4"}>


            <div className={"w-full  flex  justify-evenly mx-4 items-center    lg:mx-16 "}>

                <div className={"w-full  flex justify-around items-center   lg:gap-0 " }>


                  <img src="/png/logo.png" className={"w-52 h-52"}/>



                    <div className={`bg-burger-image bg-no-repeat w-10 h-10 lg:hidden `} onClick={switchState}>

                    </div>






                    {HeaderData.map((item) =>(

                        <div className={`hidden lg:block m-3.5 text-lg font-semibol ${headerState? "hidden":"block"}`} key={item.id}>{item.name} </div>



                    ))}

                </div>


                <div className={"hidden lg:block w-60 font-medium"}>
                    Нужна срочная помощь?
                    Позвоните нам <span className={"p-1 bg-logo-blue text-white font-bold rounded-md "}>89099201091</span>
                </div>








            </div>

            {headerState && (
                <HeaderModal/>
            )}


        </header>
    )

}

export default Header;