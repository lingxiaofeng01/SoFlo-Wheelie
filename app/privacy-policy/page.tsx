import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - SoFlo Wheelie Life',
  description: 'Privacy Policy for SoFlo Wheelie Life. Learn how we collect, use, and protect your data when you play our motorcycle wheelie game.',
  alternates: {
    canonical: 'https://www.soflowheelie.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center text-slate-300 hover:text-white transition-colors mb-8"
        >
          <span className="mr-2">←</span> Back to Game
        </Link>

        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Last Updated: November 2024
          </p>
        </header>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              Welcome to SoFlo Wheelie (<strong>soflowheelie.com</strong>). This is a fan-made website featuring the SoFlo Wheelie game created by LucasTheSigmaMogger on the Scratch platform. We are committed to protecting your privacy and ensuring a safe gaming experience. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and play our game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Usage Details</h3>
                <p className="text-slate-300 leading-relaxed mb-2">
                  We may collect information about your interactions with our game, including:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Game features accessed</li>
                  <li>Time spent playing</li>
                  <li>Gameplay patterns and preferences</li>
                  <li>Pages visited on our website</li>
                </ul>
                <p className="text-slate-400 text-sm mt-2 italic">
                  Purpose: To analyze user engagement and improve the gaming experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Device Information</h3>
                <p className="text-slate-300 leading-relaxed mb-2">
                  We automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Device type and model</li>
                  <li>Operating system and version</li>
                  <li>Browser type and version</li>
                  <li>Screen resolution</li>
                  <li>IP address (anonymized)</li>
                </ul>
                <p className="text-slate-400 text-sm mt-2 italic">
                  Purpose: To optimize game performance across different devices and platforms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Cookies and Similar Technologies</h3>
                <p className="text-slate-300 leading-relaxed mb-2">
                  We use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website functionality</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-3">
                  You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Game Interaction Data</h3>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                  <p className="text-slate-300 leading-relaxed">
                    <strong className="text-white">Important:</strong> All game data is processed locally in your browser and is not stored on our servers. Your gameplay, scores, and progress remain on your device unless you choose to share them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>To provide and maintain our game service</li>
              <li>To improve and optimize game performance</li>
              <li>To analyze user engagement and gameplay patterns</li>
              <li>To detect and prevent technical issues</li>
              <li>To ensure website security and prevent abuse</li>
              <li>To communicate important updates or changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We take data security seriously and implement appropriate technical and organizational measures to protect your information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><strong className="text-white">Legal Requirements:</strong> When required by law or to respond to legal processes</li>
              <li><strong className="text-white">Protection:</strong> To protect our rights, property, or safety, and that of our users</li>
              <li><strong className="text-white">Service Providers:</strong> With trusted third-party service providers who assist in operating our website (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Our website embeds the SoFlo Wheelie game from Scratch (scratch.mit.edu). When you play the game, you may also be subject to Scratch's privacy policy and terms of service. We recommend reviewing:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li><a href="https://scratch.mit.edu/privacy_policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Scratch Privacy Policy</a></li>
              <li><a href="https://scratch.mit.edu/terms_of_use" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Scratch Terms of Use</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              Our game is intended for general audiences. We do not knowingly collect personal information from children under 13 without parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>The right to access the information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to or restrict processing of your information</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <p className="text-slate-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
              <p className="text-slate-300">
                <strong className="text-white">Website:</strong> <a href="https://soflowheelie.com" className="text-blue-400 hover:text-blue-300">soflowheelie.com</a>
              </p>
            </div>
          </section>

          <section className="border-t border-slate-700 pt-6">
            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-amber-400">Disclaimer:</strong> This is a fan-made website featuring the SoFlo Wheelie game created by LucasTheSigmaMogger on Scratch. We are not affiliated with, endorsed by, or officially connected to Scratch, MIT, or the original game developer.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Game
          </Link>
        </div>
      </div>
    </main>
  );
}
