// 0_subscribe.ts ~ Subscription contract for $NGU signals
import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { Subscribe } from '../artifacts/ts'

// dev address: 16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const subscriptionProtocol: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(Subscribe, {
    // the initial states of the Subscribe contract
    initialFields: {
      subfee: 777000000n,                                                         // notice the extra zeros for the 7 decimal places implied with $ngu as a token - add a zero
      platformfees: 0n,                                                           // notice no dev fees or contract fees, no fees until subscription handled
      devfees: 0n,
      fee: 54390000n,                                                             // 1% dev fee - add a zero
      dev: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",
      lead: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd",                      // fetch address from Elvis
      token: "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501"   // testnet play token                                                      // the id of the $NGU token
    }
  })
  console.log('Subscribe contract id: ' + result.contractInstance.contractId)
  console.log('Subscribe contract address: ' + result.contractInstance.address)
}

export default subscriptionProtocol