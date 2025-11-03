type EventName =
  | 'view_home'
  | 'click_play'
  | 'view_keys_help'
  | 'copy_keys'
  | 'enter_fullscreen'
  | 'exit_fullscreen'
  | 'game_load_start'
  | 'game_load_success'
  | 'game_load_error'
  | 'game_retry'
  | 'start_game'
  | 'share_click'
  | 'scroll_to_game'
  | 'faq_expand';

interface EventProperties {
  device?: string;
  lang?: string;
  country?: string;
  [key: string]: unknown;
}

class Analytics {
  private static instance: Analytics;
  private events: Array<{ name: string; properties: EventProperties; timestamp: number }> = [];

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initDeviceInfo();
    }
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  private initDeviceInfo() {
    this.deviceInfo = {
      device: this.getDeviceType(),
      lang: navigator.language,
      userAgent: navigator.userAgent,
    };
  }

  private deviceInfo: Record<string, string> = {};

  private getDeviceType(): string {
    if (typeof window === 'undefined') return 'unknown';
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return 'mobile';
    }
    return 'desktop';
  }

  track(eventName: EventName, properties: EventProperties = {}) {
    const event = {
      name: eventName,
      properties: {
        ...this.deviceInfo,
        ...properties,
      },
      timestamp: Date.now(),
    };

    this.events.push(event);

    if (typeof window !== 'undefined' && window.console) {
      console.log('[Analytics]', eventName, properties);
    }
  }

  getEvents() {
    return this.events;
  }

  clearEvents() {
    this.events = [];
  }
}

export const analytics = Analytics.getInstance();

export function trackEvent(eventName: EventName, properties?: EventProperties) {
  analytics.track(eventName, properties);
}
