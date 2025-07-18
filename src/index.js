// Déclaration d'une variable pour stocker l'ID du timeout.
    let automationTimeoutId = null;

    // Variables globales pour le délai minimum et maximum (en millisecondes)
    let minDelayMs = 3000;
    let maxDelayMs = 25000;

    // --- PROMPT TEXTUEL ALÉATOIRE: VARIABLES ET LOGIQUE ---
    const basePromptPrefix = "Realistic ";
    const midPromptPart1 = " casting sharp, radiant reflections and shadows on the surface. The object lies on ";
    const midPromptPart2 = ". Studio lighting ";
    const promptSuffix = " highlights the glossy, reflective texture and creates a luxurious, dreamy atmosphere. Minimalistic composition, pastel color palette, elegance, high-resolution render, macro style.";

    const subjects = [
        "glass single strawberry in clear pink crystal with intricate seed details and realistic green leaves",
        "polished glass apple in clear emerald green crystal with intricate leaf texture and a dewdrop",
        "translucent crystal lemon slice with frosty sugar-like texture and detailed zest pores",
        "frosted glass bunch of grapes in deep purple, with delicate vine details and individual spherical forms",
        "iridescent glass pear in shimmering opalescent white with a tiny, perfectly formed stem",
        "faceted crystal orange segment in vibrant amber with subtle internal light refractions",
        "clear glass banana with subtle internal air bubbles and a smooth, curved shape",
        "smoked glass single fig in dark violet with visible seed patterns and a delicate stem",
        "polished sapphire crystal blueberry with a subtle bloom effect and tiny reflective points",
        "blown glass raspberry in bright ruby red, with intricate drupelet texture and a soft glow",
        "transparent acrylic pineapple with razor-sharp facets and a crystal-clear appearance",
        "etched glass peach in soft coral pink with frosted surface and delicate fuzz effect",
        "liquid glass kiwi slice with black seed details and vibrant green pulp swirls",
        "cut crystal cherry in deep burgundy, with a delicate stem and a glossy finish",
        "amber glass mango with internal fibrous details and a smooth, polished skin",
        "clear glass passion fruit with internal seed cavities and a translucent, bubbly pulp",
        "faceted glass plum in deep indigo, with sharp edges and a subtle internal shimmer",
        "frosted crystal pomegranate aril with visible seed and translucent ruby-red casing",
        "polished glass lime in vibrant citrus green with textured skin and a juicy appearance",
        "clear glass watermelon slice with dark seed inclusions and subtle pink transparency",
        "blown glass persimmon in warm orange with a delicate calyx and a smooth, round form",
        "transparent crystal lychee with a pearly white flesh effect and a single dark seed",
        "faceted glass cantaloupe slice in soft melon orange with intricate netting texture",
        "iridescent glass dragon fruit slice in shimmering pink with tiny black seed dots",
        "clear glass star fruit in pale yellow with distinctive ridges and transparent segments",
        "polished crystal clementine in bright tangerine with a segmented interior and a smooth peel",
        "translucent glass coconut half with textured brown outer shell and clear inner water effect",
        "faceted amethyst crystal grape with a soft, natural hue and a polished skin",
        "glowing ruby glass strawberry with a perfect heart shape and sparkling details",
        "smooth glass avocado half with a polished green skin and a textured glass pit",
        "clear glass tangerine with delicate peel texture and visible segments inside",
        "polished crystal papaya slice with tiny black seeds and a smooth orange flesh",
        "translucent glass guava with internal seeds and a slightly rough skin texture",
        "faceted emerald glass kiwi with a fuzzy skin texture and clear green pulp",
        "iridescent glass fig with a subtle purple sheen and visible internal seeds",
        "blown glass apricot in soft orange with a subtle blush and a smooth, polished surface",
        "transparent crystal blackberry with individual drupelets and a deep, dark hue",
        "polished glass nectarine in vibrant peach with a smooth skin and a delicate cleft",
        "faceted blue glass blueberry with a frosted appearance and tiny indentations",
        "clear glass pomegranate half with sparkling arils and a segmented interior",
        "liquid glass passionfruit with internal bubbly pulp and a smooth, translucent skin",
        "cut crystal golden delicious apple with a polished skin and a clear, amber tint",
        "translucent glass kiwi whole fruit with fuzzy skin and a glowing green interior",
        "faceted rose crystal peach with a soft, romantic hue and a velvety texture effect",
        "iridescent glass grape single berry in shimmering green with a delicate bloom",
        "blown glass fig with a deep, rich color and subtle internal details",
        "transparent crystal persimmon with a translucent skin and a star-shaped calyx",
        "polished glass starfruit with distinct ridges and a clear, refreshing appearance",
        "faceted glass lime slice with sharp edges and a vibrant green transparency",
        "clear glass single lychee with a textured outer shell and a smooth, inner sphere"
    ];

    const backgroundsAndSurfaces = [
        "a soft pink background, casting sharp, radiant reflections and shadows on the surface",
        "a dark grey polished concrete slab, reflecting subtle light and creating deep shadows",
        "a smooth, off-white matte paper backdrop, absorbing light softly and minimizing reflections",
        "a vibrant teal silk fabric, creating soft drapes and diffused reflections",
        "a transparent acrylic block, allowing light to pass through and create complex refractions",
        "a stark black velvet cloth, absorbing all light to emphasize the object's glow",
        "a highly reflective mirrored surface, doubling the object and creating infinite reflections",
        "a subtly textured beige linen fabric, giving a natural, tactile feel",
        "a cool blue frosted glass panel, diffusing light evenly and creating a serene mood",
        "a warm wooden tabletop with a natural grain, adding an organic touch",
        "a shimmering gold foil background, creating opulent, scattered reflections",
        "a deep green marble slab with white veins, adding a touch of classic luxury",
        "a pristine white glossy ceramic tile, creating sharp, clear reflections",
        "a muted purple seamless paper backdrop, providing a soft, calming presence",
        "a dark, textured volcanic rock surface, creating a rugged contrast",
        "a clear water surface with gentle ripples, distorting reflections subtly",
        "a pile of fine white sand, creating a soft, natural base",
        "a deep red crushed velvet backdrop, exuding richness and drama",
        "a light grey concrete wall, acting as a minimalist, industrial background",
        "a bed of glistening ice shards, creating a cool, fractured reflection",
        "a soft, diffused gradient background from light blue to white",
        "a polished copper sheet, casting warm, metallic reflections",
        "a vibrant yellow felt fabric, adding a playful, energetic pop",
        "a dark polished wood floor with subtle reflections of ambient light",
        "a transparent glass sheet with condensation droplets, creating a soft blur",
        "a stack of pristine white art paper, providing a clean, crisp background",
        "a deep indigo matte background, absorbing light for a dramatic effect",
        "a textured silver leaf backdrop, creating an antique, subtle sheen",
        "a soft, flowing sheer white curtain, diffusing light gently",
        "a minimalist dark grey stone pedestal, emphasizing the object's form",
        "a glowing light box with a soft, uniform white illumination",
        "a vibrant orange corrugated metal sheet, adding an industrial edge",
        "a smooth, black onyx slab, providing a deep, mirror-like surface",
        "a delicate pale green watercolor background, with soft, blended hues",
        "a polished stainless steel plate, reflecting light with sharp clarity",
        "a bed of dried, natural moss, creating an organic, earthy setting",
        "a shimmering blue satin fabric, creating luxurious, flowing drapes",
        "a translucent, frosted acrylic surface with internal light diffusion",
        "a dark brown rustic wooden plank, with visible grain and texture",
        "a vibrant magenta seamless paper background, bold and striking",
        "a stack of smooth, grey river stones, creating a natural, zen feel",
        "a polished black granite countertop, providing sharp, dark reflections",
        "a soft, warm terracotta colored plaster wall, adding rustic charm",
        "a transparent glass sphere, distorting the background in a unique way",
        "a bed of vibrant green artificial grass, adding a pop of nature",
        "a textured dark blue denim fabric, creating a casual, cool backdrop",
        "a polished brass tray, reflecting a soft, golden glow",
        "a pale yellow ceramic tile with a subtle gloss finish",
        "a distressed white wooden table, providing a vintage, shabby chic look",
        "a background of swirling, ethereal smoke in soft grey"
    ];

    const lightingAndStyles = [
        "Studio lighting",
        "Soft, diffused natural light from a window, creating gentle highlights and a serene mood",
        "Dramatic chiaroscuro lighting from a single overhead spot, emphasizing contrast and mystery",
        "Vibrant neon backlighting, giving an ethereal glow and futuristic feel",
        "Warm golden hour light, casting long shadows and creating a cozy, inviting ambiance",
        "Cool, crisp daylight from an open skylight, emphasizing clarity and realism",
        "Subtle rim lighting from behind, creating a halo effect and emphasizing contours",
        "Low-key cinematic lighting with deep shadows and selective illumination",
        "High-key ethereal lighting, making the object appear weightless and pure",
        "Multiple softboxes illuminating from all sides, for a flawless, shadowless look",
        "Gritty, industrial lighting with harsh shadows and strong directional light",
        "Dreamy, hazy light with soft focus and glowing highlights",
        "Sharp, precise macro lighting, revealing every tiny detail with incredible clarity",
        "Mystical, atmospheric lighting with subtle fog and diffused beams",
        "Bright, clean white light, for a modern and minimalist aesthetic",
        "Soft, warm candle-light glow, creating an intimate and romantic setting",
        "Dynamic, scattered light reflecting off water, creating dancing patterns",
        "Bold, high-contrast lighting with deep black shadows and stark whites",
        "Soft, romantic twilight illumination, with a hint of purple and orange hues",
        "Sleek, futuristic LED strip lighting, highlighting edges and contours with precision",
        "Organic, natural sunlight filtering through leaves, creating dappled shadows",
        "Vivid, saturated pop art lighting, with bold colors and strong outlines",
        "Gentle, diffused light from a cloudy sky, creating even, soft illumination",
        "Dramatic spotlighting from below, creating an unsettling and intriguing effect",
        "Soft, ambient light from hidden sources, creating a seamless glow",
        "Cool, clinical lighting, emphasizing precision and sterile beauty",
        "Warm, inviting lamplight, creating a cozy and comfortable atmosphere",
        "Ethereal, back-lit smoke, creating a mysterious and atmospheric glow",
        "Bright, direct flash photography, revealing every texture and detail starkly",
        "Soft, romantic moonlight glow, with gentle shadows and a silver sheen",
        "Dynamic, fractured light passing through a prism, creating rainbow effects",
        "Bold, expressive use of colored gels on lights, creating vibrant hues",
        "Subtle, soft focus lighting, emphasizing dreaminess and abstract forms",
        "Dramatic, single-source overhead light, casting deep, defined shadows",
        "Clean, natural window light on a cloudy day, for a muted, soft palette",
        "Warm, diffused fireplace glow, creating an intimate, cozy scene",
        "Vibrant, energetic party lighting with dynamic color changes",
        "Soft, moody light, enhancing textures and creating depth",
        "Sharp, clean edge lighting, defining the object's silhouette perfectly",
        "Gentle, back-lit bokeh effect, creating a soft, blurred background",
        "Cool, ambient light from a moonlit window, enhancing shadows and reflections",
        "Vibrant, playful studio lighting with colored backgrounds and whimsical feel",
        "Subtle, natural overcast lighting, for a soft and uniform look",
        "Dramatic, cinematic sidelighting, creating long, intriguing shadows",
        "Bright, sunny outdoor light, emphasizing vibrant colors and sharp details",
        "Soft, diffused light from a large lightbox, for a perfectly even illumination",
        "Warm, inviting light filtering through sheer curtains, creating a gentle mood",
        "Ethereal, glowing light from an unseen source, creating a magical aura",
        "Sharp, focused light on specific details, blurring the rest of the object",
        "Cool, analytical lighting, emphasizing clarity and intricate details"
    ];

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

                                    const currentSubject = subjects[Math.floor(Math.random() * subjects.length)];
                                    const currentBackground = backgroundsAndSurfaces[Math.floor(Math.random() * backgroundsAndSurfaces.length)];
                                    const currentLighting = lightingAndStyles[Math.floor(Math.random() * lightingAndStyles.length)];
                                    const fullPrompt = basePromptPrefix + currentSubject + midPromptPart1 + currentBackground + midPromptPart2 + currentLighting + promptSuffix;

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
    const totalCombinations = subjects.length * backgroundsAndSurfaces.length * lightingAndStyles.length;
    console.log(`Script d'automatisation démarré pour générer des combinaisons ALÉATOIRES d'objets de luxe en studio (exclusivement des fruits en verre/cristal). Total: ${totalCombinations} combinaisons possibles.`);
    console.log(`Délai initial: entre ${minDelayMs / 1000} et ${maxDelayMs / 1000} secondes.`);
    clickButtonsInLoop();

    // Rendre les fonctions de contrôle accessibles dans la console
    window.stopAutomation = stopAutomation;
    window.setDelayRange = setDelayRange;
    console.log(`Pour modifier le délai, tapez \`setDelayRange(min_secondes, max_secondes)\` dans la console. Exemple: \`setDelayRange(6, 18); \``);
    console.log(`Pour arrêter l'automatisation, tapez \`stopAutomation()\` dans la console et appuyez sur Entrée.`);