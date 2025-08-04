import { useEffect } from 'react';

export const useLeadTracking = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', eventName, properties);
    }
    
    // Console log para desarrollo
    console.log('Event tracked:', eventName, properties);
  };

  const trackWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', {
      source,
      timestamp: new Date().toISOString()
    });
  };

  const trackCalculatorUse = (project: string, amount: number) => {
    trackEvent('calculator_use', {
      project,
      amount,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackEvent,
    trackWhatsAppClick,
    trackCalculatorUse
  };
};