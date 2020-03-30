export default function validate(contract) {
    let validity = true;
    validity = validity && contract.contractName.trim().length > 0;
    validity = validity && contract.contractType && contract.contractType.trim().length > 0;
    validity = validity && contract.dueDate instanceof Date && !Number.isNaN(contract.dueDate.getTime());
    validity = validity && contract.workInterval instanceof Array && contract.workInterval.length === 2;
    validity = validity && contract.workInterval[0] instanceof Date && !Number.isNaN(contract.workInterval[0].getTime());
    validity = validity && contract.workInterval[1] instanceof Date && !Number.isNaN(contract.workInterval[1].getTime());
    return validity === true;
}