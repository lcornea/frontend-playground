import reducerBase from "./ReducerBase";
import ContractsActions from "src/state/actions/types/ContractsActions";
import {State} from "@ngrx/store";
import {Contract} from "../Models/Contract";

const playData = {
  "1536456607829":
    {
      "id": "1536456607829",
      "contractName": "Yahoo",
      "contractType": "SelfHosted",
      "dueDate": new Date("3/26/2020"),
      "workInterval": [new Date("3/26/2020"), new Date("3/28/2020")]
    },
  "1567992601638":
    {
      "id": "1567992601638",
      "contractName": "Google",
      "contractType": "Delivery",
      "dueDate": new Date("3/26/2020"),
      "workInterval": [new Date("3/28/2020"), new Date("3/30/2020")]
    },
  "1504920606511":
    {
      "id": "1504920606511",
      "contractName": "IBM",
      "contractType": "Code Only",
      "dueDate": new Date("3/29/2020"),
      "workInterval": [new Date("4/26/2020"), new Date("4/28/2020")]
    }
};

const defaultState = {
  contracts: playData,
  contractEdit: {},
  contractEditId: -1
};

let reducers = {};
reducers[ContractsActions.addContract] = function (state, contract: Contract) {
  let newContracts = {...state.contracts};
  newContracts[contract.id] = contract;
  return {...state, contracts: newContracts};
};

reducers[ContractsActions.submitContractForEdit] = function (state, id: string) {
  if (!state.contracts.hasOwnProperty(id)) {
    return state;
  }
  return {
    ...state,
    contractEdit: state.contracts[id],
    contractEditId: id
  };
};

reducers[ContractsActions.removeContracts] = function (state, ids: Array<string>) {
  let newContracts = {...state.contracts};
  for (let i in ids) {
    let id = ids[i];
    if (newContracts.hasOwnProperty(id)) {
      delete newContracts[id];
    }
  }
  return {...state, contracts: newContracts};
};

reducers[ContractsActions.commitContractEdit] = function (state, contract) {
  let contracts = {...state.contracts};
  contracts[state.contractEditId] = contract;
  return {
    ...state,
    contracts: contracts,
    contractEdit: {},
    contractEditId: -1
  }

};

export default reducerBase(reducers, defaultState);
