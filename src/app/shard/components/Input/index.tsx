import {InputProps} from "@nextui-org/react";
import {Input as InputComponent} from "@nextui-org/input";

interface Props extends InputProps {

}

const Input: React.FC<Props> = ({...props}: Props) => {
    return (


        <InputComponent labelPlacement={"inside"}  variant={"faded"} color={"default"}  {...props} />


    )
}
export default Input