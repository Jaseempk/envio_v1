import assert from "assert";
import { 
  TestHelpers,
  KuriCoreFactory_KuriMarketDeployed
} from "generated";
const { MockDb, KuriCoreFactory } = TestHelpers;

describe("KuriCoreFactory contract KuriMarketDeployed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for KuriCoreFactory contract KuriMarketDeployed event
  const event = KuriCoreFactory.KuriMarketDeployed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("KuriCoreFactory_KuriMarketDeployed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await KuriCoreFactory.KuriMarketDeployed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualKuriCoreFactoryKuriMarketDeployed = mockDbUpdated.entities.KuriCoreFactory_KuriMarketDeployed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedKuriCoreFactoryKuriMarketDeployed: KuriCoreFactory_KuriMarketDeployed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      caller: event.params.caller,
      marketAddress: event.params.marketAddress,
      intervalType: event.params.intervalType,
      timestamp: event.params.timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualKuriCoreFactoryKuriMarketDeployed, expectedKuriCoreFactoryKuriMarketDeployed, "Actual KuriCoreFactoryKuriMarketDeployed should be the same as the expectedKuriCoreFactoryKuriMarketDeployed");
  });
});
