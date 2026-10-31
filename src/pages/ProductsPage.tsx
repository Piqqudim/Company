import React, { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import {
  PRODUCT_ECOSYSTEM_FLOW,
  PRODUCT_CATEGORIES,
  PRODUCTS_COLLECTION,
  FEATURED_PRODUCT_CONFIG,
  PRODUCT_PHILOSOPHY_PRINCIPLES,
  ProductCategoryId,
} from '../data/productsContent';
import { SEO } from '../components/seo/SEO';
import {
  Section,
  Grid,
  Heading,
  Text,
  Button,
  Link,
  Badge,
  Card,
  Divider,
  ProductCard,
  PageHeader,
  CTASection,
} from '../components/ui';

type CategoryFilter = 'all' | ProductCategoryId;

/**
 * Dedicated Product Route Placeholder (/products/:slug)
 * Supports the routing architecture required in Section 7 so each product in the
 * Piqqudim ecosystem has a clean, future-ready destination route without fake external URLs.
 */
export const ProductDetailPlaceholderPage: React.FC<{ slug: string }> = ({ slug }) => {
  const product = PRODUCTS_COLLECTION.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <SEO
          title="Product Not Found | Piqqudim"
          description="The requested product route is not registered in the Piqqudim ecosystem."
          canonicalPath={`/products/${slug}`}
        />
        <PageHeader
          kicker="Products Ecosystem"
          title="Product route not found."
          description={`No product entry matches "${slug}". Return to the Piqqudim Products overview.`}
          actions={
            <Button variant="primary" size="md" href="/products">
              ← Return to Products
            </Button>
          }
        />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${product.name} | Products | Piqqudim`}
        description={product.shortDescription}
        canonicalPath={product.href}
      />

      <PageHeader
        kicker={product.categoryLabel}
        metadata={`Built by Piqqudim · ${product.division}`}
        title={product.name}
        description={product.shortDescription}
        actions={
          <>
            <Button variant="outline" size="sm" href="/products">
              ← All Piqqudim Products
            </Button>
            <Button variant="primary" size="sm" href="/contact">
              Inquire About {product.name}
            </Button>
          </>
        }
      />

      <Section surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <Badge tone="accent" prefix="Ecosystem Context">
              {product.status ? `Status: ${product.status}` : 'Piqqudim Ecosystem Initiative'}
            </Badge>
            <Heading as="h2" variant="h2">
              Part of the Piqqudim ecosystem.
            </Heading>
            <Text variant="body-lg" tone="primary" measure>
              {product.extendedContext}
            </Text>
            <Text variant="body" tone="secondary" measure>
              This route (<code className="font-mono text-xs">{product.href}</code>) is established
              as the dedicated product destination within the corporate architecture. Detailed
              documentation, visual media, and release specifications will be added here as they
              are published.
            </Text>
          </div>

          <div className="lg:col-span-5">
            <Card surface="secondary" padding="md" className="space-y-4">
              <div
                aria-hidden="true"
                className="h-36 px-6 py-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-primary)] flex items-end justify-between"
              >
                <span className="font-mono text-3xl font-semibold text-[var(--color-text-primary)]">
                  {product.visualAsset.monogram}
                </span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  {product.visualAsset.domainCode}
                </span>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Parent Company</span>
                  <span className="font-semibold text-[var(--color-text-primary)]">Piqqudim</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Division</span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    {product.division}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[var(--color-text-muted)]">Category</span>
                  <span className="font-medium text-[var(--color-accent)]">
                    {product.categoryLabel}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <CTASection
        kicker="Piqqudim Ecosystem"
        title="Explore how our technology and products connect."
        description="Return to the full product ecosystem overview or explore the underlying engineering disciplines."
        primaryActionLabel="Back to All Products"
        primaryActionHref="/products"
        secondaryActionLabel="Explore Technology"
        secondaryActionHref="/technology"
      />
    </>
  );
};

/**
 * Official Piqqudim Products Page (Phase 5 — /products)
 * Answers: What does Piqqudim build?
 * Communicates that Piqqudim is the company and products are what Piqqudim builds.
 */
export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS_COLLECTION
      : PRODUCTS_COLLECTION.filter((product) => product.categoryId === activeCategory);

  return (
    <>
      <SEO
        title="Products | Piqqudim"
        description="Discover the software, platforms, developer technology, graphics engines, 3D tools, games, and digital products built by Piqqudim."
        canonicalPath="/products"
      />

      {/* =====================================================================
          1. PRODUCTS HERO
          Eyebrow: PRODUCTS
          Main heading: Technology becomes something people can use.
          ===================================================================== */}
      <Section id="products-hero" surface="grid" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <Badge tone="accent" prefix="Piqqudim Ecosystem">
              Products
            </Badge>

            <Heading as="h1" variant="display">
              Technology becomes something people can use.
            </Heading>

            <Text variant="body-lg" tone="secondary" measure>
              Piqqudim turns its engineering and research into software products, platforms,
              developer tools, engines, games, and digital experiences.
            </Text>
          </div>

          {/* Company-to-Products Hierarchy Tree (Section 20) */}
          <div className="lg:col-span-5">
            <Card surface="secondary" padding="md" className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                <Text as="span" variant="code" tone="accent" className="font-medium">
                  CORPORATE HIERARCHY
                </Text>
                <Text as="span" variant="code" tone="muted">
                  COMPANY → ECOSYSTEM
                </Text>
              </div>

              <div className="font-mono text-xs space-y-2 text-[var(--color-text-secondary)]">
                <div className="font-semibold text-[var(--color-text-primary)]">PIQQUDIM</div>
                <div className="pl-4 border-l border-[var(--color-border-strong)] space-y-2">
                  <div>
                    <span className="text-[var(--color-accent)]">├──</span> Technology
                  </div>
                  <div>
                    <span className="text-[var(--color-accent)]">├──</span>{' '}
                    <span className="font-semibold text-[var(--color-text-primary)]">Products</span>
                    <div className="pl-5 pt-1.5 space-y-1 text-[var(--color-text-muted)]">
                      <div>├── Pi Launcher</div>
                      <div>├── Umbra Engine</div>
                      <div>├── P Language</div>
                      <div>├── NodeCAD</div>
                      <div>├── Remarket</div>
                      <div>└── Games</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[var(--color-accent)]">└──</span> Future Products
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          2. PRODUCT ECOSYSTEM
          PIQQUDIM → TECHNOLOGY → PRODUCTS → TOOLS / PLATFORMS / EXPERIENCES
          ===================================================================== */}
      <Section id="product-ecosystem" surface="primary" spacing="lg" borderBottom>
        <div className="max-w-[48rem] space-y-3 mb-12">
          <Badge tone="accent" prefix="01">
            Ecosystem Structure
          </Badge>
          <Heading as="h2" variant="h2">
            Part of a connected technology ecosystem.
          </Heading>
          <Text variant="body" tone="secondary" measure>
            Piqqudim is the company. Every product we build grows out of our core engineering work
            and contributes back to the broader ecosystem.
          </Text>
        </div>

        <ol
          aria-label="Relationship from Piqqudim the company to technology, products, and user experiences"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PRODUCT_ECOSYSTEM_FLOW.map((stage, idx) => {
            const isLast = idx === PRODUCT_ECOSYSTEM_FLOW.length - 1;
            return (
              <li
                key={stage.step}
                className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-semibold text-[var(--color-accent)]">
                      {stage.step} · {stage.subtitle}
                    </span>
                    {!isLast ? (
                      <ArrowRight
                        className="hidden lg:block w-3.5 h-3.5 text-[var(--color-text-muted)]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                  <Heading as="h3" variant="h4">
                    {stage.title}
                  </Heading>
                  <Text variant="small" tone="secondary">
                    {stage.description}
                  </Text>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* =====================================================================
          3. PRODUCT CATEGORIES & PIQQUDIM ENTERPRISE
          Meaningful categories including non-3D / business digital software
          ===================================================================== */}
      <Section id="product-categories" surface="secondary" spacing="lg" borderBottom>
        <div className="space-y-12">
          <div className="max-w-[48rem] space-y-3">
            <Badge tone="accent" prefix="02">
              Product Categories
            </Badge>
            <Heading as="h2" variant="h2">
              Areas where we build products.
            </Heading>
            <Text variant="body" tone="secondary" measure>
              Our product initiatives span developer systems, 3D and graphics technology,
              interactive experiences, and broader digital platforms.
            </Text>
          </div>

          <Grid cols={3} gap="md">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Card key={cat.id} surface="primary" padding="md" className="space-y-2.5">
                <div className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                  {cat.index}.
                </div>
                <Heading as="h3" variant="h4">
                  {cat.name}
                </Heading>
                <Text variant="small" tone="secondary">
                  {cat.description}
                </Text>
              </Card>
            ))}

            {/* Piqqudim Enterprise Callout Card (Sections 4 & 12) */}
            <Card surface="elevated" padding="md" className="space-y-2.5">
              <div className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                Piqqudim Enterprise
              </div>
              <Heading as="h3" variant="h4">
                Beyond 3D & Graphics
              </Heading>
              <Text variant="small" tone="secondary">
                Piqqudim is not limited to engines or 3D tools. Through Piqqudim Enterprise, we
                also build and deliver business software, digital platforms, and products across
                broader technology sectors.
              </Text>
            </Card>
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          4. PRODUCT COLLECTION (Current Products)
          Data-driven product cards with category filter tabs
          ===================================================================== */}
      <Section id="product-collection" surface="primary" spacing="lg" borderBottom>
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-[46rem] space-y-3">
              <Badge tone="accent" prefix="03">
                Current Ecosystem
              </Badge>
              <Heading as="h2" variant="h1">
                Products and projects in the Piqqudim ecosystem.
              </Heading>
              <Text variant="body" tone="secondary" measure>
                Explore the platforms, engines, languages, tools, and experiences currently being
                developed under Piqqudim.
              </Text>
            </div>

            {/* Interactive Category Filter Controls (Functional Buttons) */}
            <div
              role="tablist"
              aria-label="Filter Piqqudim products by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-[var(--radius-md)] shrink-0"
            >
              {(
                [
                  { id: 'all', label: 'All Products' },
                  { id: 'platforms', label: 'Platforms' },
                  { id: 'developer-technology', label: 'Developer Tech' },
                  { id: '3d-graphics', label: '3D & Graphics' },
                  { id: 'games-interactive', label: 'Games' },
                  { id: 'business-digital', label: 'Enterprise / Digital' },
                ] as const
              ).map((tab) => {
                const active = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[var(--color-accent)] text-[var(--color-button-text)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <Grid cols={3} gap="md">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.categoryLabel}
                relationship={product.division}
                statusNote={product.status}
                summary={product.shortDescription}
                actionLabel="Learn More"
                href={product.href}
                visualAsset={product.visualAsset}
              />
            ))}
          </Grid>
        </div>
      </Section>

      {/* =====================================================================
          5. FEATURED PRODUCT
          Data-driven spotlight section (currently featuring Umbra Engine)
          ===================================================================== */}
      <Section id="featured-product" surface="elevated" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-mono font-semibold text-[var(--color-accent)]">
                04 · {FEATURED_PRODUCT_CONFIG.eyebrow}
              </span>
              <span aria-hidden="true" className="text-[var(--color-text-muted)]">
                ·
              </span>
              <span className="text-[var(--color-text-secondary)]">
                {FEATURED_PRODUCT_CONFIG.category}
              </span>
            </div>

            <Heading as="h2" variant="h1" tone="primary">
              {FEATURED_PRODUCT_CONFIG.name}: {FEATURED_PRODUCT_CONFIG.headline}
            </Heading>

            <Text variant="body" tone="primary" measure>
              {FEATURED_PRODUCT_CONFIG.description}
            </Text>

            <Text variant="small" tone="secondary" measure>
              {FEATURED_PRODUCT_CONFIG.supportingNote}
            </Text>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href={FEATURED_PRODUCT_CONFIG.primaryActionHref}
              >
                {FEATURED_PRODUCT_CONFIG.primaryActionLabel}
              </Button>
              <Link
                href={FEATURED_PRODUCT_CONFIG.secondaryActionHref}
                variant="accent"
                className="text-sm font-semibold px-3 py-2"
              >
                <span>{FEATURED_PRODUCT_CONFIG.secondaryActionLabel} →</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card surface="primary" padding="md" className="space-y-5">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
                  FEATURED ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  IN DEVELOPMENT
                </span>
              </div>

              <ul className="space-y-3">
                {FEATURED_PRODUCT_CONFIG.focusPoints.map((point, idx) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]"
                  >
                    <span className="font-mono text-xs text-[var(--color-accent)] font-semibold mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* =====================================================================
          6. PRODUCT DEVELOPMENT PHILOSOPHY
          Products begin with problems, ideas, and technology — then become things people can use.
          ===================================================================== */}
      <Section id="product-philosophy" surface="primary" spacing="lg" borderBottom>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Badge tone="accent" prefix="05">
              Product Philosophy
            </Badge>
            <Heading as="h2" variant="h2">
              Products begin with problems, ideas, and technology — then become things people can
              use.
            </Heading>
            <Text variant="body" tone="secondary">
              How we translate foundational engineering into practical tools, platforms, and
              experiences.
            </Text>
          </div>

          <div className="lg:col-span-7 divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
            {PRODUCT_PHILOSOPHY_PRINCIPLES.map((item) => (
              <div
                key={item.index}
                className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="flex items-baseline gap-3 min-w-[15rem]">
                  <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                    {item.index}.
                  </span>
                  <Heading as="h3" variant="h4">
                    {item.title}
                  </Heading>
                </div>
                <Text variant="small" tone="secondary" className="sm:max-w-[26rem]">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* =====================================================================
          7. FUTURE PRODUCTS
          Subtle acknowledgment that the ecosystem will continue to grow
          ===================================================================== */}
      <Section id="future-products" surface="secondary" spacing="md" borderBottom>
        <div className="max-w-[48rem] space-y-4">
          <Badge tone="accent" prefix="06">
            Ecosystem Evolution
          </Badge>
          <Heading as="h2" variant="h2">
            More to come.
          </Heading>
          <Text variant="body" tone="secondary" measure>
            Piqqudim’s product ecosystem is designed to grow over time. As our core technology and
            engineering capabilities mature, we continue exploring new tools, platforms, business
            software under Piqqudim Enterprise, and interactive experiences.
          </Text>
        </div>
      </Section>

      {/* =====================================================================
          8. CLOSING CTA
          ===================================================================== */}
      <CTASection
        kicker="07 · Inquiries & Partnerships"
        title="Interested in Piqqudim’s products or technology?"
        description="Connect with us for product inquiries, enterprise discussions, or technology partnerships."
        primaryActionLabel="Contact Piqqudim →"
        primaryActionHref="/contact"
        secondaryActionLabel="Explore Our Technology"
        secondaryActionHref="/technology"
      />
    </>
  );
};
