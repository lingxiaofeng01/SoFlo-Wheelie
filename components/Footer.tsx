import Link from 'next/link';
import content from '@/content/en.json';

export function Footer() {
  return (
    <footer className="mt-16 pt-12 pb-8 border-t border-slate-700/50 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              SoFlo Wheelie Life
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Master epic motorcycle wheelies through South Florida streets. Play instantly in your browser with no downloads required.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Online & Ready to Play</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center justify-center gap-2 group"
              >
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                Play Now
              </Link>
              <Link 
                href="/wheelie-games" 
                className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center justify-center gap-2 group"
              >
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                All Wheelie Games
              </Link>
              <Link 
                href="/#usage" 
                className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center justify-center gap-2 group"
              >
                <span className="text-pink-400 group-hover:translate-x-1 transition-transform">→</span>
                How to Play
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                href="/privacy-policy" 
                className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center justify-center md:justify-end gap-2 group"
              >
                <span className="text-slate-500 group-hover:text-blue-400 transition-colors">🔒</span>
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-slate-400 hover:text-white transition-colors text-sm inline-flex items-center justify-center md:justify-end gap-2 group"
              >
                <span className="text-slate-500 group-hover:text-purple-400 transition-colors">📄</span>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          {/* Game Credit */}
          <div className="text-center mb-4">
            <p className="text-slate-500 text-xs mb-2">
              {/* @ts-ignore */}
              {content.footer.gameCredit}
            </p>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left">
              {content.footer.copyright}
            </p>
            <p className="text-center sm:text-right flex items-center gap-2">
              <span className="text-orange-400">⚠️</span>
              {content.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

