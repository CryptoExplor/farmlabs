/**
 * Assigns a random persona (user agent and browser characteristics) to simulate human-like diversity.
 * Intended to be used per wallet or per session in stealth farming setups.
 */

function generatePersona(id) {
  const platforms = ['Win32', 'MacIntel', 'Linux x86_64', 'iPhone', 'Android'];
  const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
  const os = ['Windows NT 10.0', 'Macintosh; Intel Mac OS X 10_15_7', 'X11; Linux x86_64', 'iPhone; CPU iPhone OS 14_2', 'Linux; Android 9'];
  const lang = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES'];

  const platform = platforms[Math.floor(Math.random() * platforms.length)];
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const system = os[Math.floor(Math.random() * os.length)];
  const userAgent = `Mozilla/5.0 (${system}) AppleWebKit/537.36 (${browser}) Safari/537.36`;

  return {
    name: `${browser} Persona ${id}`,
    userAgent,
    language: lang[Math.floor(Math.random() * lang.length)],
    platform,
    behavior: {
      delayFactor: parseFloat((0.8 + Math.random() * 1.5).toFixed(2)),
      idleChance: parseFloat((Math.random() * 0.5).toFixed(2))
    }
  };
}

export const WalletPersonaManager = {
  personas: Array.from({ length: 104 }, (_, i) => generatePersona(i + 1)),

  /**
   * Get a random persona object.
   */
  getRandomPersona() {
    return this.personas[Math.floor(Math.random() * this.personas.length)];
  }
};
