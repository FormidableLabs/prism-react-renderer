import themeToDict from "../themeToDict"

describe("themeToDict", () => {
  it("converts entry.types to dictionary", () => {
    const input = {
      plain: { color: "red" },
      styles: [
        {
          types: ["1", "2"],
          style: {
            color: "green",
          },
        },
        {
          types: ["3"],
          style: {
            color: "blue",
          },
        },
        {
          types: ["2"],
          style: {
            color: "orange",
          },
        },
      ],
    }

    const expected = {
      root: {
        color: "red",
      },
      plain: {
        color: "red",
        backgroundColor: null,
      },
      1: {
        color: "green",
      },
      2: {
        color: "orange",
      },
      3: {
        color: "blue",
      },
    }

    expect(themeToDict(input)).toEqual(expected)
    // Check order in which keys were added to implicitly test merge strategy
    expect(Object.keys(themeToDict(input, 'js'))).toEqual(Object.keys(expected))
  })

  it("limits entries by entry.languages", () => {
    const input = {
      plain: {},
      styles: [
        {
          types: ['test'],
          languages: ['js'],
          style: {
            color: "green",
          },
        }
      ],
    }

    expect(themeToDict(input, 'js').test).toEqual({
      color: 'green'
    })

    expect(themeToDict(input, 'ocaml').test).toEqual(undefined)
  })
})
