import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Swap } from '../artifacts/ts'

//! Test Token (6 Decimals)
// c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501
//! Testnet Contract Template

//! Mainnet Contract Template

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const swapTemplate: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(Swap, {
    // The initial states of the swap template contract
    initialFields: {
      token: "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501",
      amount: 10000000000000n,
      tradetoken: "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501",
      tamount: 1000000000000n,
      owner: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",
      feealph: 10000000000000000, // 0.01 alph
      dev: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd"
    }
  })
  console.log('Swap contract id: ' + result.contractInstance.contractId)
  console.log('Swap contract address: ' + result.contractInstance.address)
}

export default swapTemplate
