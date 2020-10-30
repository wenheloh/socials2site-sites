export default class StringUtils {
  private static instance: StringUtils;

  public static getInstance(): StringUtils {
    if (!StringUtils.instance) {
      StringUtils.instance = new StringUtils();
    }

    return StringUtils.instance;
  }

  public getKebabCase = (text: string) => {
    const match = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    if (match && match.length > 0) {
      return match.map(x => x.toLowerCase()).join("-");
    }

    return "";
  };
}
