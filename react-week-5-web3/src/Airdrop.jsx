
 import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export  function Airdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();

         async function sendAirdropToUser(){
            await connection.requestAirdrop(wallet.publicKey, 1000000000 * LAMPORTS_PER_SOL)
            alert ("airdropped sol")
        
        }
    return <div>

<input type="text" placeholder="Amount" />
<button onClick={sendAirdropToUser}>Sent AirDeop</button> 
    </div>
}