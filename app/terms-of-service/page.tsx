import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - SoFlo Wheelie Life',
  description: 'Terms of Service for SoFlo Wheelie Life. Read our terms and conditions for using our motorcycle wheelie game website.',
  alternates: {
    canonical: 'https://www.soflowheelie.com/terms-of-service',
  },
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-slate-400">
            Last Updated: November 2024
          </p>
        </header>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Welcome to SoFlo Wheelie (<strong>soflowheelie.com</strong>). This is a fan-made website that provides access to the SoFlo Wheelie motorcycle game, originally created by LucasTheSigmaMogger on the Scratch platform.
            </p>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using our website and game service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              SoFlo Wheelie provides free access to a browser-based motorcycle wheelie game. Our service includes:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
              <li>Embedded gameplay from the Scratch platform</li>
              <li>Game instructions and tips</li>
              <li>Information about game features and controls</li>
              <li>A platform for enjoying motorcycle stunt gameplay</li>
            </ul>
            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-amber-400">Important:</strong> We are NOT affiliated with, endorsed by, or officially connected to Scratch, MIT, or the original game developer. This is an independent fan site created to showcase and provide easy access to the game.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              When using our service, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-3 ml-4">
              <li><strong className="text-white">Comply with Laws:</strong> Use the service in compliance with all applicable local, state, national, and international laws and regulations.</li>
              <li><strong className="text-white">Respectful Use:</strong> Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the service.</li>
              <li><strong className="text-white">No Unauthorized Access:</strong> Not attempt to gain unauthorized access to any portion of the service, other accounts, or any systems or networks.</li>
              <li><strong className="text-white">No Harmful Activities:</strong> Not use the service to transmit any viruses, malware, or other malicious code.</li>
              <li><strong className="text-white">Respect Intellectual Property:</strong> Not infringe upon or violate any intellectual property rights or other proprietary rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Original Game Content</h3>
                <p className="text-slate-300 leading-relaxed">
                  The SoFlo Wheelie game is the intellectual property of its creator, LucasTheSigmaMogger, and is hosted on the Scratch platform (scratch.mit.edu). All game assets, code, graphics, and gameplay mechanics belong to the original creator and Scratch.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Website Content</h3>
                <p className="text-slate-300 leading-relaxed">
                  The design, text, graphics, and other content on soflowheelie.com (excluding the embedded game) are owned by or licensed to us and are protected by copyright and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Limited License</h3>
                <p className="text-slate-300 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mt-2">
                  <li>Reproduce, distribute, or create derivative works from our content</li>
                  <li>Use our content for commercial purposes without permission</li>
                  <li>Remove any copyright or proprietary notices</li>
                  <li>Claim ownership of the game or website content</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Activities</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              You expressly agree NOT to:
            </p>
            <div className="space-y-3">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Use the service for any illegal or unauthorized purpose
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Attempt to reverse engineer, decompile, or disassemble any part of the service
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Use automated systems or software to extract data from the website
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Interfere with or disrupt the service or servers
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Misrepresent your relationship with us or the original game creator
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                <p className="text-slate-300">
                  <strong className="text-red-400">✗</strong> Collect or store personal data about other users
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy and Data Collection</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We collect and process certain information when you use our service, including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
              <li>Usage details and gameplay interactions</li>
              <li>Device information and browser data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              For detailed information about how we collect, use, and protect your data, please review our <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link>.
            </p>
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-4">
              <p className="text-slate-300">
                <strong className="text-white">Note:</strong> All game interactions are processed locally in your browser and are not stored on our servers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>The service will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the service will be accurate or reliable</li>
              <li>The quality of the game or service will meet your expectations</li>
              <li>Any errors in the service will be corrected</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              You use the service at your own risk. We do not guarantee the availability of the game, as it depends on the Scratch platform's availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
              <li>Loss of profits, data, or use</li>
              <li>Loss of goodwill or reputation</li>
              <li>Service interruptions or delays</li>
              <li>Damages resulting from your use or inability to use the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links and Services</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Our website contains embedded content from Scratch (scratch.mit.edu). When you interact with the game, you may also be subject to:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
              <li><a href="https://scratch.mit.edu/terms_of_use" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Scratch Terms of Use</a></li>
              <li><a href="https://scratch.mit.edu/privacy_policy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Scratch Privacy Policy</a></li>
            </ul>
            <p className="text-slate-300 leading-relaxed">
              We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms of Service. Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. We will provide notice of any material changes by posting the new terms on this page and updating the "Last Updated" date. Your continued use of the service after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any legal action or proceeding arising under these terms will be brought exclusively in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p className="text-slate-300 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
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
                <strong className="text-amber-400">Disclaimer:</strong> This is a fan-made website featuring the SoFlo Wheelie game created by LucasTheSigmaMogger on Scratch. We are not affiliated with, endorsed by, or officially connected to Scratch, MIT, or the original game developer. All game content belongs to its respective owners.
              </p>
            </div>
          </section>

          <section className="border-t border-slate-700 pt-6">
            <p className="text-slate-300 leading-relaxed text-sm italic">
              By using SoFlo Wheelie, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
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
