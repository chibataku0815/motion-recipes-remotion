import {
  AspectRatio,
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";
import { ThickChevronRightIcon } from "@radix-ui/themes";
import { detailCopy, getSiteTitle, getStatusLabel } from "../copy";
import type { RecipePageData } from "../data/recipes";
import { pickLocalizedText, useLocale } from "../i18n";
import { PageMetadata } from "../metadata";
import { SiteShell, repoUrl, withBase } from "./SiteShell";

type RecipeDetailPageProps = {
  recipe: RecipePageData;
};

export const RecipeDetailPage = ({ recipe }: RecipeDetailPageProps) => {
  const { locale } = useLocale();

  return (
    <>
      <PageMetadata
        title={getSiteTitle(pickLocalizedText(locale, recipe.title))}
        description={pickLocalizedText(locale, recipe.summary)}
      />
      <SiteShell
        eyebrow={pickLocalizedText(locale, detailCopy.eyebrow)}
        title={pickLocalizedText(locale, recipe.title)}
        summary={pickLocalizedText(locale, recipe.summary)}
        pageKind="detail"
        meta={
          <>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {getStatusLabel(recipe.status, locale)}
            </Badge>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {recipe.slug}
            </Badge>
            <Badge radius="small" variant="soft" color="gray" highContrast>
              {pickLocalizedText(locale, detailCopy.metaVideoFirst)}
            </Badge>
          </>
        }
        actions={
          <>
            <Button asChild size="3" radius="small" variant="solid">
              <a href={recipe.githubCodeUrl}>
                {pickLocalizedText(locale, detailCopy.actionCode)}
              </a>
            </Button>
            <Button asChild size="3" radius="small" variant="soft" color="gray">
              <a href={recipe.githubDocUrl}>
                {pickLocalizedText(locale, detailCopy.actionDoc)}
              </a>
            </Button>
            <Button asChild size="3" radius="small" variant="ghost" color="gray">
              <a href={withBase()}>{pickLocalizedText(locale, detailCopy.actionBack)}</a>
            </Button>
          </>
        }
      >
      <Section size={{ initial: "1", sm: "2" }} className="section detail-stage-wrap">
        <Grid
          className="detail-stage"
          columns={{ initial: "1", lg: "2" }}
          gap={{ initial: "4", sm: "6" }}
        >
          <Card className="video-panel" size="4" variant="surface">
            <Flex direction="column" gap="5">
              <Flex
                className="video-panel-header"
                direction={{ initial: "column", sm: "row" }}
                align={{ initial: "start", sm: "end" }}
                justify="between"
                gap="4"
              >
                <div>
                  <Text as="p" className="panel-label">
                    {pickLocalizedText(locale, detailCopy.primaryPreview)}
                  </Text>
                  <Heading as="h2" className="section-title">
                    {pickLocalizedText(locale, detailCopy.renderedStudy)}
                  </Heading>
                </div>
                <Text as="span" className="mono-label">
                  {pickLocalizedText(locale, detailCopy.mp4FromMedia)}
                </Text>
              </Flex>
              <Inset clip="padding-box" side="x">
                <AspectRatio ratio={16 / 10} className="video-shell">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={withBase(recipe.stillPaths[0])}
                  >
                    <source src={withBase(recipe.previewVideoPath)} type="video/mp4" />
                  </video>
                </AspectRatio>
              </Inset>
            </Flex>
          </Card>
          <Card className="detail-summary-panel" size="4" variant="surface">
            <Flex direction="column" gap="6">
              <Flex className="detail-summary-header" align="center" gap="3" wrap="wrap">
                <Badge radius="small" variant="soft" highContrast>
                  {getStatusLabel(recipe.status, locale)}
                </Badge>
                <Text as="span" className="mono-label">
                  {pickLocalizedText(locale, recipe.tagline)}
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Text as="p" className="panel-label">
                  {pickLocalizedText(locale, detailCopy.techniqueSummary)}
                </Text>
                <Text as="p" className="detail-copy">
                  {pickLocalizedText(locale, recipe.technique)}
                </Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Text as="p" className="panel-label">
                  {pickLocalizedText(locale, detailCopy.parametersToTweak)}
                </Text>
                <Flex
                  className="token-list"
                  gap="2"
                  wrap="wrap"
                  aria-label={pickLocalizedText(locale, detailCopy.parametersToTweak)}
                  asChild
                >
                  <ul>
                    {recipe.parameters.map((parameter) => (
                      <li key={parameter}>
                        <Badge radius="small" variant="surface" color="gray">
                          {parameter}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </Grid>
      </Section>

      <Section size={{ initial: "1", sm: "2" }} className="section">
        <Grid
          className="support-grid support-grid--detail"
          columns={{ initial: "1", sm: "2", lg: "3" }}
          gap={{ initial: "4", sm: "6" }}
        >
          <Card className="support-panel" size="3" variant="surface">
            <Text as="p" className="panel-label">
              {pickLocalizedText(locale, detailCopy.corePrimitives)}
            </Text>
            <Heading as="h3" className="panel-title">
              {pickLocalizedText(locale, detailCopy.reusablePieces)}
            </Heading>
            <ul className="detail-list">
              {recipe.corePrimitives.map((primitive) => (
                <li key={primitive}>{primitive}</li>
              ))}
            </ul>
          </Card>
          <Card className="support-panel" size="3" variant="surface">
            <Text as="p" className="panel-label">
              {pickLocalizedText(locale, detailCopy.differenceFromInspiration)}
            </Text>
            <Heading as="h3" className="panel-title">
              {pickLocalizedText(locale, detailCopy.publicRecipeChanges)}
            </Heading>
            <Text as="p" className="panel-copy">
              {pickLocalizedText(locale, recipe.inspiration.note)}
            </Text>
          </Card>
          <Card className="support-panel" size="3" variant="surface">
            <Text as="p" className="panel-label">
              {pickLocalizedText(locale, detailCopy.directLinks)}
            </Text>
            <Heading as="h3" className="panel-title">
              {pickLocalizedText(locale, detailCopy.jumpIntoRepo)}
            </Heading>
            <Flex className="link-stack" direction="column" gap="3">
              <Link className="inline-link" href={recipe.githubCodeUrl} underline="none">
                {pickLocalizedText(locale, detailCopy.actionCode)}
                <ThickChevronRightIcon />
              </Link>
              <Link className="inline-link" href={recipe.githubDocUrl} underline="none">
                {pickLocalizedText(locale, detailCopy.actionDoc)}
                <ThickChevronRightIcon />
              </Link>
              <Link className="inline-link" href={repoUrl} underline="none">
                {pickLocalizedText(locale, detailCopy.openRepo)}
                <ThickChevronRightIcon />
              </Link>
            </Flex>
          </Card>
        </Grid>
      </Section>

      <Section size={{ initial: "1", sm: "2" }} className="section">
        <Flex
          className="section-header"
          direction={{ initial: "column", md: "row" }}
          align={{ initial: "start", md: "end" }}
          justify="between"
          gap="6"
        >
          <div>
            <Text as="p" className="section-label">
              {pickLocalizedText(locale, detailCopy.frames)}
            </Text>
            <Heading as="h2" className="section-title">
              {pickLocalizedText(locale, detailCopy.stillGallery)}
            </Heading>
          </div>
          <Text as="p" className="section-lede">
            {pickLocalizedText(locale, detailCopy.stillGalleryLede)}
          </Text>
        </Flex>
        <Grid
          className="still-grid"
          columns={{ initial: "1", xs: "2", lg: "4" }}
          gap={{ initial: "3", sm: "4" }}
        >
          {recipe.stillPaths.map((stillPath) => (
            <Card key={stillPath} className="still-tile" size="1" variant="surface">
              <Inset clip="padding-box" side="all">
                <AspectRatio ratio={16 / 10}>
                  <img
                    alt={`${pickLocalizedText(locale, recipe.title)} still`}
                    loading="lazy"
                    src={withBase(stillPath)}
                  />
                </AspectRatio>
              </Inset>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section size={{ initial: "1", sm: "2" }} className="section">
        <Card className="support-panel support-panel--wide" size="3" variant="surface">
          <Text as="p" className="panel-label">
            {pickLocalizedText(locale, detailCopy.inspiration)}
          </Text>
          <Heading as="h3" className="panel-title">
            {pickLocalizedText(locale, detailCopy.referenceContext)}
          </Heading>
          <Text as="p" className="panel-copy">
            {pickLocalizedText(locale, recipe.inspiration.label)}
          </Text>
          {recipe.inspiration.url ? (
            <Link className="inline-link inline-link--compact" href={recipe.inspiration.url} underline="none">
                {pickLocalizedText(locale, detailCopy.openReferencedSource)}
                <ThickChevronRightIcon />
            </Link>
          ) : null}
        </Card>
      </Section>
      </SiteShell>
    </>
  );
};
