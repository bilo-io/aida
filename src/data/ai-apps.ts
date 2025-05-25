import { AIApplicationSummary } from "@/types/ai-apps";

export const aiApplications: AIApplicationSummary[] = [
    {
        id: "google_gemini",
        rating: "8/10",
        name: "Gemini",
        description: "Google's multimodal AI assistant, integrated with Google Workspace, supporting text, images, audio, and video for productivity and creative tasks.",
        image: "/assets/img/ai-apps/ai-google-gemini.jpg",
        logo: "https://www.google.com/images/gemini-logo.svg",
        companyName: "Google",
        companyLink: "https://www.google.com",
        companyLogo: "https://www.google.com/images/google-logo.svg",
        link: "https://gemini.google.com",
        pricing: "Free with limits, $19.99/mo for Gemini Advanced",
        types: ["writing", "coding", "chatbot", "productivity", "multimodal"],
        pros: [
            "Deep integration with Google Workspace",
            "Multimodal capabilities (text, image, audio, video)",
            "Real-time web access for up-to-date answers",
            "Multiple answer drafts for creative tasks"
        ],
        cons: [
            "Responses can feel brief and clinical",
            "Best features tied to Google ecosystem",
            "Limited free access to advanced features"
        ]
    },
    {
        id: "openai_chatgpt",
        rating: "9/10",
        name: "ChatGPT",
        description: "A conversational AI assistant by OpenAI designed for tasks like writing, coding, summarizing, tutoring, and general Q&A.",
        image: "/assets/img/ai-apps/ai-openai-chatgpt.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        companyName: "OpenAI",
        companyLink: "https://openai.com",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenAI_Logo.svg",
        link: "https://chat.openai.com",
        pricing: "Free (GPT-3.5), $20/mo for GPT-4 (ChatGPT Plus)",
        types: ["writing", "coding", "chatbot", "education", "productivity"],
        pros: [
            "Intuitive chat interface",
            "High-quality writing and coding suggestions",
            "Custom GPTs and plugin support",
            "Voice, image, and document capabilities in Pro"
        ],
        cons: [
            "GPT-4 only available to paying users",
            "No API access directly from ChatGPT",
            "Some features gated by plan or region"
        ]
    },
    {
        id: "anthropic_claude",
        rating: "8.5/10",
        name: "Claude",
        description: "A conversational AI assistant by Anthropic, excelling in writing, coding, and handling large documents with a focus on safety and clarity.",
        image: "/assets/img/ai-apps/ai-anthropic-claude.png",
        logo: "https://www.anthropic.com/images/claude-logo.svg",
        companyName: "Anthropic",
        companyLink: "https://www.anthropic.com",
        companyLogo: "https://www.anthropic.com/images/anthropic-logo.svg",
        link: "https://claude.ai",
        pricing: "Free tier with limits, $20/mo for Pro plan",
        types: ["writing", "coding", "chatbot", "productivity"],
        pros: [
            "Superior writing style adaptation",
            "Handles up to 100K tokens for large documents",
            "Strong focus on safe and helpful responses",
            "Integrates with platforms like Slack and Poe"
        ],
        cons: [
            "No image or voice support",
            "Limited free tier with daily message caps",
            "No real-time web search"
        ]
    },
    {
        id: "deepseek_deepseek",
        rating: "8/10",
        name: "DeepSeek",
        description: "A cost-effective, open-source AI chatbot from DeepSeek AI, specializing in coding, Chinese NLP, and technical tasks with transparent reasoning.",
        image: "/assets/img/ai-apps/ai-deepseek-ai.jpg",
        logo: "https://www.deepseek.com/images/logo.svg",
        companyName: "DeepSeek AI",
        companyLink: "https://www.deepseek.com",
        companyLogo: "https://www.deepseek.com/images/company-logo.svg",
        link: "https://www.deepseek.com",
        pricing: "Free testing, API from $0.0008/1K tokens",
        types: ["coding", "chatbot", "research"],
        pros: [
            "Highly cost-effective with open-source options",
            "Strong coding and Chinese NLP capabilities",
            "Transparent chain-of-thought reasoning",
            "Fast response times for technical queries"
        ],
        cons: [
            "Text-only, no image or audio support",
            "Past security breach concerns",
            "Web search can be slow under high demand"
        ]
    },
    {
        id: "xai_grok",
        rating: "8.5/10",
        name: "Grok",
        description: "xAI's free AI assistant with real-time X post access, offering witty responses and strong coding support for general and technical queries.",
        image: "/assets/img/ai-apps/ai-xai-grok.png",
        logo: "https://grok.x.ai/images/grok-logo.svg",
        companyName: "xAI",
        companyLink: "https://x.ai",
        companyLogo: "https://x.ai/images/xai-logo.svg",
        link: "https://grok.x.ai",
        pricing: "Free, SuperGrok subscription (details at https://x.ai/grok)",
        types: ["writing", "coding", "chatbot", "research"],
        pros: [
            "Free access to DeepSearch and reasoning modes",
            "Real-time X post integration for current info",
            "Witty and engaging conversation style",
            "Comparable coding to Claude 3.7 Sonnet"
        ],
        cons: [
            "Limited to X platform for some features",
            "Voice mode only on iOS/Android apps",
            "BigBrain mode not publicly available"
        ]
    },
    {
        id: "perplexity_perplexity",
        rating: "8/10",
        name: "Perplexity",
        description: "An AI-powered conversational search engine with real-time web access and citations, ideal for academic and professional research.",
        image: "/assets/img/ai-apps/ai-perplexity.webp",
        logo: "https://www.perplexity.ai/images/logo.svg",
        companyName: "Perplexity AI",
        companyLink: "https://www.perplexity.ai",
        companyLogo: "https://www.perplexity.ai/images/company-logo.svg",
        link: "https://www.perplexity.ai",
        pricing: "Free, Pro plan at $20/mo",
        types: ["research", "chatbot", "education"],
        pros: [
            "Real-time web search with citations",
            "User-friendly interface for research",
            "Supports over 10M monthly active users",
            "Access to multiple AI models via Poe"
        ],
        cons: [
            "Less suited for creative or open-ended tasks",
            "Pro features require subscription",
            "Limited multimodal capabilities"
        ]
    },
    {
        id: "quora_poe",
        rating: "7.5/10",
        name: "Poe",
        description: "A chatbot aggregator by Quora, allowing access to multiple AI models like Claude and DeepSeek for customized conversational experiences.",
        image: "/assets/img/ai-apps/ai-poe-wallpaper.webp",
        logo: "https://poe.com/images/logo.svg",
        companyName: "Quora",
        companyLink: "https://www.quora.com",
        companyLogo: "https://www.quora.com/images/quora-logo.svg",
        link: "https://poe.com",
        pricing: "Free, $7.3M from 40K paid subscriptions",
        types: ["chatbot", "productivity"],
        pros: [
            "Access to multiple AI models in one platform",
            "Custom bot creation for specific needs",
            "Free tier with broad model access",
            "Supports Claude and DeepSeek models"
        ],
        cons: [
            "Limited advanced features in free tier",
            "Less focus on standalone capabilities",
            "Subscription costs can add up for heavy users"
        ]
    },
    {
        id: "characterai_character",
        rating: "7/10",
        name: "Character.AI",
        description: "A platform for creating and interacting with customizable AI characters, ideal for entertainment and role-playing scenarios.",
        image: "/assets/img/ai-apps/ai-character-ai.webp",
        logo: "https://character.ai/images/logo.svg",
        companyName: "Character.AI",
        companyLink: "https://character.ai",
        companyLogo: "https://character.ai/images/company-logo.svg",
        link: "https://character.ai",
        pricing: "Free, premium plans available",
        types: ["chatbot", "entertainment"],
        pros: [
            "Highly customizable AI characters",
            "Engaging for role-playing and storytelling",
            "Free tier with robust functionality",
            "Popular for creative and casual use"
        ],
        cons: [
            "Limited to entertainment-focused use cases",
            "Less suited for professional or technical tasks",
            "Premium features require subscription"
        ]
    },
    {
        id: "midjourney_midjourney",
        rating: "9/10",
        name: "Midjourney",
        description: "A leading AI image generation tool known for high-quality, artistic visuals, accessible via Discord or web.",
        image: "/assets/img/ai-apps/ai-midjourney.webp",
        logo: "https://www.midjourney.com/images/logo.svg",
        companyName: "Midjourney",
        companyLink: "https://www.midjourney.com",
        companyLogo: "https://www.midjourney.com/images/company-logo.svg",
        link: "https://www.midjourney.com",
        pricing: "$10/mo basic plan, up to $120/mo for Pro",
        types: ["image-generation", "creative"],
        pros: [
            "Exceptional aesthetic quality for images",
            "Rapid iteration for creative workflows",
            "Supports professional-grade artwork",
            "Active community on Discord"
        ],
        cons: [
            "Requires Discord or web subscription",
            "Steep learning curve for prompt engineering",
            "No free tier for new users"
        ]
    },
    {
        id: "openai_dalle",
        rating: "8.5/10",
        name: "DALL·E",
        description: "OpenAI's image generation tool integrated with ChatGPT, creating detailed images from text prompts with inpainting support.",
        image: "/assets/img/ai-apps/ai-openai-dalle.avif",
        logo: "https://www.openai.com/images/dalle-logo.svg",
        companyName: "OpenAI",
        companyLink: "https://openai.com",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenAI_Logo.svg",
        link: "https://chat.openai.com",
        pricing: "Free with ChatGPT, $20/mo for Plus features",
        types: ["image-generation", "creative"],
        pros: [
            "Integrated with ChatGPT for seamless use",
            "High-quality image generation and inpainting",
            "Supports creative marketing assets",
            "Accessible via ChatGPT Plus"
        ],
        cons: [
            "Advanced features require ChatGPT Plus",
            "Limited standalone functionality",
            "Dependent on OpenAI ecosystem"
        ]
    },
    {
        id: "seaart_seaart",
        rating: "7.5/10",
        name: "SeaArt",
        description: "An AI-powered art creation tool focused on user-friendly design for hobbyists and small-scale creative projects.",
        image: "/assets/img/ai-apps/ai-seaartai.png",
        logo: "https://www.seaart.ai/images/logo.svg",
        companyName: "SeaArt",
        companyLink: "https://www.seaart.ai",
        companyLogo: "https://www.seaart.ai/images/company-logo.svg",
        link: "https://www.seaart.ai",
        pricing: "Free tier, premium plans from $10/mo",
        types: ["image-generation", "creative"],
        pros: [
            "User-friendly interface for beginners",
            "Affordable premium plans",
            "Good for hobbyist art projects",
            "Supports multiple art styles"
        ],
        cons: [
            "Less advanced than Midjourney or DALL·E",
            "Limited professional-grade output",
            "Smaller community and resources"
        ]
    },
    {
        id: "leonardoai_leonardo",
        rating: "8/10",
        name: "Leonardo.AI",
        description: "A creative AI platform for generating production-quality visual assets, ideal for game developers and designers.",
        image: "/assets/img/ai-apps/ai-leonardo-ai-logo.jpg",
        logo: "https://leonardo.ai/images/logo.svg",
        companyName: "Leonardo.AI",
        companyLink: "https://leonardo.ai",
        companyLogo: "https://leonardo.ai/images/company-logo.svg",
        link: "https://leonardo.ai",
        pricing: "Free tier, premium from $12/mo",
        types: ["image-generation", "creative"],
        pros: [
            "High-quality assets for game development",
            "Customizable for specific design needs",
            "Free tier with decent functionality",
            "Fast generation for professional use"
        ],
        cons: [
            "Premium features needed for full access",
            "Can be complex for non-designers",
            "Limited non-visual capabilities"
        ]
    },
    {
        id: "playgroundai_playground",
        rating: "7.5/10",
        name: "Playground AI",
        description: "An accessible platform for image generation and editing, ideal for quick prototyping and casual creators.",
        image: "/assets/img/ai-apps/ai-playground.png",
        logo: "https://playgroundai.com/images/logo.svg",
        companyName: "Playground AI",
        companyLink: "https://playgroundai.com",
        companyLogo: "https://playgroundai.com/images/company-logo.svg",
        link: "https://playgroundai.com",
        pricing: "Free, Pro plan at $15/mo",
        types: ["image-generation", "creative"],
        pros: [
            "Easy-to-use for beginners",
            "Free tier with robust features",
            "Supports quick prototyping",
            "Good for casual creators"
        ],
        cons: [
            "Less advanced than Midjourney",
            "Limited high-end output quality",
            "Fewer professional use cases"
        ]
    },
    {
        id: "runway_runway",
        rating: "8.5/10",
        name: "Runway",
        description: "A comprehensive AI video editing suite supporting text-to-video, image editing, and advanced creative tools for filmmakers.",
        image: "/assets/img/ai-apps/ai-runway.webp",
        logo: "https://runwayml.com/images/logo.svg",
        companyName: "Runway",
        companyLink: "https://runwayml.com",
        companyLogo: "https://runwayml.com/images/company-logo.svg",
        link: "https://runwayml.com",
        pricing: "Free tier, Pro plan from $15/mo",
        types: ["video-generation", "video-editing", "creative"],
        pros: [
            "Powerful text-to-video generation",
            "Advanced editing tools for professionals",
            "Supports multiple creative workflows",
            "Free tier with usable features"
        ],
        cons: [
            "Steep learning curve for beginners",
            "Premium features required for full access",
            "Resource-intensive for complex projects"
        ]
    },
    {
        id: "synthesia_synthesia",
        rating: "8/10",
        name: "Synthesia",
        description: "An AI video creation platform with avatars, supporting multiple languages for corporate training and marketing videos.",
        image: "/assets/img/ai-apps/ai-synthesia.webp",
        logo: "https://www.synthesia.io/images/logo.svg",
        companyName: "Synthesia",
        companyLink: "https://www.synthesia.io",
        companyLogo: "https://www.synthesia.io/images/company-logo.svg",
        link: "https://www.synthesia.io",
        pricing: "From $22/mo, enterprise plans available",
        types: ["video-generation", "communication"],
        pros: [
            "High-quality AI avatars for videos",
            "Supports multiple languages",
            "Ideal for training and marketing",
            "User-friendly interface"
        ],
        cons: [
            "Higher starting price point",
            "Limited free tier functionality",
            "Less suited for non-video tasks"
        ]
    },
    {
        id: "pikalabs_pika",
        rating: "7.5/10",
        name: "Pika Labs",
        description: "An AI-powered video generation tool creating short, creative videos from text prompts, ideal for social media content.",
        image: "/assets/img/ai-apps/ai-pikalabs.png",
        logo: "https://pika.art/images/logo.svg",
        companyName: "Pika Labs",
        companyLink: "https://pika.art",
        companyLogo: "https://pika.art/images/company-logo.svg",
        link: "https://pika.art",
        pricing: "Free tier, premium from $8/mo",
        types: ["video-generation", "creative"],
        pros: [
            "Fast video generation from text",
            "Great for social media content",
            "Affordable premium plans",
            "Creative and fun outputs"
        ],
        cons: [
            "Limited to short video formats",
            "Less advanced editing features",
            "Free tier has usage limits"
        ]
    },
    {
        id: "viggle_viggle",
        rating: "7/10",
        name: "Viggle",
        description: "An AI tool for character animation, enabling dynamic video effects for animators and social media creators.",
        image: "/assets/img/ai-apps/ai-viggle.jpeg",
        logo: "https://viggle.ai/images/logo.svg",
        companyName: "Viggle",
        companyLink: "https://viggle.ai",
        companyLogo: "https://viggle.ai/images/company-logo.svg",
        link: "https://viggle.ai",
        pricing: "Free tier, premium from $10/mo",
        types: ["video-generation", "animation"],
        pros: [
            "Dynamic character animation effects",
            "Easy to use for social media creators",
            "Affordable pricing structure",
            "Free tier available"
        ],
        cons: [
            "Limited to animation-focused use cases",
            "Less versatile than Runway",
            "Premium features needed for advanced use"
        ]
    },
    {
        id: "opusclip_opusclip",
        rating: "7.5/10",
        name: "OpusClip",
        description: "An AI-driven video clipping tool that generates short clips from longer content, ideal for social media marketing.",
        image: "/assets/img/ai-apps/ai-opus-clip.png",
        logo: "https://www.opus.pro/images/logo.svg",
        companyName: "OpusClip",
        companyLink: "https://www.opus.pro",
        companyLogo: "https://www.opus.pro/images/company-logo.svg",
        link: "https://www.opus.pro",
        pricing: "Free tier, Pro plan from $19/mo",
        types: ["video-editing", "social-media"],
        pros: [
            "Automates short clip creation",
            "Ideal for social media repurposing",
            "User-friendly for non-editors",
            "Free tier with decent features"
        ],
        cons: [
            "Limited to clip generation",
            "Less robust than Runway for editing",
            "Pro plan needed for high-volume use"
        ]
    },
    {
        id: "suno_suno",
        rating: "8/10",
        name: "Suno",
        description: "An AI music generation platform that creates original music from text prompts, popular for musicians and content creators.",
        image: "/assets/img/ai-apps/ai-suno.png",
        logo: "https://www.suno.ai/images/logo.svg",
        companyName: "Suno",
        companyLink: "https://www.suno.ai",
        companyLogo: "https://www.suno.ai/images/company-logo.svg",
        link: "https://www.suno.ai",
        pricing: "Free tier, Pro plan from $10/mo",
        types: ["music-generation", "creative"],
        pros: [
            "High-quality music generation",
            "Supports various genres",
            "Easy for non-musicians to use",
            "Active community for sharing"
        ],
        cons: [
            "Limited to music creation",
            "Premium features for advanced use",
            "May require prompt tweaking"
        ]
    },
    {
        id: "udio_udio",
        rating: "7.5/10",
        name: "Udio",
        description: "An AI-powered music creation tool generating high-quality tracks across genres, suitable for quick music production.",
        image: "/assets/img/ai-apps/ai-udio-logo.jpg",
        logo: "https://www.udio.com/images/logo.svg",
        companyName: "Udio",
        companyLink: "https://www.udio.com",
        companyLogo: "https://www.udio.com/images/company-logo.svg",
        link: "https://www.udio.com",
        pricing: "Free tier, premium from $10/mo",
        types: ["music-generation", "creative"],
        pros: [
            "High-quality music output",
            "Supports multiple genres",
            "Fast track creation process",
            "Accessible for beginners"
        ],
        cons: [
            "Less versatile than Suno",
            "Premium plan for full access",
            "Limited non-music features"
        ]
    },
    {
        id: "aiva_aiva",
        rating: "8/10",
        name: "AIVA",
        description: "An AI music generation assistant that creates original compositions in over 250 styles, ideal for films, games, and content creators.",
        image: "/assets/img/ai-apps/ai-aiva.webp",
        logo: "https://www.aiva.ai/images/logo.svg",
        companyName: "AIVA",
        companyLink: "https://www.aiva.ai",
        companyLogo: "https://www.aiva.ai/images/company-logo.svg",
        link: "https://www.aiva.ai",
        pricing: "Free tier (3 downloads/mo), Standard €11/mo, Pro €33/mo",
        types: ["music-generation", "creative"],
        pros: [
            "Generates music in 250+ styles",
            "Full copyright ownership with Pro plan",
            "User-friendly for beginners and pros",
            "Supports MP3, MIDI, and WAV formats"
        ],
        cons: [
            "Limited emotional depth vs. human composers",
            "Free tier restricts commercial use",
            "Pro plan costly for casual users"
        ]
    },
    {
        id: "mubert_mubert",
        rating: "8.5/10",
        name: "Mubert",
        description: "An AI-powered music ecosystem generating real-time, royalty-free tracks for content creators, brands, and developers.",
        image: "/assets/img/ai-apps/ai-mubert.jpeg",
        logo: "https://mubert.com/images/logo.svg",
        companyName: "Mubert",
        companyLink: "https://mubert.com",
        companyLogo: "https://mubert.com/images/company-logo.svg",
        link: "https://mubert.com",
        pricing: "Free tier, paid plans from $11.69/mo",
        types: ["music-generation", "creative", "automation"],
        pros: [
            "Real-time personalized music generation",
            "Vast library of royalty-free tracks",
            "Seamless integration with Adobe tools",
            "User-friendly for non-musicians"
        ],
        cons: [
            "Complex interface for beginners",
            "Free tier limits track quality",
            "Less focus on niche genres"
        ]
    },
    {
        id: "tidal_redwood",
        rating: "7.5/10",
        name: "Tidal",
        description: "An enterprise workload automation platform by Redwood, leveraging AI to orchestrate and optimize business processes.",
        image: "/assets/img/ai-apps/ai-tidal-redwood.jpeg",
        logo: "https://www.redwood.com/images/tidal-logo.svg",
        companyName: "Redwood",
        companyLink: "https://www.redwood.com",
        companyLogo: "https://www.redwood.com/images/company-logo.svg",
        link: "https://www.redwood.com/tidal",
        pricing: "Contact for pricing",
        types: ["automation", "productivity"],
        pros: [
            "Robust workload orchestration",
            "AI-driven process optimization",
            "Scalable for enterprise needs",
            "Strong support for IT automation"
        ],
        cons: [
            "Opaque pricing model",
            "Steep learning curve for new users",
            "Limited focus on non-enterprise use"
        ]
    },
    // {
    //     id: "amper_amper",
    //     rating: "7/10",
    //     name: "Amper",
    //     description: "An AI-driven music generation platform for creating custom, royalty-free tracks tailored to specific moods and styles.",
    //     image: "/assets/img/ai-apps/ai-amper.jpg",
    //     logo: "https://www.ampermusic.com/images/logo.svg",
    //     companyName: "Amper Music",
    //     companyLink: "https://www.ampermusic.com",
    //     companyLogo: "https://www.ampermusic.com/images/company-logo.svg",
    //     link: "https://www.ampermusic.com",
    //     pricing: "Free trial, paid plans from $199/yr",
    //     types: ["music-generation", "creative"],
    //     pros: [
    //         "Intuitive interface for non-musicians",
    //         "Customizable tracks for various projects",
    //         "Royalty-free music for commercial use",
    //         "Rapid music creation process"
    //     ],
    //     cons: [
    //         "Less popular than AIVA or Mubert",
    //         "Resource-intensive for complex tracks",
    //         "Limited style diversity"
    //     ]
    // },
    {
        id: "boomy_boomy",
        rating: "7/10",
        name: "Boomy",
        description: "An AI music composition platform for creating tracks without expertise, ideal for beginners and casual creators.",
        image: "/assets/img/ai-apps/ai-boomy.webp",
        logo: "https://boomy.com/images/logo.svg",
        companyName: "Boomy",
        companyLink: "https://boomy.com",
        companyLogo: "https://boomy.com/images/company-logo.svg",
        link: "https://boomy.com",
        pricing: "Free, premium plans from $9.99/mo",
        types: ["music-generation", "creative"],
        pros: [
            "Simple interface for beginners",
            "Quick music composition",
            "Free tier with basic features",
            "Good for casual creators"
        ],
        cons: [
            "Less advanced than Suno or Udio",
            "Limited genre variety",
            "Premium required for distribution"
        ]
    },
    {
        id: "grammarly_grammarly",
        rating: "8.5/10",
        name: "Grammarly",
        description: "An AI writing assistant for grammar, style, and clarity, essential for professional and academic writing.",
        image: "/assets/img/ai-apps/ai-grammarly.png",
        logo: "https://www.grammarly.com/images/logo.svg",
        companyName: "Grammarly",
        companyLink: "https://www.grammarly.com",
        companyLogo: "https://www.grammarly.com/images/company-logo.svg",
        link: "https://www.grammarly.com",
        pricing: "Free, Premium from $12/mo",
        types: ["writing", "productivity", "education"],
        pros: [
            "Accurate grammar and style corrections",
            "Integrates with multiple platforms",
            "Real-time writing suggestions",
            "Free tier with robust features"
        ],
        cons: [
            "Premium required for advanced features",
            "Occasional overzealous suggestions",
            "Limited creative writing support"
        ]
    },
    {
        id: "wordtune_wordtune",
        rating: "8/10",
        name: "Wordtune",
        description: "An AI-powered writing companion for refining tone and style, great for emails and polished content.",
        image: "/assets/img/ai-apps/ai-wordtune.webp",
        logo: "https://www.wordtune.com/images/logo.svg",
        companyName: "Wordtune",
        companyLink: "https://www.wordtune.com",
        companyLogo: "https://www.wordtune.com/images/company-logo.svg",
        link: "https://www.wordtune.com",
        pricing: "Free, Premium from $9.99/mo",
        types: ["writing", "productivity"],
        pros: [
            "Excellent tone and style adjustments",
            "User-friendly for quick edits",
            "Supports multiple languages",
            "Affordable premium plans"
        ],
        cons: [
            "Less robust for long-form content",
            "Premium needed for full features",
            "Limited integration options"
        ]
    },
    {
        id: "sudowrite_sudowrite",
        rating: "8/10",
        name: "Sudowrite",
        description: "A creative writing assistant focused on fiction, helping with brainstorming, descriptions, and narrative development.",
        image: "/assets/img/ai-apps/ai-sudowrite.png",
        logo: "https://www.sudowrite.com/images/logo.svg",
        companyName: "Sudowrite",
        companyLink: "https://www.sudowrite.com",
        companyLogo: "https://www.sudowrite.com/images/company-logo.svg",
        link: "https://www.sudowrite.com",
        pricing: "From $19/mo, no free tier",
        types: ["writing", "creative"],
        pros: [
            "Excellent for fiction writing",
            "Tools for brainstorming and descriptions",
            "Enhances narrative pacing and dialogue",
            "Great for overcoming writer's block"
        ],
        cons: [
            "No free tier available",
            "Limited to fiction-focused use cases",
            "Higher starting price point"
        ]
    },
    {
        id: "rytr_rytr",
        rating: "7.5/10",
        name: "Rytr",
        description: "An AI content generation tool for short-form content like social media posts and emails, with pre-designed templates.",
        image: "/assets/img/ai-apps/ai-rytr.png",
        logo: "https://rytr.me/images/logo.svg",
        companyName: "Rytr",
        companyLink: "https://rytr.me",
        companyLogo: "https://rytr.me/images/company-logo.svg",
        link: "https://rytr.me",
        pricing: "Free, Premium from $9/mo",
        types: ["writing", "social-media", "productivity"],
        pros: [
            "Over 40 pre-designed templates",
            "Built-in plagiarism checker",
            "Supports 30+ languages",
            "Fast for short-form content"
        ],
        cons: [
            "Struggles with long-form content",
            "Premium needed for advanced features",
            "Less versatile than ChatGPT"
        ]
    },
    {
        id: "notion_notionai",
        rating: "8/10",
        name: "Notion AI",
        description: "An AI-enhanced note-taking and organization tool for summarization, task management, and knowledge bases.",
        image: "/assets/img/ai-apps/ai-notion.webp",
        logo: "https://www.notion.so/images/notion-ai-logo.svg",
        companyName: "Notion",
        companyLink: "https://www.notion.so",
        companyLogo: "https://www.notion.so/images/notion-logo.svg",
        link: "https://www.notion.so/product/ai",
        pricing: "Free with Notion, $10/mo for AI features",
        types: ["productivity", "writing", "organization"],
        pros: [
            "Seamless integration with Notion",
            "Powerful summarization and organization",
            "Great for project management",
            "Enhances note-taking workflows"
        ],
        cons: [
            "AI features require additional cost",
            "Limited outside Notion ecosystem",
            "Not a standalone AI tool"
        ]
    },
    {
        id: "google_notebooklm",
        rating: "7.5/10",
        name: "NotebookLM",
        description: "An AI-powered research assistant for summarizing and organizing notes, ideal for students and researchers.",
        image: "/assets/img/ai-apps/ai-notebooklm.png",
        logo: "https://www.google.com/images/notebooklm-logo.svg",
        companyName: "Google",
        companyLink: "https://www.google.com",
        companyLogo: "https://www.google.com/images/google-logo.svg",
        link: "https://notebooklm.google.com",
        pricing: "Free, Premium at $19.99/mo",
        types: ["research", "education", "productivity"],
        pros: [
            "Free tier with up to 100 notebooks",
            "Summarizes complex research materials",
            "Supports up to 50 sources per notebook",
            "Free premium for .edu users"
        ],
        cons: [
            "Limited to research and note-taking",
            "Premium required for advanced features",
            "Less versatile than general-purpose AIs"
        ]
    },
    {
        id: "photomath_photomath",
        rating: "7.5/10",
        name: "PhotoMath",
        description: "An AI math problem solver using image recognition, ideal for students and educators tackling mathematical challenges.",
        image: "/assets/img/ai-apps/ai-photomath.png",
        logo: "https://photomath.com/images/logo.svg",
        companyName: "PhotoMath",
        companyLink: "https://photomath.com",
        companyLogo: "https://photomath.com/images/company-logo.svg",
        link: "https://photomath.com",
        pricing: "Free, Plus plan from $9.99/mo",
        types: ["education", "math"],
        pros: [
            "Accurate math problem solving",
            "Image recognition for easy input",
            "Step-by-step explanations",
            "Great for students and educators"
        ],
        cons: [
            "Limited to math-related tasks",
            "Premium required for advanced features",
            "Less versatile for general use"
        ]
    },
    {
        id: "deepresearch_deepresearch",
        rating: "7/10",
        name: "Deep Research",
        description: "An AI-driven research tool likely tied to ChatGPT, excelling at analyzing comprehensive sources for in-depth insights.",
        image: "/assets/img/ai-apps/ai-openai-deepresearch.webp",
        logo: "https://www.openai.com/images/deepresearch-logo.svg",
        companyName: "OpenAI",
        companyLink: "https://openai.com",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenAI_Logo.svg",
        link: "https://chat.openai.com",
        pricing: "Included with ChatGPT Plus ($20/mo)",
        types: ["research", "education"],
        pros: [
            "Analyzes comprehensive sources",
            "Integrated with ChatGPT ecosystem",
            "Ideal for in-depth research tasks",
            "High-quality insights"
        ],
        cons: [
            "Requires ChatGPT Plus subscription",
            "Limited standalone functionality",
            "Less citation-focused than Perplexity"
        ]
    },
    {
        id: "fathom_fathom",
        rating: "7.5/10",
        name: "Fathom",
        description: "An AI meeting summarizer that generates actionable insights, ideal for professionals and teams.",
        image: "/assets/img/ai-apps/ai-fathom.png",
        logo: "https://www.fathom.video/images/logo.svg",
        companyName: "Fathom",
        companyLink: "https://www.fathom.video",
        companyLogo: "https://www.fathom.video/images/company-logo.svg",
        link: "https://www.fathom.video",
        pricing: "Free tier, Pro plan from $15/mo",
        types: ["productivity", "meetings"],
        pros: [
            "Accurate meeting summaries",
            "Generates actionable insights",
            "Integrates with video conferencing",
            "Free tier with basic features"
        ],
        cons: [
            "Limited to meeting-related tasks",
            "Premium required for advanced features",
            "Less versatile for general use"
        ]
    },
    {
        id: "zapier_zapier",
        rating: "8/10",
        name: "Zapier",
        description: "A workflow automation platform connecting apps to streamline repetitive tasks, enhanced with AI capabilities.",
        image: "/assets/img/ai-apps/ai-zapier.png",
        logo: "https://www.zapier.com/images/logo.svg",
        companyName: "Zapier",
        companyLink: "https://www.zapier.com",
        companyLogo: "https://www.zapier.com/images/company-logo.svg",
        link: "https://www.zapier.com",
        pricing: "Free, Pro plan from $19.99/mo",
        types: ["productivity", "automation"],
        pros: [
            "Connects thousands of apps",
            "Streamlines repetitive tasks",
            "AI-enhanced automation features",
            "Free tier with basic functionality"
        ],
        cons: [
            "Complex setup for advanced workflows",
            "Premium required for full features",
            "Learning curve for non-technical users"
        ]
    },
    {
        id: "n8n_n8n",
        rating: "7.5/10",
        name: "n8n",
        description: "An open-source automation platform for custom workflows, ideal for developers and tech-savvy users.",
        image: "/assets/img/ai-apps/ai-n8n.png",
        logo: "https://n8n.io/images/logo.svg",
        companyName: "n8n",
        companyLink: "https://n8n.io",
        companyLogo: "https://n8n.io/images/company-logo.svg",
        link: "https://n8n.io",
        pricing: "Free (open-source), hosted plans from $20/mo",
        types: ["automation", "productivity"],
        pros: [
            "Open-source for full customization",
            "Flexible for complex workflows",
            "Strong developer community",
            "Free self-hosted option"
        ],
        cons: [
            "Requires technical expertise",
            "Hosted plans can be costly",
            "Less user-friendly for beginners"
        ]
    },
    {
        id: "reclaimai_reclaim",
        rating: "7.5/10",
        name: "Reclaim AI",
        description: "An AI-powered calendar assistant optimizing schedules for busy professionals.",
        image: "/assets/img/ai-apps/ai-reclaim.png",
        logo: "https://reclaim.ai/images/logo.svg",
        companyName: "Reclaim AI",
        companyLink: "https://reclaim.ai",
        companyLogo: "https://reclaim.ai/images/company-logo.svg",
        link: "https://reclaim.ai",
        pricing: "Free tier, Pro plan from $8/mo",
        types: ["productivity", "scheduling"],
        pros: [
            "Optimizes calendar scheduling",
            "Integrates with major calendar apps",
            "Affordable pricing structure",
            "Free tier with basic features"
        ],
        cons: [
            "Limited to scheduling tasks",
            "Premium required for advanced features",
            "Less versatile for general automation"
        ]
    },
    {
        id: "replika_replika",
        rating: "7/10",
        name: "Replika",
        description: "An AI companion chatbot for personal conversations, ideal for emotional support and casual chats.",
        image: "/assets/img/ai-apps/ai-replika.png",
        logo: "https://replika.ai/images/logo.svg",
        companyName: "Replika",
        companyLink: "https://replika.ai",
        companyLogo: "https://replika.ai/images/company-logo.svg",
        link: "https://replika.ai",
        pricing: "Free, Pro plan from $7.99/mo",
        types: ["chatbot", "communication"],
        pros: [
            "Empathetic conversational partner",
            "Customizable user experience",
            "Free tier with decent functionality",
            "Great for casual and emotional chats"
        ],
        cons: [
            "Limited to personal use cases",
            "Premium required for advanced features",
            "Not suited for professional tasks"
        ]
    },
    {
        id: "nomi_nomi",
        rating: "7/10",
        name: "Nomi",
        description: "A personal AI friend focused on empathetic interactions for conversational companionship.",
        image: "/assets/img/ai-apps/ai-nomi.png",
        logo: "https://nomi.ai/images/logo.svg",
        companyName: "Nomi",
        companyLink: "https://nomi.ai",
        companyLogo: "https://nomi.ai/images/company-logo.svg",
        link: "https://nomi.ai",
        pricing: "Free tier, premium from $9.99/mo",
        types: ["chatbot", "communication"],
        pros: [
            "Empathetic and engaging conversations",
            "Customizable AI companion",
            "Free tier with basic features",
            "Ideal for personal interaction"
        ],
        cons: [
            "Limited to conversational use cases",
            "Premium required for full features",
            "Less suited for professional tasks"
        ]
    },
    {
        id: "heygen_heygen",
        rating: "7.5/10",
        name: "HeyGen",
        description: "An AI-generated video avatar platform for presentations and communication, ideal for marketing and virtual events.",
        image: "/assets/img/ai-apps/ai-heygen.jpg",
        logo: "https://www.heygen.com/images/logo.svg",
        companyName: "HeyGen",
        companyLink: "https://www.heygen.com",
        companyLogo: "https://www.heygen.com/images/company-logo.svg",
        link: "https://www.heygen.com",
        pricing: "Free tier, Pro plan from $29/mo",
        types: ["video-generation", "communication"],
        pros: [
            "High-quality AI video avatars",
            "Supports marketing and presentations",
            "User-friendly for non-editors",
            "Free tier available"
        ],
        cons: [
            "Higher pricing for advanced features",
            "Limited to video avatar use cases",
            "Less versatile than Synthesia"
        ]
    },
    {
        id: "lovable_lovable",
        rating: "8/10",
        name: "Lovable",
        description: "An AI-powered platform that transforms natural language prompts into full-stack web applications, enabling rapid prototyping and deployment without coding expertise.",
        image: "/assets/img/ai-apps/ai-lovable.png",
        logo: "https://lovable.dev/images/logo.svg",
        companyName: "Lovable",
        companyLink: "https://lovable.dev",
        companyLogo: "https://lovable.dev/images/company-logo.svg",
        link: "https://lovable.dev",
        pricing: "Free tier (5 messages/day), Pro plan from $25/mo",
        types: ["developer-tools", "full-stack", "automation"],
        pros: [
            "Rapid app generation from text prompts",
            "Seamless Supabase and GitHub integration",
            "No-code friendly for non-developers",
            "One-click deployment and real-time previews"
        ],
        cons: [
            "Security vulnerabilities in generated apps",
            "Limited free tier message cap",
            "Complex projects may require manual coding"
        ]
    },
    {
        id: "vercel_v0",
        rating: "8/10",
        name: "v0",
        description: "An AI-powered UI generator by Vercel that creates React components with Tailwind CSS and shadcn/ui from natural language prompts, ideal for rapid front-end prototyping.",
        image: "/assets/img/ai-apps/ai-vercel-v0.png",
        logo: "https://v0.dev/images/logo.svg",
        companyName: "Vercel",
        companyLink: "https://vercel.com",
        companyLogo: "https://vercel.com/images/vercel-logo.svg",
        link: "https://v0.dev",
        pricing: "Free (200 credits/mo), $20/mo for Pro (private generations, custom themes)",
        types: ["developer-tools", "ui-generation", "frontend"],
        pros: [
            "Rapid UI prototyping with React and Tailwind",
            "Seamless integration with Next.js and shadcn/ui",
            "Real-time collaboration and version control",
            "Supports animations via Framer Motion"
        ],
        cons: [
            "Primarily focused on front-end, limited back-end support",
            "May require React knowledge for customization",
            "Occasional errors in complex UI generation"
        ]
    },
    {
        id: "stackblitz_boltnew",
        rating: "8.5/10",
        name: "Bolt.new",
        description: "An AI-driven full-stack development platform by StackBlitz, offering code generation, real-time debugging, and one-click deployment for rapid app development.",
        image: "/assets/img/ai-apps/ai-boltnew.png",
        logo: "https://bolt.new/images/logo.svg",
        companyName: "StackBlitz",
        companyLink: "https://stackblitz.com",
        companyLogo: "https://stackblitz.com/images/stackblitz-logo.svg",
        link: "https://bolt.new",
        pricing: "Free (150K tokens/day), $20/mo for 10M tokens, up to $200/mo for 120M tokens",
        types: ["developer-tools", "full-stack", "automation"],
        pros: [
            "Full-stack code generation with Supabase integration",
            "One-click deployment to Netlify",
            "Real-time error detection and fixes",
            "Supports multiple frameworks (Next.js, Svelte, Vue)"
        ],
        cons: [
            "Less robust security for hosted apps",
            "Limited flexibility outside supported frameworks",
            "Network dependency may impact performance"
        ]
    },
    {
        id: "github_copilot",
        rating: "8.5/10",
        name: "GitHub Copilot",
        description: "An AI code completion tool powered by OpenAI, accelerating software development with real-time suggestions.",
        image: "/assets/img/ai-apps/ai-microsoft-githubcopilot.svg",
        logo: "https://copilot.github.com/images/logo.svg",
        companyName: "GitHub",
        companyLink: "https://github.com",
        companyLogo: "https://github.com/images/github-logo.svg",
        link: "https://copilot.github.com",
        pricing: "Free for open-source, $10/mo for individuals",
        types: ["coding", "developer-tools"],
        pros: [
            "Seamless IDE integration",
            "High-quality code suggestions",
            "Supports multiple programming languages",
            "Free for open-source contributors"
        ],
        cons: [
            "Subscription required for full access",
            "Occasional irrelevant suggestions",
            "Dependent on OpenAI models"
        ]
    },
    {
        id: "codeium_codeium",
        rating: "8/10",
        name: "Codeium",
        description: "An AI-powered code assistant for autocompletion and suggestions, supporting multiple languages for developers.",
        image: "/assets/img/ai-apps/ai-codeium.png",
        logo: "https://codeium.com/images/logo.svg",
        companyName: "Codeium",
        companyLink: "https://codeium.com",
        companyLogo: "https://codeium.com/images/company-logo.svg",
        link: "https://codeium.com",
        pricing: "Free, Enterprise plans available",
        types: ["coding", "developer-tools"],
        pros: [
            "Free tier with robust features",
            "Supports multiple programming languages",
            "Fast and accurate code suggestions",
            "Good for individual developers"
        ],
        cons: [
            "Enterprise features require custom pricing",
            "Less integrated than Copilot",
            "Occasional suggestion latency"
        ]
    },
    {
        id: "tabnine_tabnine",
        rating: "7.5/10",
        name: "Tabnine",
        description: "An AI code completion platform with a focus on privacy, ideal for enterprise development environments.",
        image: "/assets/img/ai-apps/ai-tabnine.png",
        logo: "https://www.tabnine.com/images/logo.svg",
        companyName: "Tabnine",
        companyLink: "https://www.tabnine.com",
        companyLogo: "https://www.tabnine.com/images/company-logo.svg",
        link: "https://www.tabnine.com",
        pricing: "Free, Pro plan from $12/mo",
        types: ["coding", "developer-tools"],
        pros: [
            "Strong focus on privacy",
            "Supports multiple IDEs",
            "Accurate code completions",
            "Free tier for basic use"
        ],
        cons: [
            "Premium required for advanced features",
            "Less popular than Copilot",
            "Can be slower for complex projects"
        ]
    },
    {
        id: "lumaai_luma",
        rating: "7.5/10",
        name: "Luma AI",
        description: "An AI platform for generating 3D content, supporting design and visualization for game developers and architects.",
        image: "/assets/img/ai-apps/ai-luma.png",
        logo: "https://luma.ai/images/logo.svg",
        companyName: "Luma AI",
        companyLink: "https://luma.ai",
        companyLogo: "https://luma.ai/images/company-logo.svg",
        link: "https://luma.ai",
        pricing: "Free tier, Pro plan from $20/mo",
        types: ["3d-content", "creative"],
        pros: [
            "High-quality 3D content generation",
            "Ideal for game design and architecture",
            "Free tier with basic features",
            "Supports creative visualization"
        ],
        cons: [
            "Limited to 3D content use cases",
            "Premium required for advanced features",
            "Steep learning curve for beginners"
        ]
    },
    {
        id: "promethean_promethean",
        rating: "8/10",
        name: "Promethean AI",
        description: "An AI assistant for creating 3D virtual worlds and managing digital assets, using natural language to generate high-quality environments for games and simulations.",
        image: "/assets/img/ai-apps/ai-promethean.png",
        logo: "https://www.prometheanai.com/images/logo.svg",
        companyName: "Promethean AI",
        companyLink: "https://www.prometheanai.com",
        companyLogo: "https://www.prometheanai.com/images/company-logo.svg",
        link: "https://www.prometheanai.com",
        pricing: "Free for non-commercial use, Indie $55/yr, Pro $500/yr",
        types: ["3d-content", "creative", "developer-tools"],
        pros: [
            "Generates 3D environments from text prompts",
            "Integrates with Maya, Unity, and Blender",
            "Automates repetitive asset creation tasks",
            "Trusted by studios like PlayStation Studios"
        ],
        cons: [
            "Complex setup for beginners",
            "Pro plan expensive for solo developers",
            "Limited customization in free tier"
        ]
    },
    {
        id: "ludo_ludo",
        rating: "8.5/10",
        name: "Ludo.ai",
        description: "An AI-powered platform for game ideation and 3D asset generation, enabling rapid creation of game concepts, characters, and art from text prompts.",
        image: "/assets/img/ai-apps/ai-ludo.png",
        logo: "https://ludo.ai/images/logo.svg",
        companyName: "JetPlay",
        companyLink: "https://ludo.ai",
        companyLogo: "https://ludo.ai/images/company-logo.svg",
        link: "https://ludo.ai",
        pricing: "Free Starter plan, Indie $15/mo, Studio $250/mo",
        types: ["3d-content", "creative", "developer-tools", "automation"],
        pros: [
            "Generates 3D models and concept art from text",
            "Market analysis for game trends",
            "Real-time collaboration for teams",
            "Over 8,000 users with mobile-friendly access"
        ],
        cons: [
            "Potential for generic game concepts",
            "High cost for Studio plan",
            "Image generation quality varies"
        ]
    },
    {
        id: "inworld_inworld",
        rating: "8/10",
        name: "Inworld AI",
        description: "An AI platform specializing in realistic 3D characters and NPCs for games, with dynamic dialogue and contextual awareness for immersive storytelling.",
        image: "/assets/img/ai-apps/ai-inworld.avif",
        logo: "https://www.inworld.ai/images/logo.svg",
        companyName: "Inworld AI",
        companyLink: "https://www.inworld.ai",
        companyLogo: "https://www.inworld.ai/images/company-logo.svg",
        link: "https://www.inworld.ai",
        pricing: "Free tier, Pro $20/mo, Enterprise custom",
        types: ["3d-content", "character-generation", "creative"],
        pros: [
            "Creates lifelike NPCs with natural dialogue",
            "Integrates with Unreal Engine and Unity",
            "Contextual awareness enhances immersion",
            "Ideal for indie and large studios"
        ],
        cons: [
            "Learning curve for fine-tuning characters",
            "Limited free tier functionality",
            "Requires technical knowledge for integration"
        ]
    },
    {
        id: "ludus_ludus",
        rating: "7.5/10",
        name: "Ludus AI",
        description: "An AI toolkit for Unreal Engine 5, enabling 3D object generation, C++ coding, and Blueprint optimization from text prompts for game and visualization development.",
        image: "/assets/img/ai-apps/ai-ludus.png",
        logo: "https://www.ludusai.io/images/logo.svg",
        companyName: "Ludus AI",
        companyLink: "https://www.ludusai.io",
        companyLogo: "https://www.ludusai.io/images/company-logo.svg",
        link: "https://www.ludusai.io",
        pricing: "Free tier, $20/mo subscription",
        types: ["3d-content", "developer-tools", "automation"],
        pros: [
            "Generates 3D objects from text descriptions",
            "Streamlines Unreal Engine workflows",
            "Supports C++ and Blueprint optimization",
            "Over 5,000 users with Visual Studio Code integration"
        ],
        cons: [
            "High credit consumption for complex tasks",
            "Concerns over training data transparency",
            "Early-stage product with occasional bugs"
        ]
    },
    {
        id: "layer_layer",
        rating: "8/10",
        name: "Layer AI",
        description: "An AI-powered visual asset generation platform that creates high-quality 2D and 3D game assets, streamlining workflows for developers and artists.",
        image: "/assets/img/ai-apps/ai-layer.webp",
        logo: "https://www.layer.ai/images/logo.svg",
        companyName: "Layer AI",
        companyLink: "https://www.layer.ai",
        companyLogo: "https://www.layer.ai/images/company-logo.svg",
        link: "https://www.layer.ai",
        pricing: "Free tier, Studio $30/mo, Enterprise custom",
        types: ["3d-content", "creative", "developer-tools"],
        pros: [
            "Generates style-consistent 2D and 3D assets",
            "Integrates with Unity and Unreal Engine",
            "Fast asset creation for game studios",
            "Supports professional-grade workflows"
        ],
        cons: [
            "Complex for beginners",
            "Limited customization for niche styles",
            "Enterprise pricing not transparent"
        ]
    },
    {
        id: "rosebud_rosebud",
        rating: "8.5/10",
        name: "Rosebud AI",
        description: "A generative AI platform for creating 2D and 3D games, enabling no-code development of immersive worlds, characters, and gameplay from text prompts.",
        image: "/assets/img/ai-apps/ai-rosebud.webp",
        logo: "https://rosebud.ai/images/logo.svg",
        companyName: "Rosebud AI",
        companyLink: "https://rosebud.ai",
        companyLogo: "https://rosebud.ai/images/company-logo.svg",
        link: "https://rosebud.ai",
        pricing: "Free tier, Premium $4.99/mo",
        types: ["3d-content", "creative", "developer-tools", "automation", "character-generation"],
        pros: [
            "No-code 2D and 3D game creation",
            "Generates assets, code, and narratives",
            "Community-driven with 7+ user-created games",
            "Recognized by Sequoia and Forbes"
        ],
        cons: [
            "Limited customization for complex games",
            "Integration with third-party platforms limited",
            "Potential learning curve for advanced features"
        ]
    },
    {
        id: "scenario_scenario",
        rating: "8/10",
        name: "Scenario",
        description: "An AI-powered platform for generating style-consistent 2D game assets, offering custom-trained models for artists and developers, with limited 3D support.",
        image: "/assets/img/ai-apps/ai-scenario.png",
        logo: "https://www.scenario.com/images/logo.svg",
        companyName: "Scenario",
        companyLink: "https://www.scenario.com",
        companyLogo: "https://www.scenario.com/images/company-logo.svg",
        link: "https://www.scenario.com",
        pricing: "Free Starter, Essential $29/mo, Pro $99/mo",
        types: ["creative", "developer-tools", "automation"],
        pros: [
            "Style-consistent 2D asset generation",
            "API-first integration with Unity and Discord",
            "Custom model training for unique art styles",
            "Real-time preview and editing tools"
        ],
        cons: [
            "No native 3D asset creation",
            "Interface not beginner-friendly",
            "Fine-tuning requires external editors"
        ]
    },
    {
        id: "descript_descript",
        rating: "8/10",
        name: "Descript",
        description: "An AI audio and video editing tool specializing in transcription and overdubbing, great for podcasters and video editors.",
        image: "/assets/img/ai-apps/ai-descript.png",
        logo: "https://www.descript.com/images/logo.svg",
        companyName: "Descript",
        companyLink: "https://www.descript.com",
        companyLogo: "https://www.descript.com/images/company-logo.svg",
        link: "https://www.descript.com",
        pricing: "Free tier, Pro plan from $12/mo",
        types: ["audio-editing", "video-editing", "creative"],
        pros: [
            "Accurate transcription and overdubbing",
            "User-friendly for podcasters",
            "Supports video and audio editing",
            "Free tier with basic features"
        ],
        cons: [
            "Premium required for advanced editing",
            "Less robust for complex video projects",
            "Limited non-media use cases"
        ]
    },
    {
        id: "runwayml_runwayml",
        rating: "8.5/10",
        name: "RunwayML",
        description: "A creative AI toolkit for multimedia projects, including video, image generation, and advanced editing for artists.",
        image: "/assets/img/ai-apps/ai-runway-ai.png",
        logo: "https://runwayml.com/images/logo.svg",
        companyName: "Runway",
        companyLink: "https://runwayml.com",
        companyLogo: "https://runwayml.com/images/company-logo.svg",
        link: "https://runwayml.com",
        pricing: "Free tier, Pro plan from $15/mo",
        types: ["video-generation", "image-generation", "creative"],
        pros: [
            "Versatile for multimedia projects",
            "High-quality video and image outputs",
            "Free tier with usable features",
            "Great for professional artists"
        ],
        cons: [
            "Complex for non-creatives",
            "Premium required for full access",
            "Resource-intensive for large projects"
        ]
    },
    {
        id: "canva_canvaai",
        rating: "8/10",
        name: "Canva AI",
        description: "An AI-enhanced design platform with templates and suggestions, ideal for marketers and non-designers.",
        image: "/assets/img/ai-apps/ai-canva-2.png",
        logo: "https://www.canva.com/images/logo.svg",
        companyName: "Canva",
        companyLink: "https://www.canva.com",
        companyLogo: "https://www.canva.com/images/company-logo.svg",
        link: "https://www.canva.com",
        pricing: "Free, Pro plan from $12.99/mo",
        types: ["graphic-design", "creative", "productivity"],
        pros: [
            "User-friendly for non-designers",
            "AI-driven templates and suggestions",
            "Wide range of design applications",
            "Free tier with robust features"
        ],
        cons: [
            "Premium required for advanced tools",
            "Less suited for professional designers",
            "Limited non-design functionality"
        ]
    },
    {
        id: "vistasocial_vistasocial",
        rating: "7.5/10",
        name: "Vista Social",
        description: "An AI-driven social media management tool for scheduling and analytics, ideal for social media marketers.",
        image: "/assets/img/ai-apps/ai-vista-social.png",
        logo: "https://vistasocial.com/images/logo.svg",
        companyName: "Vista Social",
        companyLink: "https://vistasocial.com",
        companyLogo: "https://vistasocial.com/images/company-logo.svg",
        link: "https://vistasocial.com",
        pricing: "Free tier, Pro plan from $15/mo",
        types: ["social-media", "productivity"],
        pros: [
            "AI-powered scheduling and analytics",
            "User-friendly for social media teams",
            "Supports multiple platforms",
            "Free tier with basic features"
        ],
        cons: [
            "Limited to social media use cases",
            "Premium required for advanced analytics",
            "Less robust than enterprise tools"
        ]
    },
    

];