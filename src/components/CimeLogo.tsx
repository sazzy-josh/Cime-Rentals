export default function CimeLogo({
  textColor = "#0a0a0a",
  size = "navbar",
}: {
  textColor?: string;
  size?: "navbar" | "footer";
}) {
  const textClass = size === "navbar" ? "text-[1.4rem] sm:text-[1.8rem]" : "text-3xl";

  return (
    <span className={`logo-font ${textClass} leading-none flex items-center`} style={{ color: textColor }}>
      Cime Rentals
    </span>
  );
}
