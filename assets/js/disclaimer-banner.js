/**
 * Neurodivergent Survival Guide - Secure Disclaimer Banner
 * Uses sessionStorage for better privacy and security
 */

(function() {
    'use strict';

    // Secure storage functions using sessionStorage
    function setDismissalStatus(dismissed) {
        try {
            if (dismissed) {
                sessionStorage.setItem('nsg_disclaimer_dismissed', 'true');
            } else {
                sessionStorage.removeItem('nsg_disclaimer_dismissed');
            }
        } catch (e) {
            // sessionStorage might be disabled - degrade gracefully
            console.warn('SessionStorage unavailable, disclaimer will reappear on page refresh');
        }
    }

    function getDismissalStatus() {
        try {
            return sessionStorage.getItem('nsg_disclaimer_dismissed') === 'true';
        } catch (e) {
            // sessionStorage might be disabled
            return false;
        }
    }

    function dismissDisclaimer() {
        const banner = document.getElementById('nsg-disclaimer-banner');
        if (banner) {
            banner.classList.add('dismissed');
            setDismissalStatus(true);
            
            // Focus management for accessibility
            const focusTarget = document.querySelector('main, .content-card, .container, body');
            if (focusTarget && focusTarget.focus) {
                focusTarget.focus();
            }
        }
    }

    function createDisclaimerBanner() {
        // Check if banner already exists (prevent duplicates)
        if (document.getElementById('nsg-disclaimer-banner')) {
            return;
        }

        // Don't show if already dismissed in this session
        if (getDismissalStatus()) {
            return;
        }

        const banner = document.createElement('div');
        banner.className = 'disclaimer-banner';
        banner.id = 'nsg-disclaimer-banner';
        banner.setAttribute('role', 'banner');
        banner.setAttribute('aria-label', 'Important disclaimer about educational content');
        
        // Create close button with proper accessibility
        const closeButton = document.createElement('button');
        closeButton.className = 'disclaimer-close';
        closeButton.type = 'button';
        closeButton.setAttribute('aria-label', 'Dismiss disclaimer banner');
        closeButton.innerHTML = '×';
        
        // Secure event listeners (no onclick in HTML)
        closeButton.addEventListener('click', dismissDisclaimer);
        closeButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                dismissDisclaimer();
            }
        });

        // Create content container
        const content = document.createElement('div');
        content.innerHTML = `
            <h3>Important: Educational Resource Only</h3>
            <p>This guide provides educational information for self-understanding. It is not intended to diagnose, treat, or replace professional medical or mental health care.</p>
            <p>If experiences described here significantly impact daily functioning, relationships, or wellbeing, consider consulting qualified healthcare professionals.</p>
            
            <div class="crisis-resources">
                <h4>Immediate Help Available</h4>
                <p><strong>Crisis situations:</strong> Contact emergency services (911) or crisis hotlines.</p>
                <p><strong>Suicide Prevention:</strong> 988 Lifeline</p>
                <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
            </div>
        `;

        banner.appendChild(closeButton);
        banner.appendChild(content);

        // Smart insertion point detection
        const insertionTargets = [
            '.breadcrumb',
            '.header', 
            'header',
            '.container',
            '.intro-section', 
            '.content-card',
            'main',
            'body'
        ];

        let inserted = false;
        for (const selector of insertionTargets) {
            const element = document.querySelector(selector);
            if (element) {
                if (selector === 'body') {
                    element.insertBefore(banner, element.firstElementChild);
                } else {
                    element.insertAdjacentElement('afterend', banner);
                }
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            console.warn('Could not find suitable insertion point for disclaimer banner');
            return;
        }

        // Announce to screen readers
        banner.setAttribute('aria-live', 'polite');
        
        // Auto-focus close button for keyboard users (optional)
        // closeButton.focus();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createDisclaimerBanner);
    } else {
        createDisclaimerBanner();
    }

    // Make dismissal function available for testing/debugging
    if (typeof window !== 'undefined') {
        window.NSGDisclaimer = {
            dismiss: dismissDisclaimer,
            reset: function() { setDismissalStatus(false); },
            status: getDismissalStatus
        };
    }

})();
