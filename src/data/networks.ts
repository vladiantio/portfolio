interface Network {
  name: string;
  url: string;
  isSecondary?: boolean;
}

export default [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vladiantio"
  },
  {
    name: "GitHub",
    url: "https://github.com/vladiantio"
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/vladiantio.com",
    isSecondary: true
  },
  {
    name: "X",
    url: "https://x.com/vladiantio",
    isSecondary: true
  },
] as Network[];
