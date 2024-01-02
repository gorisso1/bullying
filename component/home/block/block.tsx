import {BlockData} from "../../../data/block.data";
import ArrowSvg from  "public/svg/arrow.svg";
const BlockHome = () =>{


    return(
        <div className={"mx-auto mt-40"}>
        <h2 className={"text-xl font-bold lg:text-2xl text-center"}>Что такое травля и как это тебя касается?</h2>
        <div className={"mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 mt-14"}>



            {BlockData(1).map((block, index) => (
                <div key={index} className={"lg:w-400 lg:h-300 border border-gray-300 shadow p-4 rounded-2xl  shadow-inset-y-5 shadow-md"}>
                    {block.icon && <block.icon />}
                    <p className={"mt-2.5 font-medium text-2xl "}>{block.title}</p>
                    <p className={"text-size-18px mt-2.5"}>{block.des}</p>

                </div>
            ))}




        </div>

            <h2 className={"font-medium text-2xl text-center mt-14"}>Что делать, если ты столкнулся с травлей</h2>

            <div className={"grid grid-cols-1 lg:grid-cols-3  gap-14 mt-14 "}>
                {BlockData(2).map((block, index) => (
                    <div key={index} className={"mx-auto w-400"} >
                        <div >

                           <div className={"relative inline-block p-4 bg-gray-50 border border-gray-300 shadow p-4 rounded-2xl  shadow-inset-y-5 shadow-md"}>{block.title}
                               <div className="after-element absolute bottom-[-20px] right-[33px]">
                                   <ArrowSvg/>
                               </div>

                           </div>
                            <div className={"inline-block mt-4 p-4 bg-gray-50 border border-gray-300 shadow p-4 rounded-2xl  shadow-inset-y-5 shadow-md"}>{block.des}</div>
                        </div>
                        {/* Добавьте код для отображения SVG */}
                        {/* Например, если block.icon - это компонент SVG, то: */}



                    </div>
                ))}


            </div>
        </div>
    )

}

export default BlockHome;