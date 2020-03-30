import validate from "view/contracts/commons/ContractValidation";

const testData = {
    "contractName": "Test Contract",
    "contractType": "Code Only",
    "dueDate": new Date("3/29/2020"),
    "workInterval": [new Date("4/26/2020"), new Date("4/28/2020")]
};

test("When data is valid then validate returns true", function () {
    expect(validate(testData)).toBe(true);
});

test("When data.contractName is invalid then validate returns false", function () {
    const invalidData = {...testData, contractName: ""};
    expect(validate(invalidData)).toBe(false);
});

test("When data.codeType is invalid then validate returns false", function () {
    const invalidData = {...testData, contractType: ""};
    expect(validate(invalidData)).toBe(false);
});

test("When data.codeType is undefined then validate returns false", function () {
    const invalidData = {...testData};
    delete invalidData["contractType"];
    expect(validate(invalidData)).toBe(false);
});

test("When data.dueDate is not a date then validate returns false", function () {
    const invalidData = {...testData, dueDate: "09/09/2020"};
    expect(validate(invalidData)).toBe(false);
});

test("When data.dueDate is not valid then validate returns false", function () {
    const invalidData = {...testData, dueDate: new Date("invalid")};
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval is not an array then validate returns false", function () {
    const invalidData = {...testData, workInterval: {0: new Date(), 1: new Date}};
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval length is less than 1 then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: [new Date()]
    };
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval length is more than 2 then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: [new Date(), new Date(), "element 3"]
    };
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval[1] is not a date then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: ["09/09/2020", new Date()]
    };
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval[1] is not a valid date then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: [new Date("invalid"), new Date()]
    };
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval[2] is not a date then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: [new Date(), "09/09/2020"]
    };
    expect(validate(invalidData)).toBe(false);
});

test("When data.workInterval[2] is not a valid date then validate returns false", function () {
    const invalidData = {
        ...testData, workInterval: [new Date(), new Date("invalid")]
    };
    expect(validate(invalidData)).toBe(false);
});
