import { Web3Provider as Web3Default} from "./Web3Context";

const Web3Provider = ({children}) => {
    return(
        <Web3Default>
        {children}
        </Web3Default>
    )
}
export default Web3Provider