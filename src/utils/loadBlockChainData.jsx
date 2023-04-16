import { doctorABI } from "../ABI/doctorABI"
import { patientABI } from "../ABI/patientABI"
import { userABI } from "../ABI/userABI"


const loadBlockChainData = async () => {
    const web3 = window.web3//Declare Web3
    const accounts = await web3.eth.getAccounts() //Load account
    const account = accounts[0];
    // setAccount(account) sett account 

    const networkId = await web3.eth.net.getId() //Network ID
    //const networkData = DStorage.networks[networkId]

    if (networkId) {
        console.log("Network Id", networkId)
        const doctor = new web3.eth.Contract(doctorABI, "0xb202bfe21c74CFCfDe26d55568A2815B390d53a0")
        const patient = new web3.eth.Contract(patientABI, "0x11bcA9B6E7E247b27A825eBEcaaD3C3c24cdd907")
        const user = new web3.eth.Contract(userABI, "0xC65F34021Bce8853f2606D6FABCA9Fc44f3FD8c4")

        return { doctor, patient, user, account };
    }
    else { //Else
        window.alert('DStorage contract not deployed to detected network')//alert Error
    }
}
export default loadBlockChainData;

