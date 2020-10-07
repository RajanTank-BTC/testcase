import { createArray } from '../testcase'

describe("Array Testing ", () => {

  it("create empty array ", () => {
    let result = []
    expect(createArray(0, "type")).toEqual(result);
  });

  it("Create with one item", () => {
    let result = [{
      Obj: {},
      disable: false,
      id: 1,
      name: "Some Title ",
      someString: "",
      type: "type",
    }]
    expect(createArray(1, "type")).toEqual(result)
  })

  it("Create array's object ", () => {
    let result = [{
      Obj: {},
      disable: false,
      id: 1,
      name: "Some Title ",
      someString: "",
      type: "Lorem ipsum"
    },
    {
      Obj: {},
      disable: false,
      id: 2,
      name: "Some Title ",
      someString: "",
      type: "Lorem ipsum"
    },
    {
      Obj: {},
      disable: false,
      id: 3,
      name: "Some Title ",
      someString: "",
      type: "Lorem ipsum"
    },
    {
      Obj: {},
      disable: false,
      id: 4,
      name: "Some Title ",
      someString: "",
      type: "Lorem ipsum"
    }]
    expect(createArray(4, "Lorem ipsum")).toEqual(result)
  })
})

