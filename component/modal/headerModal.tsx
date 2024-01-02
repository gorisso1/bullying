import {HeaderData} from "../../data/header.data";

const HeaderModal = () =>{
    return(
        <div className={"absolute top-10  bg-amber-50 rounded-2xl"}>

            {HeaderData.map((item) =>(

                <div className={` m-3.5 text-lg font-semibol`} key={item.id}>{item.name} </div>



            ))}

        </div>
    )

}

export default HeaderModal;