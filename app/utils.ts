export function getNameAndFormattedTimeOfComment({
  name,
  createdAt,
}: {
  name: string;
  createdAt: string;
}) {
  if (!name || !createdAt) {
    return "unknown";
  }
  return `By: ${name} on ${new Date(createdAt).toLocaleDateString(
    "en-us",
  )} at ${new Date(createdAt).toLocaleTimeString("en-us", {
    formatMatcher: "best fit",
  })}`;
}
