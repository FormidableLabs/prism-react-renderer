import generateScriptForSSR from "../generateScriptForSSR";
import duotoneDark from "../../themes/duotoneDark";
import duotoneLight from "../../themes/duotoneLight";

describe("generateScriptForSSR", () => {
  it("generates code to set CSS variables on the document root", () => {
    const themes = [duotoneDark, duotoneLight];
    const scriptStr = generateScriptForSSR(
      themes,
      "() => window.PRISM_REACT_RENDERER_INITIAL_THEME_ID"
    );
    expect(scriptStr).toMatchInlineSnapshot(`
      "const themeId = (() => window.PRISM_REACT_RENDERER_INITIAL_THEME_ID)();

      if (!themeId) {
        return;
      }

      const root = document.documentElement;

      if (themeId === 'duotoneDark') {
        root.style.setProperty('--plain-backgroundColor', '#2a2734');
        root.style.setProperty('--plain-color', '#9a86fd');
        root.style.setProperty('--comment-color', '#6c6783');
        root.style.setProperty('--prolog-color', '#6c6783');
        root.style.setProperty('--doctype-color', '#6c6783');
        root.style.setProperty('--cdata-color', '#6c6783');
        root.style.setProperty('--punctuation-color', '#6c6783');
        root.style.setProperty('--namespace-opacity', '0.7');
        root.style.setProperty('--tag-color', '#e09142');
        root.style.setProperty('--operator-color', '#e09142');
        root.style.setProperty('--number-color', '#e09142');
        root.style.setProperty('--property-color', '#9a86fd');
        root.style.setProperty('--function-color', '#9a86fd');
        root.style.setProperty('--tag-id-color', '#eeebff');
        root.style.setProperty('--selector-color', '#eeebff');
        root.style.setProperty('--atrule-id-color', '#eeebff');
        root.style.setProperty('--attr-name-color', '#c4b9fe');
        root.style.setProperty('--boolean-color', '#ffcc99');
        root.style.setProperty('--string-color', '#ffcc99');
        root.style.setProperty('--entity-color', '#ffcc99');
        root.style.setProperty('--url-color', '#ffcc99');
        root.style.setProperty('--attr-value-color', '#ffcc99');
        root.style.setProperty('--keyword-color', '#ffcc99');
        root.style.setProperty('--control-color', '#ffcc99');
        root.style.setProperty('--directive-color', '#ffcc99');
        root.style.setProperty('--unit-color', '#ffcc99');
        root.style.setProperty('--statement-color', '#ffcc99');
        root.style.setProperty('--regex-color', '#ffcc99');
        root.style.setProperty('--atrule-color', '#ffcc99');
        root.style.setProperty('--placeholder-color', '#ffcc99');
        root.style.setProperty('--variable-color', '#ffcc99');
        root.style.setProperty('--deleted-textDecorationLine', 'line-through');
        root.style.setProperty('--inserted-textDecorationLine', 'underline');
        root.style.setProperty('--italic-fontStyle', 'italic');
        root.style.setProperty('--important-fontWeight', 'bold');
        root.style.setProperty('--bold-fontWeight', 'bold');
        root.style.setProperty('--important-color', '#c4b9fe');
      }

      if (themeId === 'duotoneLight') {
        root.style.setProperty('--plain-backgroundColor', '#faf8f5');
        root.style.setProperty('--plain-color', '#728fcb');
        root.style.setProperty('--comment-color', '#b6ad9a');
        root.style.setProperty('--prolog-color', '#b6ad9a');
        root.style.setProperty('--doctype-color', '#b6ad9a');
        root.style.setProperty('--cdata-color', '#b6ad9a');
        root.style.setProperty('--punctuation-color', '#b6ad9a');
        root.style.setProperty('--namespace-opacity', '0.7');
        root.style.setProperty('--tag-color', '#063289');
        root.style.setProperty('--operator-color', '#063289');
        root.style.setProperty('--number-color', '#063289');
        root.style.setProperty('--property-color', '#b29762');
        root.style.setProperty('--function-color', '#b29762');
        root.style.setProperty('--tag-id-color', '#2d2006');
        root.style.setProperty('--selector-color', '#2d2006');
        root.style.setProperty('--atrule-id-color', '#2d2006');
        root.style.setProperty('--attr-name-color', '#896724');
        root.style.setProperty('--boolean-color', '#728fcb');
        root.style.setProperty('--string-color', '#728fcb');
        root.style.setProperty('--entity-color', '#728fcb');
        root.style.setProperty('--url-color', '#728fcb');
        root.style.setProperty('--attr-value-color', '#728fcb');
        root.style.setProperty('--keyword-color', '#728fcb');
        root.style.setProperty('--control-color', '#728fcb');
        root.style.setProperty('--directive-color', '#728fcb');
        root.style.setProperty('--unit-color', '#728fcb');
        root.style.setProperty('--statement-color', '#728fcb');
        root.style.setProperty('--regex-color', '#728fcb');
        root.style.setProperty('--atrule-color', '#728fcb');
        root.style.setProperty('--placeholder-color', '#93abdc');
        root.style.setProperty('--variable-color', '#93abdc');
        root.style.setProperty('--deleted-textDecorationLine', 'line-through');
        root.style.setProperty('--inserted-textDecorationLine', 'underline');
        root.style.setProperty('--italic-fontStyle', 'italic');
        root.style.setProperty('--important-fontWeight', 'bold');
        root.style.setProperty('--bold-fontWeight', 'bold');
        root.style.setProperty('--important-color', '#896724');
      }"
    `);
  });
});
