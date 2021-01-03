const AdvancedStorage = artifacts.require("AdvancedStorage");

contract("AdvancedStorage", () => {

    let advancedStorage = null;
    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
    });

    it("SHOULD ADD AN Element TO THE ids ARRAY", async () => {
        await advancedStorage.add(10);
        const result = await advancedStorage.ids(0);
        assert(result.toNumber() === 10);
    });
    
    it("SHOULD GET AN ELEMENT OF THE ids ARRAY", async () => {
        await advancedStorage.add(20);
        const result = await advancedStorage.get(1);
        assert(result.toNumber() === 20);
    });

    it("SHOULD GET THE ids ARRAY", async () => {
        const rawId = await advancedStorage.getAll();
        const ids = rawId.map(id => id.toNumber());
        assert.deepEqual(ids, [10, 20]);
    });

    it("SHOULD GET THE LENGTH OF THE ids ARRAY", async () => {
        const length = await advancedStorage.length();
        assert(length.toNumber() === 2);
    });
});