export default class Provider {
  /*
   *  Function to get providers. This is to mimic the future provider registry
   */

  static getProviderByBaseURL(value) {
    return Provider.getIdentityProviders().filter((prov) => {
      return prov.baseURL === value;
    })[0];
  }
  static isWebIdValid(webId:string) {
    const regex = new RegExp(
      // eslint-disable-next-line no-useless-escape
      /((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/,
      "i"
    );
    return regex.test(webId);
  }
  static getIdentityProviders() {
    return [
      {
        id: "inrupt",
        custom: false,
        label: "Inrupt",
        image: "./img/inrupt.svg",
        baseURL: "https://inrupt.net",
        value: "https://inrupt.net/auth",
        registerLink: "https://inrupt.net/register",
        card: "inrupt.net/profile/card#me",
        delete: "https://inrupt.net/account/delete",
      },

      {
        id: "solid-web-prototype",
        custom: false,
        label: "Solid Web Prototype",
        image: "/img/Solid.png",
        baseURL: "https://solidweb.org",
        value: "https://solidweb.org",
        registerLink: "https://solidweb.org/register",
      }
    ];
  }
}
