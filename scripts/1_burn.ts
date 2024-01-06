import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { BurnToken } from '../artifacts/ts'

//! TestNet Token $PACA
// 23ced1fcda7fb1f53641dc299cf49b12a89338c80d05534fc5b366d5b65acd02

//! Mainnet Token $PACA
// b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002

// This deploy function will be called by cli deployment tool automatically
//* Note that deployment scripts should prefixed with numbers (starting from 0)
const tokenBurn: DeployFunction<Settings> = async (
  deployer: Deployer,
): Promise<void> => {
  // Get settings
  const result = await deployer.deployContract(BurnToken, {
    // The initial states of the faucet contract
    initialFields: {
      tokensburned: 0n,
      tokenid: "c4d0eca28076ad888751518000396745680af4d2949dc64170a1c596c136e501",
      owner: "16gAmGuCysLjGxHK8TUENkvhbqvwZRb6BabUbsxLYkSkd"
    }
  })
  console.log('Burn contract id: ' + result.contractInstance.contractId)
  console.log('Burn contract address: ' + result.contractInstance.address)
}

export default tokenBurn
