const specificActions = [
    "Change the background to",
    "Transform the style to",
    "Add glowing neon effects to",
    "Convert to",
    "Apply",
    "Replace",
    "Enhance",
    "Slightly enhance the character's",
    "Add subtle",
    "Gradually increase the fantasy elements in",
    "Transform the outfit to",
    "Change the dress color to",
    "Transform the armor to",
    "Add weathered leather texture to",
    "Replace the sword with",
    "Add a majestic cape flowing in the wind"
];

const elementsToModify = [
    "a cyberpunk cityscape",
    "watercolor painting",
    "the outfit",
    "impressionist painting style with visible brush strokes",
    "anime art style with bold colors and sharp lines",
    "photorealistic render with cinematic lighting",
    "cyberpunk aesthetic with neon highlights and dark atmosphere",
    "1980s retro style with vintage color palette",
    "Victorian era aesthetic with period-appropriate details",
    "futuristic sci-fi style with holographic elements",
    "[ancient temple/modern city/alien landscape]",
    "[underwater scene/space station/magical forest]",
    "dramatic storm clouds with lightning effects",
    "golden hour lighting with warm shadows",
    "misty fog atmosphere with ethereal glow",
    "[armor/clothing/accessories]",
    "[magical aura/technological implants/fantasy elements]",
    "the character design",
    "[medieval armor/space suit/elegant dress]",
    "deep emerald green with silk texture",
    "polished chrome with reflective surface",
    "the gloves with visible wear patterns",
    "a glowing staff"
];

const desiredResults = [
    "while maintaining the exact same character pose and lighting",
    "while preserving all facial features and composition",
    "while keeping the same character identity",
    "with consistent lighting",
    "maintaining the same lighting mood",
    "with more intricate details",
    "while keeping facial features identical",
    "while maintaining exact facial features and body proportions",
    "while keeping everything else identical",
    "without changing the character's pose"
];

const ambiances = [
    "with dramatic chiaroscuro lighting",
    "with soft, ethereal glow",
    "with harsh industrial lighting",
    "with warm golden hour ambiance",
    "with mysterious moonlight effects"
];

const styles = [
    "in the style of Renaissance painting",
    "with modern digital art aesthetic",
    "using watercolor techniques",
    "with photorealistic rendering",
    "in comic book illustration style"
];

const modifications = [
    "add subtle magical elements",
    "enhance the technological aspects",
    "introduce organic natural elements",
    "incorporate geometric patterns",
    "add dynamic motion blur effects"
];

const evolutivePrompts = [
    "Enhance the character with subtle [magical/technological/organic] elements while maintaining exact facial features",
    "Transform the background to [mystical forest/futuristic city/ancient ruins] with consistent lighting",
    "Add [flowing cape/glowing aura/intricate armor details] while preserving character identity",
    "Change the color palette to [warm sunset/cool moonlight/vibrant neon] tones",
    "Apply [impressionist/cyberpunk/fantasy art] style while keeping composition identical"
];

export function generatePrompt() {
    // Option 1: Action-based prompt
    const action = specificActions[Math.floor(Math.random() * specificActions.length)];
    const element = elementsToModify[Math.floor(Math.random() * elementsToModify.length)];
    const result = desiredResults[Math.floor(Math.random() * desiredResults.length)];
    const actionBasedPrompt = `${action} ${element} ${result}`;

    // Option 2: Iterative influence prompt
    const iterativeStyle = styles[Math.floor(Math.random() * styles.length)];
    const iterativePrompt = `Convert to ${iterativeStyle}`;

    // Option 3: Coherent progression prompt
    const progressionBackground = ["ancient temple", "modern city", "alien landscape"][Math.floor(Math.random() * 3)];
    const progressionSetting = ["underwater scene", "space station", "magical forest"][Math.floor(Math.random() * 3)];
    const progressionLighting = ["dramatic storm clouds with lightning effects", "golden hour lighting with warm shadows", "misty fog atmosphere with ethereal glow"][Math.floor(Math.random() * 3)];
    const progressionPrompt = `Change background to ${progressionBackground} while preserving character consistency. Transform setting to ${progressionSetting} maintaining the same lighting mood. Add ${progressionLighting}.`;

    // Option 4: Controlled evolution prompt
    const evolutivePrompt = evolutivePrompts[Math.floor(Math.random() * evolutivePrompts.length)];

    // Option 5: Surgical modification prompt
    const surgicalAction = ["Change the dress color to", "Transform the armor to", "Add weathered leather texture to", "Replace the sword with", "Add a majestic cape flowing in the wind"][Math.floor(Math.random() * 5)];
    const surgicalElement = ["deep emerald green with silk texture", "polished chrome with reflective surface", "the gloves with visible wear patterns", "a glowing staff", "without changing the character's pose"][Math.floor(Math.random() * 5)];
    const surgicalPrompt = `${surgicalAction} ${surgicalElement}`;

    const allPrompts = [
        actionBasedPrompt,
        iterativePrompt,
        progressionPrompt,
        evolutivePrompt,
        surgicalPrompt
    ];

    return allPrompts[Math.floor(Math.random() * allPrompts.length)];
}

export function getTotalCombinations() {
    // This will be a very rough estimate due to the complex combinations
    return specificActions.length * elementsToModify.length * desiredResults.length +
           styles.length +
           (3 * 3 * 3) + // For progression prompt
           evolutivePrompts.length +
           (5 * 5); // For surgical modification
}