import type { PropsWithChildren, ReactNode } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  SegmentedControl,
  Separator,
  Text,
} from "@radix-ui/themes";
import { shellCopy } from "../copy";
import { pickLocalizedText, useLocale } from "../i18n";
import { useThemeAppearance } from "../theme";

export const repoUrl = "https://github.com/chibataku0815/motion-recipes-remotion";
export const docsUrl = `${repoUrl}/tree/main/docs/recipes`;

export const withBase = (pathname = "") => {
  const trimmed = pathname.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL;
  return trimmed ? `${base}${trimmed}` : base;
};

type SiteShellProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  summary: string;
  meta?: ReactNode;
  actions?: ReactNode;
  pageKind?: "landing" | "detail";
}>;

export const SiteShell = ({
  eyebrow,
  title,
  summary,
  meta,
  actions,
  pageKind = "landing",
  children,
}: SiteShellProps) => {
  const { appearance, setAppearance } = useThemeAppearance();
  const { locale, setLocale } = useLocale();

  return (
    <div className={`site-shell site-shell--${pageKind}`}>
      <div className="site-aurora" aria-hidden="true" />
      <div className="site-grid" aria-hidden="true" />
      <header className="topbar">
        <Container size={{ initial: "4", xl: "4" }}>
          <Card className="topbar-frame" size="2">
            <Flex
              className="topbar-shell"
              direction={{ initial: "column", sm: "row" }}
              align={{ initial: "start", sm: "center" }}
              justify="between"
              gap="4"
            >
              <Link href={withBase()} underline="none" className="brand-lockup">
                <span className="brand-mark">Motion Recipes</span>
                <span className="brand-subtitle">
                  {pickLocalizedText(locale, shellCopy.brandSubtitle)}
                </span>
              </Link>
              <Flex className="topbar-links" gap="2" wrap="wrap" align="center">
                <Flex className="topbar-controls" gap="2" wrap="wrap" align="center">
                  <SegmentedControl.Root
                    className="locale-switch"
                    radius="small"
                    size="2"
                    value={locale}
                    onValueChange={(value) => {
                      if (value === "en" || value === "ja") {
                        setLocale(value);
                      }
                    }}
                  >
                    <SegmentedControl.Item value="en">
                      {pickLocalizedText(locale, shellCopy.localeEn)}
                    </SegmentedControl.Item>
                    <SegmentedControl.Item value="ja">
                      {pickLocalizedText(locale, shellCopy.localeJa)}
                    </SegmentedControl.Item>
                  </SegmentedControl.Root>
                <SegmentedControl.Root
                  className="theme-switch"
                  radius="small"
                  size="2"
                  value={appearance}
                  onValueChange={(value) => {
                    if (value === "light" || value === "dark") {
                      setAppearance(value);
                    }
                  }}
                >
                  <SegmentedControl.Item value="light">
                    {pickLocalizedText(locale, shellCopy.themeLight)}
                  </SegmentedControl.Item>
                  <SegmentedControl.Item value="dark">
                    {pickLocalizedText(locale, shellCopy.themeDark)}
                  </SegmentedControl.Item>
                </SegmentedControl.Root>
                </Flex>
                <Flex
                  className="topbar-nav"
                  gap="2"
                  wrap="wrap"
                  aria-label={pickLocalizedText(locale, shellCopy.navLabel)}
                  asChild
                >
                  <nav>
                    <Button
                      asChild
                      size="2"
                      radius="small"
                      variant={pageKind === "landing" ? "soft" : "ghost"}
                    >
                      <a
                        href={withBase()}
                        aria-current={pageKind === "landing" ? "page" : undefined}
                      >
                        {pickLocalizedText(locale, shellCopy.navGallery)}
                      </a>
                    </Button>
                    <Button asChild size="2" radius="small" variant="ghost">
                      <a href={docsUrl}>{pickLocalizedText(locale, shellCopy.navDocs)}</a>
                    </Button>
                    <Button asChild size="2" radius="small" variant="ghost">
                      <a href={repoUrl}>{pickLocalizedText(locale, shellCopy.navGitHub)}</a>
                    </Button>
                  </nav>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </header>
      <main className="page">
        <Container size={{ initial: "3", lg: "4" }}>
          <Section size={{ initial: "1", sm: "2" }} className="hero">
            <Card className="hero-panel" size={{ initial: "3", sm: "5" }}>
              <Grid className="hero-layout" columns={{ initial: "1", lg: "2" }} gap="6">
                <Flex className="hero-main" direction="column" gap="5">
                  <Text as="p" className="eyebrow">
                    {eyebrow}
                  </Text>
                  <Heading as="h1" className="hero-title">
                    {title}
                  </Heading>
                  <Text as="p" className="hero-summary">
                    {summary}
                  </Text>
                </Flex>
                {meta || actions ? (
                  <Flex className="hero-side" direction="column" gap="5">
                    {meta ? (
                      <Flex className="hero-meta" gap="2" wrap="wrap">
                        {meta}
                      </Flex>
                    ) : null}
                    {actions ? (
                      <Box className="hero-actions">
                        {actions}
                      </Box>
                    ) : null}
                  </Flex>
                ) : null}
              </Grid>
            </Card>
          </Section>
          {children}
        </Container>
      </main>
      <footer className="footer">
        <Container size={{ initial: "3", lg: "4" }}>
          <Separator size="4" className="footer-separator" />
          <Flex
            className="footer-frame"
            direction={{ initial: "column", sm: "row" }}
            align={{ initial: "start", sm: "end" }}
            justify="between"
            gap="6"
          >
            <div>
              <p className="footer-kicker">
                {pickLocalizedText(locale, shellCopy.footerKicker)}
              </p>
              <p className="footer-copy">
                {pickLocalizedText(locale, shellCopy.footerCopy)}
              </p>
            </div>
            <Flex className="footer-links" gap="4" wrap="wrap">
              <Link href={repoUrl} color="gray" underline="hover">
                {pickLocalizedText(locale, shellCopy.footerRepo)}
              </Link>
              <Link href={docsUrl} color="gray" underline="hover">
                {pickLocalizedText(locale, shellCopy.footerDocs)}
              </Link>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </div>
  );
};
