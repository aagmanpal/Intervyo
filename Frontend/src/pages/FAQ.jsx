export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#13132a] to-[#0f0f1a] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              What is Intervyo?
            </h3>
            <p className="text-gray-300">
              Intervyo is an AI-powered platform that helps users prepare for technical interviews through realistic interview simulations.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Who can use Intervyo?
            </h3>
            <p className="text-gray-300">
              Intervyo is suitable for students, freshers, and professionals preparing for technical interviews across different domains.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Is Intervyo free to use?
            </h3>
            <p className="text-gray-300">
              Yes, Intervyo offers free access to core interview preparation features.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">
              Do I need to sign up?
            </h3>
            <p className="text-gray-300">
              Yes, creating an account is required to use Intervyo. This allows users to access interview features and track their progress securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
