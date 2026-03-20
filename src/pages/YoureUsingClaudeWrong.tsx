import EmailGate from "@/components/EmailGate";

const YoureUsingClaudeWrong = () => (
  <EmailGate storageKey="yucw_unlocked">
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">You're Using Claude Wrong</h1>
      <p className="text-muted-foreground text-lg">More coming soon.</p>
      <a href="/" className="mt-8 inline-block text-primary underline hover:text-primary/90">
        Back to Home
      </a>
    </div>
  </EmailGate>
);

export default YoureUsingClaudeWrong;
