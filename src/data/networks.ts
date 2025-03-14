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
  {
    name: "YouTube",
    url: "https://youtube.com/@vladiantio",
    isSecondary: true
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@vladiantio",
    isSecondary: true
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/vladiantio",
    isSecondary: true
  }
] as Network[];
