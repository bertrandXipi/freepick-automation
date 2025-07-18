import { generatePrompt, getTotalCombinations } from './prompt-generator.js';

// Déclaration d'une variable pour stocker l'ID du timeout.
let automationTimeoutId = null;

// Variables globales pour le délai minimum et maximum (en millisecondes)
let minDelayMs = 3000;
let maxDelayMs = 25000;

    function applyCSS() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.custom-toast{display:none!important;}';
        document.head.appendChild(style);
        console.log(`CSS appliqué: .custom-toast est masqué.`);
    }

    function downloadBase64Image(base64Data, filename) {
        const link = document.createElement('a');
        link.href = base64Data;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log(`Image "${filename}" déclenchée pour le téléchargement.`);
    }

    async function clickButtonsInLoop() {
        const textInput = document.querySelector('div[contenteditable="true"][data-tribute="true"]');
        const secondButton = document.querySelector('[data-cy="generate-button"]');
        const downloadButton = document.querySelector('[data-cy="download-ai-img-button"]');
        const colorsButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Colores'));
        const addButton = document.querySelector('button[aria-haspopup="dialog"][data-state="closed"]');
        const mainImageElement = document.querySelector('img.h-full.w-full.object-cover');
                const trashButton = Array.from(document.querySelectorAll('button')).find(btn =>
            btn.classList.contains('absolute') &&
            btn.classList.contains('right-1') &&
            btn.classList.contains('top-1') &&
            btn.classList.contains('bg-black/70')
        );

        if (!secondButton || !downloadButton || !colorsButton || !addButton || !mainImageElement || !textInput) {
            console.error(`ERREUR INIT: Un ou plusieurs éléments nécessaires (boutons, image principale ou champ texte) n'ont pas été trouvés. Vérifiez les sélecteurs.`);
            stopAutomation();
            return;
        }

        if (trashButton) {
            console.log(`LOG: Bouton "Poubelle" (retirer image précédente) trouvé ! Tentative de clic...`);
            trashButton.click();
            console.log(`LOG: Cliqué sur le bouton "Poubelle".`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`LOG: Délai après clic "Poubelle" terminé.`);
        } else {
            console.log(`LOG: Bouton "Poubelle" non trouvé (probablement premier tour ou pas d'image à retirer).`);
        }

        downloadButton.click();
        console.log(`LOG: Cliqué sur le bouton de téléchargement (Download AI Image).`);

        setTimeout(() => {
            if (mainImageElement && mainImageElement.src.startsWith('data:image/')) {
                let fileExtension = 'jpeg';
                if (mainImageElement.src.startsWith('data:image/png')) {
                    fileExtension = 'png';
                } else if (mainImageElement.src.startsWith('data:image/gif')) {
                    fileExtension = 'gif';
                }
                const filenameToDownload = `generated_image_${Date.now()}.${fileExtension}`;
                downloadBase64Image(mainImageElement.src, filenameToDownload);
            } else {
                console.warn(`LOG: Image Base64 d'aperçu non trouvée ou src incorrect pour le téléchargement.`);
            }

            setTimeout(() => {
                addButton.click();
                console.log(`LOG: Cliqué sur le bouton "Añadir".`);

                setTimeout(() => {
                    const useCreationsButton = Array.from(document.querySelectorAll('div[data-radix-popper-content-wrapper] button')).find(button => button.textContent.includes('Usar tus creaciones'));

                    if (useCreationsButton) {
                        useCreationsButton.click();
                        console.log(`LOG: Cliqué sur le bouton "Usar tus creaciones".`);
                    } else {
                        console.error(`ERREUR: Le bouton "Usar tus creaciones" n'a pas été trouvé dans le pop-up après "Añadir".`);
                        return;
                    }

                    setTimeout(() => {
                        const modalContainer = document.querySelector('[data-cy="modal-upload-use-image"]');
                        let historyGalleryContainer = null;
                        if (modalContainer) {
                            historyGalleryContainer = modalContainer.querySelector('[role="tabpanel"][data-state="active"]');
                        }

                        let galleryImageButton = null;
                        if (historyGalleryContainer) {
                            console.log(`LOG: Conteneur de la galerie trouvé ! Tentative de recherche du bouton d'image...`);
                            galleryImageButton = historyGalleryContainer.querySelector('button.relative.aspect-square');
                        } else {
                            console.error(`ERREUR: Conteneur de la galerie non trouvé (sélecteur "[data-cy="modal-upload-use-image"] [role="tabpanel"][data-state="active"]"). Vérifiez le sélecteur ou le délai.`);
                            return;
                        }

                        if (galleryImageButton) {
                            console.log(`LOG: Bouton d'image de la galerie trouvé ! Tentative de clic...`);
                            galleryImageButton.click();
                            console.log(`LOG: Cliqué sur une image de la galerie.`);
                        } else {
                            console.error(`ERREUR: Aucun bouton d'image dans la galerie (sélecteur "button.relative.aspect-square") n'a été trouvé dans le conteneur. Vérifiez le sélecteur ou le délai.`);
                            return;
                        }

                        setTimeout(() => {
                            const usarImagenButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Usar imagen'));

                            if (usarImagenButton) {
                                console.log(`LOG: Bouton "Usar imagen" trouvé ! Tentative de clic...`);
                                usarImagenButton.click();
                                console.log(`LOG: Cliqué sur le bouton "Usar imagen".`);
                            } else {
                                console.error(`ERREUR: Le bouton "Usar imagen" n'a pas été trouvé. Vérifiez le sélecteur ou le délai.`);
                                return;
                            }

                            setTimeout(() => {
                                colorsButton.click();
                                console.log(`LOG: Cliqué sur le bouton "Colores".`);

                                setTimeout(() => {
                                    const colorPaletteButtons = Array.from(document.querySelectorAll('div.grid button'));
                                    if (colorPaletteButtons.length > 0) {
                                        const randomIndex = Math.floor(Math.random() * colorPaletteButtons.length);
                                        const randomColorPaletteButton = colorPaletteButtons[randomIndex];
                                        randomColorPaletteButton.click();
                                        const colorNameSpan = randomColorPaletteButton.querySelector('span.text-2xs');
                                        const colorName = colorNameSpan ? colorNameSpan.textContent.trim() : 'Couleur Inconnue';
                                        console.log(`LOG: Cliqué sur la palette de couleurs aléatoire: ${colorName}.`);
                                    } else {
                                        console.error(`ERREUR: Aucune palette de couleurs trouvée.`);
                                    }

                                    const fullPrompt = generatePrompt();

                                    textInput.textContent = fullPrompt;
                                    const inputEvent = new Event('input', { bubbles: true });
                                    textInput.dispatchEvent(inputEvent);
                                    console.log(`LOG: Inséré "${fullPrompt.substring(0, 70)}..." dans l'élément texte.`);

                                    setTimeout(() => {
                                        secondButton.click();
                                        console.log(`LOG: Cliqué sur le bouton (Generate)`);
                                        const randomDelay = Math.random() * (maxDelayMs - minDelayMs) + minDelayMs;
                                        console.log(`LOG: Prochain cycle dans ${Math.round(randomDelay / 1000)} secondes.`);
                                        automationTimeoutId = setTimeout(clickButtonsInLoop, randomDelay);
                                    }, 500);

                                }, 1000);
                            }, 1500);
                        }, 2500);
                    }, 3000);
                }, 1500);
            }, 500);
        }, 1000);
    }

    function stopAutomation() {
        if (automationTimeoutId !== null) {
            clearTimeout(automationTimeoutId);
            automationTimeoutId = null;
            console.log(`Automatisation arrêtée par commande.`);
        } else {
            console.log(`Aucune automatisation en cours à arrêter.`);
        }
    }

    function setDelayRange(newMinSeconds, newMaxSeconds) {
        if (newMinSeconds < 0 || newMaxSeconds < newMinSeconds) {
            console.error(`Erreur: Les valeurs de délai ne sont pas valides. Assurez-vous que min <= max et que les deux sont positifs.`);
            return;
        }
        minDelayMs = newMinSeconds * 1000;
        maxDelayMs = newMaxSeconds * 1000;
        console.log(`Le délai aléatoire a été mis à jour : entre ${newMinSeconds} et ${newMaxSeconds} secondes.`);
    }

    // Lancement initial du script
    applyCSS();
    const totalCombinations = getTotalCombinations();
    console.log(`Script d'automatisation démarré pour générer des combinaisons ALÉATOIRES d'objets de luxe en studio (exclusivement des fruits en verre/cristal). Total: ${totalCombinations} combinaisons possibles.`);
    console.log(`Délai initial: entre ${minDelayMs / 1000} et ${maxDelayMs / 1000} secondes.`);
    clickButtonsInLoop();

    // Rendre les fonctions de contrôle accessibles dans la console
    window.stopAutomation = stopAutomation;
    window.setDelayRange = setDelayRange;
    console.log(`Pour modifier le délai, tapez \`setDelayRange(min_secondes, max_secondes)\` dans la console. Exemple: \`setDelayRange(6, 18); \``);
    console.log(`Pour arrêter l'automatisation, tapez \`stopAutomation()\` dans la console et appuyez sur Entrée.`);