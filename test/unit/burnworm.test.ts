import { web3, Project, TestContractParams, addressFromContractId, AssetOutput, DUST_AMOUNT } from '@alephium/web3'
import { expectAssertionError, randomContractId, testAddress } from '@alephium/web3-test'
import { BurnWorm, BurnWormTypes, WormEatAlph, WormEatNgu, WormWithdrawAlph, WormWithdrawNgu } from '../../artifacts/ts'

describe('unit tests', () => {
  let testContractId: string
  let testTokenId: string
  let testContractAddress: string
  let testParamsFixture: TestContractParams<BurnWormTypes.Fields, { id: string, amount: bigint }>

  // We initialize the fixture variables before all tests
  beforeAll(async () => {
    web3.setCurrentNodeProvider('http://127.0.0.1:22973', undefined, fetch)
    await Project.build()
    testContractId = randomContractId()
    testTokenId = testContractId
    testContractAddress = addressFromContractId(testContractId)
    testParamsFixture = {
      // a random address that the test contract resides in the tests
      address: testContractAddress,
      // assets owned by the test contract before a test
      initialAsset: { alphAmount: 10n ** 18n, tokens: [{ id: testTokenId, amount: 30n }] }, // 10 ALPH tokens, 10 Random Tokens
      // initial state of the test contract
      initialFields: {
        ngu: testTokenId,
        ngufee: 1n,
        alphfee: 500000000000000000n, // 0.5 ALPH
        owner: testAddress,
        ngubalance: 30n,
        alphbalance: 10n ** 18n // 1 ALPH
      },
      // arguments to test the target function of the test contract
      testArgs: { id: testTokenId, amount: 1n }, // Burning one random token
      // assets owned by the caller of the function
      inputAssets: [{ address: testAddress, asset: { alphAmount: 10n ** 18n, tokens: [{ id: testTokenId, amount: 30n }] } }] // 1 ALPH and 30 Random Tokens
    }
  })

  it('test burn with alph fee', async () => {
    const testParams = testParamsFixture
    const testResult = await BurnWorm.tests.burntokenalph(testParams)

    // only one contract involved in the test
    const contractState = testResult.contracts[0] as BurnWormTypes.State
    // double check the balance of the contract assets
    expect(contractState.asset).toEqual({ alphAmount: 1500000000000000000n, tokens: [{ id: testTokenId, amount: 30n }] }) // 1.5 ALPH
    // the test framework support debug messages too
    // debug will be disabled automatically at the deployment to real networks
  })

  /*
  it('test withdraw', async () => {
    const testParams = { ...testParamsFixture, testArgs: { amount: 3n } }
    // test that assertion failed in the withdraw function
    await expectAssertionError(BurnWorm.tests.withdraw(testParams), testContractAddress, 0)
  })
  */
})
