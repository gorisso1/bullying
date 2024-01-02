import VkSvg from  'public/svg/vk.svg';
import MailSvg from  'public/svg/email.svg';
const Footer = () =>{

    return(
        <footer className={"mb-14"}>
            <div className={"lg:flex  items-center justify-evenly  mt-14 lg:rounded-3xl shadow-top-shadow  lg:mx-10  "}>
                <img src="/png/logo.png" className={"w-52 h-52"} />

            <div className={"font-medium text-size-14px "}>
                <div >Горячая линия поддержки
                    по вопросам травли</div>
                <div>С 10:00 до 20:00 с понедельника по пятницу</div>
                <span>8 800 500 44 14</span>
            </div>

                <div >



                    <a>info@zhuravlik.org</a>
                    <div>Социальные сети </div>
                    <div className={" flex gap-5 justify-center items-center"}>
                        <VkSvg/>

                        <MailSvg/>
                    </div>

                </div>
            </div>

        </footer>
    )


}

export default Footer;