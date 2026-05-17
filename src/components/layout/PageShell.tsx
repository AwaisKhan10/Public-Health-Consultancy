import { Header } from "./Header";
import { Footer } from "./Footer";

type PageShellProps = {
  children: React.ReactNode;
  navLabel: string;
  footerVariant?: "light" | "dark";
  headerVariant?: "light" | "dark";
};

export function PageShell({
  children,
  navLabel,
  footerVariant = "light",
  headerVariant = "light",
}: PageShellProps) {
  return (
    <>
      <Header navLabel={navLabel} variant={headerVariant} />
      <main>{children}</main>
      <Footer variant={footerVariant} />
    </>
  );
}
