class CookieStorage {
  static store(key, value) {
    document.cookie = `${key}=${JSON.stringify(value)};`;
  }

  static get(key) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split('; ');
    const cookie = cookies.find((cookie) => cookie.startsWith(key + '='));

    if (!cookie) {
      return null;
    }

    const value = cookie.split('=')[1];
    return JSON.parse(value);
  }
}
