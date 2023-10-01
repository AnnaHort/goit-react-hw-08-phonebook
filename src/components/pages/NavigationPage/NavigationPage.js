import { PhoneboofStyle, TitleStyle } from "./NavigationPage.styled";
import {BsPhoneFlip} from 'react-icons/bs'
const NavigationPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}> 
        <PhoneboofStyle>Phonebook</PhoneboofStyle>
         <TitleStyle>The best contact management solution</TitleStyle>
         <BsPhoneFlip style={{ fontSize: '300px' }}/>
        </div>
       
    )
}

export default NavigationPage;