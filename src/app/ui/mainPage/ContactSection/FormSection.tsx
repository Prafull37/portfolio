import Input from "@/app/ui/common/Input";
import TextArea from "../../common/TextArea";
import contactStyle from './contact.module.scss'


export default function FormSection(){
    
    return <form>
        <Input label="Name" type="text"/>
        <Input label="Email" type="email"/>
        <TextArea label="Message"/>
        <button className={contactStyle.sendButton}>
            Send
        </button>
    </form>
}