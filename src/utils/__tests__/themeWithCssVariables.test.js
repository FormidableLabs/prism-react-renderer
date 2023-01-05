import themeWithCssVariables from "../themeWithCssVariables";

describe("themeWithCssVariables", () => {
  it("creates a visually equivalent theme with one type per style entry", () => {
    const input = {
      plain: { color: "red" },
      styles: [
        {
          types: ["type1", "type2"],
          style: { color: "green" },
        },
        {
          types: ["type1"],
          style: { fontWeight: "bold" },
          languages: "javascript",
        },
      ],
    };

    const { theme, variables } = themeWithCssVariables(input);
    expect(theme).toEqual({
      plain: { color: "var(--plain-color)" },
      styles: [
        {
          types: ["type1"],
          style: { color: "var(--type1-color)" },
        },
        {
          types: ["type2"],
          style: { color: "var(--type2-color)" },
        },
        {
          types: ["type1"],
          style: { fontWeight: "var(--type1-fontWeight)" },
          languages: "javascript",
        },
      ],
    });
    expect(variables).toEqual({
      "--plain-color": "red",
      "--type1-color": "green",
      "--type2-color": "green",
      "--type1-fontWeight": "bold",
    });
  });
});
