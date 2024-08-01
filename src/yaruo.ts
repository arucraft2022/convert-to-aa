/**
 * Converts the given text to AA (ASCII Art) in the style of Yaruo.
 * @param text The text to convert.
 * @returns The converted AA text.
 */
export function convertToAAYaruo(text: string): string {
  const template = `
　 　 　 　　 　 　 ＿＿＿_
　 　 　 　 　 ／　　 　 　＼
　 　 　 　　／　　─　　  ─　＼   ${text.toUpperCase()}
　 　 　 　／ 　 （⏁） 　（⏁） ＼
　 　 　 　|　 　 （__人__）　 　|
　 　 　 　＼　 　　 ｀⌒´ 　　,／
　 　 　 　／　　　 　ー‐　　　　＼
`;

  return template;
}
