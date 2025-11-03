'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { Copy, Check, Smartphone } from 'lucide-react';

interface KeysHelpProps {
  basic: { title: string; keys: Array<{ key: string; action: string }> };
  tricks: { title: string; keys: Array<{ key: string; action: string }> };
  mobileWarning: string;
}

export function KeysHelp({ basic, tricks, mobileWarning }: KeysHelpProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(text);
      trackEvent('copy_keys', { key: text });
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const copyAllKeys = () => {
    const allKeys = [
      ...basic.keys.map(k => `${k.key}: ${k.action}`),
      ...tricks.keys.map(k => `${k.key}: ${k.action}`)
    ].join('\n');

    navigator.clipboard.writeText(allKeys).then(() => {
      setCopiedKey('all');
      trackEvent('copy_keys', { key: 'all_keys' });
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  return (
    <section id="controls" className="scroll-mt-20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Game Controls</h2>
          <p className="text-slate-400">Master these keys to dominate the streets</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={copyAllKeys}
          className="hidden sm:flex"
          aria-label="Copy all keyboard controls"
        >
          {copiedKey === 'all' ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy All
            </>
          )}
        </Button>
      </div>

      <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 mb-6 flex items-start gap-3">
        <Smartphone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-slate-300 text-sm leading-relaxed">{mobileWarning}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-semibold text-white mb-4">{basic.title}</h3>
          <ul className="space-y-3">
            {basic.keys.map(({ key, action }) => (
              <li key={key} className="flex items-center group">
                <kbd className="bg-slate-700 text-white px-3 py-2 rounded font-mono text-sm font-bold min-w-[44px] text-center mr-3 group-hover:bg-slate-600 transition-colors">
                  {key}
                </kbd>
                <span className="text-slate-300 flex-1">{action}</span>
                <button
                  onClick={() => copyToClipboard(`${key}: ${action}`)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-slate-700 rounded"
                  aria-label={`Copy ${key} control`}
                >
                  {copiedKey === `${key}: ${action}` ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
          <h3 className="text-xl font-semibold text-white mb-4">{tricks.title}</h3>
          <ul className="space-y-3">
            {tricks.keys.map(({ key, action }) => (
              <li key={key} className="flex items-center group">
                <kbd className="bg-gradient-to-br from-purple-700 to-blue-700 text-white px-3 py-2 rounded font-mono text-sm font-bold min-w-[44px] text-center mr-3 group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                  {key}
                </kbd>
                <span className="text-slate-300 flex-1">{action}</span>
                <button
                  onClick={() => copyToClipboard(`${key}: ${action}`)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-slate-700 rounded"
                  aria-label={`Copy ${key} trick control`}
                >
                  {copiedKey === `${key}: ${action}` ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
