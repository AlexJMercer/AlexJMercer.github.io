export const createCanonical = (data) => [
  {
    hid: "canonical",
    rel: "canonical",
    href: data
      ? `https://ultimatemercer.com/${data}`
      : "https://ultimatemercer.com",
  },
];
