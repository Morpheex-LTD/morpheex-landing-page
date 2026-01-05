import CloudAuditModal from "./modal/cloud-audit-modal";

const ReadyToMorph = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand-accent to-brand-accent bg-clip-text text-transparent">
          Are you ready to morph?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          {`Stop letting your infrastructure hold you back. Let's build the
          version of your business that scales effortlessly.`}
        </p>
        <CloudAuditModal />
      </div>
    </section>
  );
};

export default ReadyToMorph;
