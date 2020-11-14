import { Vue } from "nuxt-property-decorator";

export default class FormValidation extends Vue {
  protected required = (input: string): boolean | string => {
    if (input && input.trim().length > 1) {
      return true;
    }
    return "This field is required.";
  };

  protected min = (input: string, min: number): boolean | string => {
    if (input && input.trim().length >= min) {
      return true;
    }
    return `A minimum of ${min} characters is required.`;
  };

  protected max = (input: string, max: number): boolean | string => {
    if (input && input.trim().length <= max) {
      return true;
    }
    return `A maximum of ${max} characters is allowed.`;
  };

  protected isValidEmail = (input: string): boolean | string => {
    // Intense testing or simple validation then enough? 🌚
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input)) {
      return true;
    }
    return "Invalid email format.";
  };
}
