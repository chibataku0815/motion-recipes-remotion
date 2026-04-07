import {
  AspectRatio,
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Section,
  Text,
} from "@radix-ui/themes";
import { ThickChevronRightIcon } from "@radix-ui/themes";
import {
  getSiteTitle,
  getStatusLabel,
  landingContextPanels,
  landingCopy,
} from "../copy";
import { recipes } from "../data/recipes";
import { pickLocalizedText, useLocale } from "../i18n";
import { PageMetadata } from "../metadata";
import { SiteShell, docsUrl, repoUrl, withBase } from "./SiteShell";

export const LandingPage = () => {
  const { locale } = useLocale();
  const publishedCount = recipes.filter(
    (recipe) => recipe.status === "Published",
  ).length;

  return (
    <>
      <PageMetadata
        title={getSiteTitle(pickLocalizedText(locale, landingCopy.metadataTitle))}
        description={pickLocalizedText(locale, landingCopy.metadataDescription)}
      />
      <SiteShell
        eyebrow={pickLocalizedText(locale, landingCopy.eyebrow)}
        title={pickLocalizedText(locale, landingCopy.title)}
        summary={pickLocalizedText(locale, landingCopy.summary)}
        meta={
          <>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {publishedCount} {pickLocalizedText(locale, landingCopy.metaPublished)}
            </Badge>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {pickLocalizedText(locale, landingCopy.metaStillFirst)}
            </Badge>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {pickLocalizedText(locale, landingCopy.metaStaticPages)}
            </Badge>
          </>
        }
        actions={
          <>
            <Button asChild size="3" radius="small" variant="solid">
              <a href={repoUrl}>{pickLocalizedText(locale, landingCopy.actionRepo)}</a>
            </Button>
            <Button asChild size="3" radius="small" variant="soft" color="gray">
              <a href={docsUrl}>{pickLocalizedText(locale, landingCopy.actionDocs)}</a>
            </Button>
          </>
        }
      >
      <Section size={{ initial: "1", sm: "2" }} className="section section--recipes">
        <Flex
          className="section-header"
          direction={{ initial: "column", md: "row" }}
          align={{ initial: "start", md: "end" }}
          justify="between"
          gap="6"
        >
          <div>
            <Text as="p" className="section-label">
              {pickLocalizedText(locale, landingCopy.sectionGallery)}
            </Text>
            <Heading as="h2" className="section-title">
              {pickLocalizedText(locale, landingCopy.sectionBrowseTitle)}
            </Heading>
          </div>
          <Text as="p" className="section-lede">
            {pickLocalizedText(locale, landingCopy.sectionBrowseLede)}
          </Text>
        </Flex>
        <Grid className="recipe-grid" columns={{ initial: "1", sm: "2" }} gap={{ initial: "4", sm: "6" }}>
          {recipes.map((recipe) => (
            <Card
              key={recipe.slug}
              asChild
              className="recipe-card"
              size="3"
              variant="surface"
            >
              <a href={withBase(`recipes/${recipe.slug}/`)}>
                <Inset clip="padding-box" side="top" pb="current">
                  <AspectRatio ratio={16 / 10} className="recipe-card-media">
                    <img
                      alt={`${pickLocalizedText(locale, recipe.title)} still`}
                      loading="lazy"
                      src={withBase(recipe.stillPaths[1] ?? recipe.stillPaths[0])}
                    />
                  </AspectRatio>
                </Inset>
                <Flex className="recipe-card-body" direction="column" gap="4">
                  <Flex className="recipe-card-meta" align="center" gap="3" wrap="wrap">
                    <Badge radius="small" variant="soft">
                      {getStatusLabel(recipe.status, locale)}
                    </Badge>
                    <Text as="span" className="mono-label">
                      {recipe.slug}
                    </Text>
                  </Flex>
                  <Heading as="h3" className="recipe-card-title">
                    {pickLocalizedText(locale, recipe.title)}
                  </Heading>
                  <Text as="p" className="recipe-card-tagline">
                    {pickLocalizedText(locale, recipe.tagline)}
                  </Text>
                  <Text as="p" className="recipe-card-summary">
                    {pickLocalizedText(locale, recipe.summary)}
                  </Text>
                  <Flex
                    className="recipe-card-footer"
                    align="center"
                    justify="between"
                    mt="auto"
                  >
                    <Text as="span">{pickLocalizedText(locale, landingCopy.cardOpen)}</Text>
                    <ThickChevronRightIcon />
                  </Flex>
                </Flex>
              </a>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section size={{ initial: "1", sm: "2" }} className="section section--supporting">
        <Flex
          className="section-header"
          direction={{ initial: "column", md: "row" }}
          align={{ initial: "start", md: "end" }}
          justify="between"
          gap="6"
        >
          <div>
            <Text as="p" className="section-label">
              {pickLocalizedText(locale, landingCopy.sectionContext)}
            </Text>
            <Heading as="h2" className="section-title">
              {pickLocalizedText(locale, landingCopy.sectionContextTitle)}
            </Heading>
          </div>
          <Text as="p" className="section-lede">
            {pickLocalizedText(locale, landingCopy.sectionContextLede)}
          </Text>
        </Flex>
        <Grid
          className="support-grid"
          columns={{ initial: "1", sm: "2", lg: "3" }}
          gap={{ initial: "4", sm: "6" }}
        >
          {landingContextPanels.map((panel) => (
            <Card
              key={panel.label.en}
              className="support-panel"
              size="3"
              variant="surface"
            >
              <Flex direction="column" gap="4">
                <Text as="p" className="panel-label">
                  {pickLocalizedText(locale, panel.label)}
                </Text>
                <Heading as="h3" className="panel-title">
                  {pickLocalizedText(locale, panel.title)}
                </Heading>
                <Text as="p" className="panel-copy">
                  {pickLocalizedText(locale, panel.copy)}
                </Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Section>
      </SiteShell>
    </>
  );
};
