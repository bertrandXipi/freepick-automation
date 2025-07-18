const compositionAndStyles = [
    "A fashion-forward portrait of",
    "A candid, photojournalistic shot of",
    "A dramatic, high-contrast black and white photo of",
    "An ethereal, dream-like image of",
    "A minimalist, clean studio portrait of",
    "A vibrant, high-energy action shot of",
    "A vintage, sepia-toned photograph of",
    "A futuristic, cyberpunk-inspired portrait of",
    "A soft-focus, romantic close-up of",
    "A powerful, cinematic-style photo of",
    "A surreal, artistic composition featuring",
    "A classic, elegant black and white portrait of",
    "A bold, pop-art inspired image of",
    "A serene, natural light portrait of",
    "A moody, low-key shot of"
];

const modelDescriptions = [
    "a light-skinned woman with voluminous red curls,",
    "an East Asian woman with a sleek black bob,",
    "a dark-skinned woman with long, elegant braids,",
    "a South Asian woman with flowing dark hair and golden skin,",
    "a woman with androgynous features and a short, platinum blonde pixie cut,",
    "a freckled woman with strawberry blonde hair in a messy bun,",
    "a Latina woman with cascading dark curls and a warm smile,",
    "a Scandinavian woman with icy blue eyes and straight blonde hair,",
    "a woman with striking silver hair and wise eyes,",
    "a woman with a shaved head and confident expression,",
    "a Mediterranean woman with olive skin and thick, wavy brown hair,",
    "a woman with vibrant, dyed-blue hair in a sharp undercut,",
    "a woman with a beautiful vitiligo pattern on her skin,",
    "a woman with a classic 1950s hairstyle and fair skin,",
    "a woman with a face full of character and expressive wrinkles,"
];

const clothingDescriptions = [
    "wearing a textured two-tone dress in olive green and ivory.",
    "dressed in a sharp, tailored black power suit.",
    "wearing a flowing bohemian silk gown with floral patterns.",
    "in a futuristic, iridescent metallic jacket and leather pants.",
    "wearing a simple, elegant white linen shirt and jeans.",
    "adorned in a traditional, brightly colored sari with intricate embroidery.",
    "in a vintage 1920s flapper dress with sequins and beads.",
    "wearing a cozy, oversized knit sweater in a neutral tone.",
    "in a punk-rock inspired outfit with a leather jacket and ripped denim.",
    "wearing a delicate lace blouse and a long, flowing skirt.",
    "in a minimalist, architectural black dress with sharp lines.",
    "wearing a vibrant, African-print wrap dress.",
    "in a sporty, high-fashion tracksuit with bold logos.",
    "wearing a classic trench coat, belted at the waist.",
    "in a dramatic, floor-length velvet cloak."
];

const poses = [
    "posing delicately,",
    "looking confidently into the camera,",
    "laughing candidly,",
    "gazing thoughtfully out a window,",
    "in mid-stride, walking with purpose,",
    "with a powerful, assertive stance,",
    "her face partially obscured by shadow,",
    "in a moment of quiet reflection,",
    "dancing with joyful abandon,",
    "leaning against a textured wall,",
    "her expression serene and peaceful,",
    "captured in a dynamic, athletic pose,",
    "with a mysterious, enigmatic smile,",
    "her hands framing her face,",
    "in a relaxed, natural posture,"
];

const makeupStyles = [
    "her eyelids covered in striking blue shadow.",
    "with bold red lipstick and minimalist makeup.",
    "featuring a natural, dewy look with visible freckles.",
    "with dramatic, smoky eyes and a nude lip.",
    "adorned with graphic, avant-garde eyeliner.",
    "with a glossy, high-shine lip and glowing skin.",
    "wearing no visible makeup, showcasing her natural beauty.",
    "with a touch of gold leaf accentuating her cheekbones.",
    "featuring a monochromatic makeup look in shades of pink.",
    "with perfectly sculpted brows and a matte complexion.",
    "with a futuristic, metallic sheen on her eyelids.",
    "featuring a soft, romantic makeup style with flushed cheeks.",
    "with a bold, dark berry lip color.",
    "her face painted with artistic, abstract designs.",
    "with a sun-kissed, bronzed glow."
];

const detailsAndProps = [
    "surrounded by pastel blue flowers in the foreground.",
    "holding a single, perfect red rose.",
    "wearing oversized 70s-style sunglasses.",
    "with a vintage film camera slung over her shoulder.",
    "delicately holding a steaming cup of tea.",
    "with a cascade of antique jewelry around her neck.",
    "her hair adorned with tiny, star-shaped clips.",
    "partially submerged in a pool of milky water.",
    "surrounded by floating, translucent geometric shapes.",
    "wearing elegant, long satin gloves.",
    "with a neon sign glowing softly behind her.",
    "holding an old, leather-bound book.",
    "with a single tear tracing a path down her cheek.",
    "wearing a futuristic, augmented reality visor.",
    "with a majestic, colorful parrot perched on her shoulder."
];

const settingsAndLighting = [
    "The scene is shot in high-resolution studio lighting.",
    "The image is bathed in the golden hour sunlight of a Parisian street.",
    "The background is a dark, moody alleyway with dramatic neon lights.",
    "She is in a minimalist, white studio with soft, diffused light.",
    "The setting is a lush, overgrown botanical garden with dappled sunlight.",
    "The photo is taken against a backdrop of a brutalist concrete building.",
    "The lighting is reminiscent of a classic film noir, with sharp shadows.",
    "She is in a grand, baroque library filled with old books.",
    "The background is a vibrant, bustling Tokyo street at night.",
    "The lighting is soft and ethereal, as if from a dream.",
    "The scene is a windswept, dramatic coastal cliff at dusk.",
    "She is in a futuristic, sterile environment with cool, blue-toned lighting.",
    "The background is a simple, textured wall, focusing all attention on her.",
    "The lighting is warm and intimate, as if from a fireplace.",
    "The setting is an abandoned, rustic farmhouse with light streaming through the windows."
];

export function generatePrompt() {
    const style = compositionAndStyles[Math.floor(Math.random() * compositionAndStyles.length)];
    const model = modelDescriptions[Math.floor(Math.random() * modelDescriptions.length)];
    const clothing = clothingDescriptions[Math.floor(Math.random() * clothingDescriptions.length)];
    const pose = poses[Math.floor(Math.random() * poses.length)];
    const makeup = makeupStyles[Math.floor(Math.random() * makeupStyles.length)];
    const details = detailsAndProps[Math.floor(Math.random() * detailsAndProps.length)];
    const setting = settingsAndLighting[Math.floor(Math.random() * settingsAndLighting.length)];

    return `${style} ${model} ${pose} ${makeup} ${clothing} ${details} ${setting}`;
}

export function getTotalCombinations() {
    return compositionAndStyles.length *
           modelDescriptions.length *
           clothingDescriptions.length *
           poses.length *
           makeupStyles.length *
           detailsAndProps.length *
           settingsAndLighting.length;
}