import { Layout } from "@/components/Layout";
import { MasonryGallery } from "@/components/MasonryGallery";

const Work = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12 animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              My <span className="text-gradient-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of digital illustrations, character designs, and creative explorations. Click on any piece to view it in full.
            </p>
          </div>

          {/* Gallery */}
          <MasonryGallery />
        </div>
      </section>
    </Layout>
  );
};

export default Work;
