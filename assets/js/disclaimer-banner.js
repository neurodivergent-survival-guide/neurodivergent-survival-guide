// disclaimer-banner.js
function createDisclaimerBanner() {
    const banner = document.createElement('div');
    banner.className = 'disclaimer-banner';
    banner.id = 'disclaimer-banner';
    banner.innerHTML = `
        <div class="disclaimer-close" onclick="dismissDisclaimer()">×</div>
        <h3>Important: Educational Resource Only</h3>
        <p>This guide provides educational information for self-understanding...</p>
        <!-- rest of disclaimer content -->
    `;
    
    // Insert after header or at top of main content
    const insertPoint = document.querySelector('.header') || document.body.firstChild;
    insertPoint.insertAdjacentElement('afterend', banner);
    
    checkDisclaimerStatus();
}

document.addEventListener('DOMContentLoaded', createDisclaimerBanner);
