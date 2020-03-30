import {
    addContract,
    commitContractEdit,
    removeContracts,
    submitContractForEdit
} from "state/actions/creators/ContractsActions";
import ContractsActions from "state/actions/types/ContractsActions";

test("When addContract is called then event type is correct", function () {
    const addContractEvent = addContract({});
    expect(addContractEvent.type).toBe(ContractsActions.addContract);
});

test("When addContract is called then payload is correct", function () {
    const contractData = {data: "testData"};
    const addContractEvent = addContract(contractData);
    expect(addContractEvent.payload).toBe(contractData);
});

test("When removeContracts is called then event type is correct", function () {
    const addContractEvent = removeContracts({});
    expect(addContractEvent.type).toBe(ContractsActions.removeContracts);
});

test("When removeContracts is called then payload is correct", function () {
    const contractIds = ["id1", "id2"];
    const addContractEvent = removeContracts(contractIds);
    expect(addContractEvent.payload).toBe(contractIds);
});


test("When submitContractsForEdit is called then event type is correct", function () {
    const addContractEvent = submitContractForEdit({});
    expect(addContractEvent.type).toBe(ContractsActions.submitContractForEdit);
});

test("When removeContracts is called then payload is correct", function () {
    const contractId = "contractId";
    const addContractEvent = submitContractForEdit(contractId);
    expect(addContractEvent.payload).toBe(contractId);
});

test("When commitContractEdit is called then event type is correct", function () {
    const addContractEvent = commitContractEdit({});
    expect(addContractEvent.type).toBe(ContractsActions.commitContractEdit);
});

test("When commitContractEdit is called then payload is correct", function () {
    const contractData = {"contractName": "name"};
    const addContractEvent = commitContractEdit(contractData);
    expect(addContractEvent.payload).toBe(contractData);
});

