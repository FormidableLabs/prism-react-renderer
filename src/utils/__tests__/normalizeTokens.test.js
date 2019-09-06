import normalizeTokens from "../normalizeTokens";

describe("normalizeTokens", () => {
  it("handles plain strings", () => {
    const input = ["hello", "world"];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["plain"], content: "hello" },
        { types: ["plain"], content: "world" }
      ]
    ]);
  });

  it("handles flat tokens", () => {
    const input = [
      { type: "test1", content: "hello" },
      { type: "test2", content: "world" }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["test1"], content: "hello" },
        { types: ["test2"], content: "world" }
      ]
    ]);
  });

  it("handles nested tokens", () => {
    const input = [
      {
        type: "test1",
        content: [
          { type: "nest1", content: "he" },
          { type: "nest2", content: "llo" }
        ]
      },
      { type: "test2", content: "world" }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["test1", "nest1"], content: "he" },
        { types: ["test1", "nest2"], content: "llo" },
        { types: ["test2"], content: "world" }
      ]
    ]);
  });

  it("handles nested & mixed tokens", () => {
    const input = [
      {
        type: "test1",
        content: [{ type: "nest", content: "he" }, "llo"]
      },
      { type: "test2", content: "world" },
      "!"
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["test1", "nest"], content: "he" },
        { types: ["test1"], content: "llo" },
        { types: ["test2"], content: "world" },
        { types: ["plain"], content: "!" }
      ]
    ]);
  });

  it("handles deeply nested tokens", () => {
    const input = [
      {
        type: "1",
        content: [
          {
            type: "2",
            content: [{ type: "3", content: "hello" }]
          }
        ]
      }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([[{ types: ["1", "2", "3"], content: "hello" }]]);
  });

  it("handles plain strings with newlines", () => {
    const input = ["hello", " \nworld"];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["plain"], content: "hello" },
        { types: ["plain"], content: " " }
      ],
      [{ types: ["plain"], content: "world" }]
    ]);
  });

  it("handles flat tokens with newlines", () => {
    const input = [
      { type: "test1", content: "hello" },
      { type: "test2", content: "wor\nld" }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["test1"], content: "hello" },
        { types: ["test2"], content: "wor" }
      ],
      [{ types: ["test2"], content: "ld" }]
    ]);
  });

  it("handles nested tokens with newlines", () => {
    const input = [
      {
        type: "test1",
        content: [
          { type: "nest1", content: "he" },
          { type: "nest2", content: "l\nlo" }
        ]
      },
      { type: "test2", content: "wor\nld" }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [
        { types: ["test1", "nest1"], content: "he" },
        { types: ["test1", "nest2"], content: "l" }
      ],
      [
        { types: ["test1", "nest2"], content: "lo" },
        { types: ["test2"], content: "wor" }
      ],
      [{ types: ["test2"], content: "ld" }]
    ]);
  });

  it("handles nested & mixed tokens with newlines", () => {
    const input = [
      {
        type: "test1",
        content: [{ type: "nest", content: "h\ne" }, "l\nlo"]
      },
      "world\n!"
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [{ types: ["test1", "nest"], content: "h" }],
      [
        { types: ["test1", "nest"], content: "e" },
        { types: ["test1"], content: "l" }
      ],
      [
        { types: ["test1"], content: "lo" },
        { types: ["plain"], content: "world" }
      ],
      [{ types: ["plain"], content: "!" }]
    ]);
  });

  it("handles deeply nested tokens with newlines", () => {
    const input = [
      {
        type: "1",
        content: [
          {
            type: "2",
            content: [{ type: "3", content: "hel\nlo" }]
          }
        ]
      }
    ];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [{ types: ["1", "2", "3"], content: "hel" }],
      [{ types: ["1", "2", "3"], content: "lo" }]
    ]);
  });

  it("handles empty lines gracefully", () => {
    const input = ["\n\n"];
    const output = normalizeTokens(input);

    expect(output).toEqual([
      [{ types: ["plain"], content: "", empty: true }],
      [{ types: ["plain"], content: "", empty: true }],
      [{ types: ["plain"], content: "", empty: true }]
    ]);
  });
});
