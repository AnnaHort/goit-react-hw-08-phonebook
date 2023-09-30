import { LoginForm } from "components/LoginForm/LoginForm";
import { PhoneboofStyle, TitleStyle } from "./NavigationPage.styled";

const NavigationPage = () => {
    return (
        <>
        <PhoneboofStyle>Phonebook</PhoneboofStyle>
         <TitleStyle>The best contact management solution</TitleStyle>
         <LoginForm/>
        </>
       
    )
}

export default NavigationPage;