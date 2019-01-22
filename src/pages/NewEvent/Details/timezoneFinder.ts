export interface TZType {
  [continent: string]: string[][];
}
export type TZIndexType = Array<{
  str: string[];
  val: string[];
  path: (string | number)[];
}>;

export class TZFinder {
  private index: TZIndexType;
  private all: TZType;

  constructor(zones: TZType) {
    this.index = this.createIndex(zones);
    this.all = zones;
  }

  getAll() {
    return this.all;
  }

  private static normalize(text: string) {
    return text
      .toLowerCase()
      .replace(/\/|,/g, " ")
      .replace(/  /g, " ");
  }

  private static splitUniq(...args: string[]) {
    return [
      ...new Set(
        args
          .map(s => TZFinder.normalize(s))
          .join(" ")
          .split(" ")
      )
    ];
  }

  private createIndex(TZ: TZType): TZIndexType {
    let index: TZIndexType = [];
    for (let [key, values] of Object.entries(TZ)) {
      values.forEach((value, localeIndex) => {
        let [locale] = value;
        index.push({
          str: TZFinder.splitUniq(key, locale),
          val: value,
          path: [key, localeIndex]
        });
      });
    }
    return index;
  }

  async search(word: string, index: TZIndexType = this.index) {
    let obj: TZType = {};
    let re = new RegExp(word, "i");
    let matches = index.filter(({ str }) => str.some(s => re.test(s)));
    for (let { path, val } of matches) {
      await new Promise(rs => setImmediate(rs));
      let [cont] = path;
      (obj[cont] = obj[cont] || []).push(val);
    }
    return obj;
  }
}
