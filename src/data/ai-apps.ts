import { AIApplicationSummary } from "@/types/ai-apps";

export const aiApplications: AIApplicationSummary[] = [
    {
        id: 'google_aistudio',
        rating: '9/10',
        name: 'Google AI Studio',
        link: 'https://aistudio.google.com/',
        description: "Google's official platform for building and testing AI models, offering access to Gemini Pro and other Google AI models with a user-friendly interface for developers and researchers.",
        image: "/assets/img/ai-apps/ai-google-aistudio.jpg",
        logo: "https://www.google.com/images/aistudio-logo.svg",
        companyName: "Google",
        companyLink: "https://www.google.com",
        companyLogo: "https://www.google.com/images/google-logo.svg",
        pricing: "Free with API usage limits, pay-as-you-go pricing for API calls",
        types: ["developer-tools", "ai-testing", "model-access"],
        pros: [
            "Direct access to Google's latest AI models",
            "User-friendly interface for testing and prototyping",
            "Comprehensive API documentation and examples",
            "Integration with Google Cloud services"
        ],
        cons: [
            "Limited free tier API usage",
            "Requires technical knowledge to use effectively",
            "Some advanced features require Google Cloud setup"
        ],
        subscriptions: [
            {
                name: 'Free Tier (Gemini Pro API)',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Up to 60 requests/minute (RPM) and 60,000 requests/day (RPD) for Gemini Pro. Higher usage is pay-as-you-go.'
            },
            {
                name: 'Pay-as-you-go (Gemini 1.5 Pro API)',
                usdMonthly: 'Variable', // Based on usage, not a fixed monthly fee
                usdYearly: 'Variable', // Based on usage, not a fixed yearly fee
                pricingDetails: {
                    inputTokensPerMillion: 7.00,
                    outputTokensPerMillion: 21.00,
                    contextWindow: '1M tokens'
                },
                description: 'Pricing per 1M input tokens and 1M output tokens. Contact Google Cloud for enterprise-level pricing.'
            }
        ]
    },
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
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Access to Gemini (formerly Bard) with standard features and capabilities.'
            },
            {
                name: 'Gemini Advanced',
                usdMonthly: 19.99,
                usdYearly: 199.99, // Often a discount for yearly, assuming ~10 months equivalent for a full year
                description: 'Access to Gemini 1.5 Pro, larger context window, and enhanced performance, integrated with Google Workspace.'
            }
        ],
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
        id: "google_veo3",
        name: "Google Veo3",
        description: "Google's advanced AI video generation model that creates high-quality, realistic videos from text prompts, supporting various styles and cinematic effects.",
        image: "/assets/img/ai-apps/ai-google-veo3.webp",
        logo: "https://www.google.com/images/veo3-logo.svg",
        companyName: "Google",
        companyLink: "https://www.google.com",
        companyLogo: "https://www.google.com/images/google-logo.svg",
        link: "https://deepmind.google/models/veo/",
        pricing: "Free tier with limits, pay-as-you-go pricing for API usage",
        types: ["video-generation", "creative", "ai-testing"],
        pros: [
            "High-quality video generation from text",
            "Supports various cinematic styles and effects",
            "Integration with Google's AI ecosystem",
            "Advanced motion and physics understanding"
        ],
        cons: [
            "Limited free tier access",
            "Requires technical knowledge for API usage",
            "Processing time can be lengthy for complex videos",
            "Still in early access phase"
        ],
        subscriptions: [
            {
                name: 'Early Access / Research',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Currently, Veo is primarily available for select creators and researchers via Google DeepMind. Public pricing or direct subscription tiers are not yet established.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Access to GPT-3.5 model with standard features. Usage limits apply.'
            },
            {
                name: 'ChatGPT Plus',
                usdMonthly: 20,
                usdYearly: 200, // No official yearly discount, but often offered or estimated.
                description: 'Access to GPT-4, DALL·E 3, Browse, advanced data analysis, and higher usage limits.'
            },
            {
                name: 'ChatGPT Team',
                usdMonthly: 25, // Per user, monthly billing.
                usdYearly: 25 * 12, // For a team of 1, otherwise scales.
                description: 'Designed for teams, offering higher limits, administrative tools, and a secure workspace.'
            },
            {
                name: 'ChatGPT Enterprise',
                usdMonthly: 'Contact Sales',
                usdYearly: 'Contact Sales',
                description: 'For large organizations, offering enterprise-grade security, unlimited high-speed GPT-4 access, and customizability.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Access to Claude with usage limits, typically sufficient for light use.'
            },
            {
                name: 'Claude Pro',
                usdMonthly: 20,
                usdYearly: 200, // Estimated yearly
                description: '5x more usage than the free tier, access to Claude 3 Opus, faster responses, and priority access during high traffic.'
            },
            {
                name: 'API Access (Usage-based)',
                usdMonthly: 'Variable',
                usdYearly: 'Variable',
                pricingDetails: {
                    'Claude 3 Opus': { inputTokensPerMillion: 15.00, outputTokensPerMillion: 75.00 },
                    'Claude 3 Sonnet': { inputTokensPerMillion: 3.00, outputTokensPerMillion: 15.00 },
                    'Claude 3 Haiku': { inputTokensPerMillion: 0.25, outputTokensPerMillion: 1.25 }
                },
                description: 'Pricing varies per model based on input and output tokens. Ideal for developers and businesses.'
            }
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
        ],
        subscriptions: [
            {
                name: 'API (Pay-as-you-go)',
                usdMonthly: 'Variable',
                usdYearly: 'Variable',
                pricingDetails: {
                    'DeepSeek-Coder': { inputTokensPerMillion: 0.80, outputTokensPerMillion: 0.80 },
                    'DeepSeek-Chat': { inputTokensPerMillion: 0.80, outputTokensPerMillion: 0.80 }
                },
                description: 'Pricing per 1K tokens. Offers competitive rates for developers and businesses.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Grok (Standard Access)',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Currently bundled with premium X subscriptions, offering access to Grok with current capabilities.'
            },
            {
                name: 'X Premium+',
                usdMonthly: 16,
                usdYearly: 168,
                description: 'Includes Grok access, full ad experience, largest reply boost, and more.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited number of Pro searches daily, basic features.'
            },
            {
                name: 'Pro',
                usdMonthly: 20,
                usdYearly: 200, // Often a discount for yearly, assuming ~10 months equivalent.
                description: 'Unlimited Pro searches, image generation, API access, and more advanced features.'
            }
        ]
    },
    {
        id: "quora_poe",
        rating: "7.5/10",
        name: "Poe",
        description: "A chatbot aggregator by Quora, allowing access to multiple AI models like Claude and DeepSeek for customized conversational experiences.",
        image: "/assets/img/ai-apps/ai-poe.png",
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Access to a selection of AI models with daily message limits.'
            },
            {
                name: 'Poe Premium',
                usdMonthly: 19.99,
                usdYearly: 199.99,
                description: 'Higher message limits for all bots, including premium models, and early access to new features.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Basic access to Character.AI with certain limitations on interaction speed and features.'
            },
            {
                name: 'c.ai+',
                usdMonthly: 9.99,
                usdYearly: 99.99, // Estimated, often a slight discount for yearly.
                description: 'Faster message generation, early access to new features, and a badge.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Basic Plan',
                usdMonthly: 10,
                usdYearly: 96, // Discount for yearly ($8/month)
                description: 'Around 3.3 hours of Fast GPU time per month, private visibility.'
            },
            {
                name: 'Standard Plan',
                usdMonthly: 30,
                usdYearly: 288, // Discount for yearly ($24/month)
                description: 'Around 15 hours of Fast GPU time per month, unlimited Relax GPU time.'
            },
            {
                name: 'Pro Plan',
                usdMonthly: 60,
                usdYearly: 576, // Discount for yearly ($48/month)
                description: 'Around 30 hours of Fast GPU time per month, unlimited Relax GPU time, Stealth Mode.'
            },
            {
                name: 'Mega Plan',
                usdMonthly: 120,
                usdYearly: 1152, // Discount for yearly ($96/month)
                description: 'Around 60 hours of Fast GPU time per month, unlimited Relax GPU time, Stealth Mode.'
            }
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
        ],
        subscriptions: [
            {
                name: 'ChatGPT Free (DALL·E 2)',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited access to DALL·E 2 for image generation within the free ChatGPT tier.'
            },
            {
                name: 'ChatGPT Plus (DALL·E 3)',
                usdMonthly: 20,
                usdYearly: 200, // Estimated yearly
                description: 'Access to DALL·E 3 for enhanced image generation directly within ChatGPT.'
            },
            {
                name: 'API (Pay-as-you-go)',
                usdMonthly: 'Variable',
                usdYearly: 'Variable',
                pricingDetails: {
                    'DALL·E 3': { pricingPerImage: 0.040, size: '1024x1024' },
                    'DALL·E 2': { pricingPerImage: 0.020, size: '1024x1024' }
                },
                description: 'Pricing per image generated, varies by model and resolution.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited daily generations, basic features.'
            },
            {
                name: 'Basic Plan',
                usdMonthly: 9.99,
                usdYearly: 99.99, // Estimated yearly discount
                description: 'Increased daily generations and access to more models.'
            },
            {
                name: 'Pro Plan',
                usdMonthly: 19.99,
                usdYearly: 199.99, // Estimated yearly discount
                description: 'Highest generation limits, priority processing, and exclusive features.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited daily tokens for image generation.'
            },
            {
                name: 'Apprentice',
                usdMonthly: 12,
                usdYearly: 108, // Discount for yearly ($9/month)
                description: 'More tokens, faster generation, commercial use rights.'
            },
            {
                name: 'Artisan',
                usdMonthly: 30,
                usdYearly: 288, // Discount for yearly ($24/month)
                description: 'Significantly more tokens, private generations, advanced features.'
            },
            {
                name: 'Maestro',
                usdMonthly: 60,
                usdYearly: 576, // Discount for yearly ($48/month)
                description: 'Highest token limits, dedicated resources, and premium support.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Up to 1,000 images per day, commercial use for public images.'
            },
            {
                name: 'Pro',
                usdMonthly: 15,
                usdYearly: 180,
                description: '2,000 images per day, no watermark, private images, faster generation.'
            },
            {
                name: 'Dalle 3 Add-on',
                usdMonthly: 10,
                usdYearly: 120,
                description: 'An additional subscription on top of Pro for DALL·E 3 generations.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited video generations, asset storage, and resolution.'
            },
            {
                name: 'Standard',
                usdMonthly: 15,
                usdYearly: 144, // Discount for yearly ($12/month)
                description: 'More video credits, 4K resolution exports, asset storage, and commercial use.'
            },
            {
                name: 'Pro',
                usdMonthly: 35,
                usdYearly: 336, // Discount for yearly ($28/month)
                description: 'Higher video credits, advanced editing tools, and priority support.'
            },
            {
                name: 'Unlimited',
                usdMonthly: 100,
                usdYearly: 960, // Discount for yearly ($80/month)
                description: 'Unlimited video generations, highest priority, and dedicated support.'
            },
            {
                name: 'Enterprise',
                usdMonthly: 'Contact Sales',
                usdYearly: 'Contact Sales',
                description: 'Custom solutions for large organizations with tailored features and support.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Starter',
                usdMonthly: 22,
                usdYearly: 264,
                description: 'Includes 10 minutes of video per month, access to basic avatars, and AI scripts.'
            },
            {
                name: 'Creator',
                usdMonthly: 67,
                usdYearly: 804,
                description: '30 minutes of video per month, custom avatars, premium voices, and collaboration features.'
            },
            {
                name: 'Enterprise',
                usdMonthly: 'Contact Sales',
                usdYearly: 'Contact Sales',
                description: 'Custom pricing for large organizations with dedicated support, API access, and advanced security.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited video generations per day, watermark on videos.'
            },
            {
                name: 'Standard',
                usdMonthly: 8,
                usdYearly: 80, // Estimated yearly discount
                description: 'More video generations, no watermark, faster processing.'
            },
            {
                name: 'Pro',
                usdMonthly: 24,
                usdYearly: 240, // Estimated yearly discount
                description: 'Highest video generation limits, priority support, and exclusive features.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Basic access to character animation features with usage limits.'
            },
            {
                name: 'Pro',
                usdMonthly: 10,
                usdYearly: 100, // Estimated yearly discount
                description: 'More animation credits, higher resolution exports, and priority processing.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited video minutes for clipping, basic features.'
            },
            {
                name: 'Starter',
                usdMonthly: 19,
                usdYearly: 190, // Estimated yearly discount
                description: '300 upload minutes per month, 100 video exports, AI captioning.'
            },
            {
                name: 'Pro',
                usdMonthly: 49,
                usdYearly: 490, // Estimated yearly discount
                description: '1000 upload minutes, 400 video exports, full HD, and priority support.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited daily song generations and basic features.'
            },
            {
                name: 'Pro',
                usdMonthly: 10,
                usdYearly: 80, // Discount for yearly ($6.67/month)
                description: 'More song generations, commercial use rights, and faster generation.'
            },
            {
                name: 'Premier',
                usdMonthly: 30,
                usdYearly: 240, // Discount for yearly ($20/month)
                description: 'Highest song generation limits, priority processing, and exclusive features.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited daily generations with basic features.'
            },
            {
                name: 'Standard',
                usdMonthly: 10,
                usdYearly: 100, // Estimated yearly discount
                description: 'Increased generations, commercial use rights, and priority access.'
            },
            {
                name: 'Pro',
                usdMonthly: 25,
                usdYearly: 250, // Estimated yearly discount
                description: 'Highest generation limits and advanced features.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: '3 downloads per month, non-commercial use, basic features.'
            },
            {
                name: 'Standard',
                usdMonthly: 12.00, // Converted from €11
                usdYearly: 120.00, // Estimated yearly discount
                description: '15 downloads per month, commercial use with attribution, standard features.'
            },
            {
                name: 'Pro',
                usdMonthly: 36.00, // Converted from €33
                usdYearly: 360.00, // Estimated yearly discount
                description: 'Unlimited downloads, full copyright ownership, advanced features, and API access.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited track generations, basic quality, personal use only.'
            },
            {
                name: 'Creator',
                usdMonthly: 11.69,
                usdYearly: 104.99, // Discount for yearly
                description: 'More generations, higher quality, commercial use rights, stem export.'
            },
            {
                name: 'Pro',
                usdMonthly: 39.99,
                usdYearly: 359.99, // Discount for yearly
                description: 'Highest generation limits, custom tracks, API access, and priority support.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Enterprise',
                usdMonthly: 'Contact for Quote',
                usdYearly: 'Contact for Quote',
                description: 'Customized pricing based on specific organizational needs, scale of operations, and required features. Typically includes extensive support and implementation services.'
            }
        ]
    },
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited song creations, non-commercial use, and basic download quality.'
            },
            {
                name: 'Creator',
                usdMonthly: 9.99,
                usdYearly: 99.99, // Estimated yearly discount
                description: 'More song creations, commercial use rights, and higher quality downloads.'
            },
            {
                name: 'Pro',
                usdMonthly: 29.99,
                usdYearly: 299.99, // Estimated yearly discount
                description: 'Unlimited song creations, premium distribution options, and priority support.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Basic writing corrections, grammar, spelling, and punctuation checks.'
            },
            {
                name: 'Premium',
                usdMonthly: 12.00, // Billed annually as $144
                usdYearly: 144.00,
                description: 'Clarity-focused rewrites, tone adjustments, word choice, plagiarism detection, and more.'
            },
            {
                name: 'Business',
                usdMonthly: 15.00, // Per member per month, billed annually
                usdYearly: 180.00, // Per member
                description: 'Centralized billing, style guides, analytics, and priority email support for teams.'
            }
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
        ],
        subscriptions: [
            {
                name: 'Free',
                usdMonthly: 0,
                usdYearly: 0,
                description: 'Limited rewrites per day, basic features.'
            },
            {
                name: 'Premium',
                usdMonthly: 9.99, // Billed annually as $119.88
                usdYearly: 119.88,
                description: 'Unlimited rewrites, formal/casual tone, length control, and more.'
            },
            {
                name: 'Unlimited',
                usdMonthly: 14.99, // Billed annually as $179.88
                usdYearly: 179.88,
                description: 'All Premium features plus unlimited AI-generated text and summaries.'
            }
        ]
    },
    {
        "id": "sudowrite_sudowrite",
        "rating": "8/10",
        "name": "Sudowrite",
        "description": "A creative writing assistant focused on fiction, helping with brainstorming, descriptions, and narrative development.",
        "image": "/assets/img/ai-apps/ai-sudowrite.png",
        "logo": "https://www.sudowrite.com/images/logo.svg",
        "companyName": "Sudowrite",
        "companyLink": "https://www.sudowrite.com",
        "companyLogo": "https://www.sudowrite.com/images/company-logo.svg",
        "link": "https://www.sudowrite.com",
        "pricing": "From $19/mo, no free tier",
        "types": ["writing", "creative"],
        "pros": [
            "Excellent for fiction writing",
            "Tools for brainstorming and descriptions",
            "Enhances narrative pacing and dialogue",
            "Great for overcoming writer's block"
        ],
        "cons": [
            "No free tier available",
            "Limited to fiction-focused use cases",
            "Higher starting price point"
        ],
        "subscriptions": [
            {
                "name": "Hobbyist",
                "usdMonthly": 19,
                "usdYearly": 19 * 10,
                "description": "For casual writers, limited word generation."
            },
            {
                "name": "Professional",
                "usdMonthly": 29,
                "usdYearly": 29 * 10,
                "description": "For serious writers, more word generation, advanced features."
            },
            {
                "name": "Max",
                "usdMonthly": 129,
                "usdYearly": 129 * 10,
                "description": "For power users, maximum word generation."
            }
        ]
    },
    {
        "id": "rytr_rytr",
        "rating": "7.5/10",
        "name": "Rytr",
        "description": "An AI content generation tool for short-form content like social media posts and emails, with pre-designed templates.",
        "image": "/assets/img/ai-apps/ai-rytr.png",
        "logo": "https://rytr.me/images/logo.svg",
        "companyName": "Rytr",
        "companyLink": "https://rytr.me",
        "companyLogo": "https://rytr.me/images/company-logo.svg",
        "link": "https://rytr.me",
        "pricing": "Free, Premium from $9/mo",
        "types": ["writing", "social-media", "productivity"],
        "pros": [
            "Over 40 pre-designed templates",
            "Built-in plagiarism checker",
            "Supports 30+ languages",
            "Fast for short-form content"
        ],
        "cons": [
            "Struggles with long-form content",
            "Premium needed for advanced features",
            "Less versatile than ChatGPT"
        ],
        "subscriptions": [
            {
                "name": "Free Plan",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Generate 10k characters/month, access to basic features."
            },
            {
                "name": "Saver Plan",
                "usdMonthly": 9,
                "usdYearly": 90,
                "description": "Generate 100k characters/month, premium features, character boost."
            },
            {
                "name": "Unlimited Plan",
                "usdMonthly": 29,
                "usdYearly": 290,
                "description": "Unlimited character generation, dedicated account manager, priority support."
            }
        ]
    },
    {
        "id": "notion_notionai",
        "rating": "8/10",
        "name": "Notion AI",
        "description": "An AI-enhanced note-taking and organization tool for summarization, task management, and knowledge bases.",
        "image": "/assets/img/ai-apps/ai-notion.webp",
        "logo": "https://www.notion.so/images/notion-ai-logo.svg",
        "companyName": "Notion",
        "companyLink": "https://www.notion.so",
        "companyLogo": "https://www.notion.so/images/notion-logo.svg",
        "link": "https://www.notion.so/product/ai",
        "pricing": "Free with Notion, $10/mo for AI features",
        "types": ["productivity", "writing", "organization"],
        "pros": [
            "Seamless integration with Notion",
            "Powerful summarization and organization",
            "Great for project management",
            "Enhances note-taking workflows"
        ],
        "cons": [
            "AI features require additional cost",
            "Limited outside Notion ecosystem",
            "Not a standalone AI tool"
        ],
        "subscriptions": [
            {
                "name": "AI Add-on (Monthly)",
                "usdMonthly": 10,
                "usdYearly": "N/A",
                "description": "Adds AI features to any paid Notion plan (billed monthly)."
            },
            {
                "name": "AI Add-on (Annual)",
                "usdMonthly": 8,
                "usdYearly": 96,
                "description": "Adds AI features to any paid Notion plan (billed annually)."
            }
        ]
    },
    {
        "id": "google_notebooklm",
        "rating": "7.5/10",
        "name": "NotebookLM",
        "description": "An AI-powered research assistant for summarizing and organizing notes, ideal for students and researchers.",
        "image": "/assets/img/ai-apps/ai-notebooklm.png",
        "logo": "https://www.google.com/images/notebooklm-logo.svg",
        "companyName": "Google",
        "companyLink": "https://www.google.com",
        "companyLogo": "https://www.google.com/images/google-logo.svg",
        "link": "https://notebooklm.google.com",
        "pricing": "Free, Premium at $19.99/mo",
        "types": ["research", "education", "productivity"],
        "pros": [
            "Free tier with up to 100 notebooks",
            "Summarizes complex research materials",
            "Supports up to 50 sources per notebook",
            "Free premium for .edu users"
        ],
        "cons": [
            "Limited to research and note-taking",
            "Premium required for advanced features",
            "Less versatile than general-purpose AIs"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Basic features, limited notebooks and sources."
            },
            {
                "name": "Plus (via Google Workspace Business Standard)",
                "usdMonthly": 14,
                "usdYearly": 168,
                "description": "Enhanced features, 5x more notebooks, sources, and audio generations per day."
            }
        ]
    },
    {
        "id": "photomath_photomath",
        "rating": "7.5/10",
        "name": "PhotoMath",
        "description": "An AI math problem solver using image recognition, ideal for students and educators tackling mathematical challenges.",
        "image": "/assets/img/ai-apps/ai-photomath.png",
        "logo": "https://photomath.com/images/logo.svg",
        "companyName": "PhotoMath",
        "companyLink": "https://photomath.com",
        "companyLogo": "https://photomath.com/images/company-logo.svg",
        "link": "https://photomath.com",
        "pricing": "Free, Plus plan from $9.99/mo",
        "types": ["education", "math"],
        "pros": [
            "Accurate math problem solving",
            "Image recognition for easy input",
            "Step-by-step explanations",
            "Great for students and educators"
        ],
        "cons": [
            "Limited to math-related tasks",
            "Premium required for advanced features",
            "Less versatile for general use"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Solve math problems with step-by-step explanations."
            },
            {
                "name": "Plus (Monthly)",
                "usdMonthly": 9.99,
                "usdYearly": "N/A",
                "description": "Access to expert-verified solutions, deeper explanations, and custom learning plans."
            },
            {
                "name": "Plus (Annual)",
                "usdMonthly": "N/A",
                "usdYearly": 69.99,
                "description": "Access to expert-verified solutions, deeper explanations, and custom learning plans (annual billing)."
            }
        ]
    },
    {
        "id": "deepresearch_deepresearch",
        "rating": "7/10",
        "name": "Deep Research",
        "description": "An AI-driven research tool likely tied to ChatGPT, excelling at analyzing comprehensive sources for in-depth insights.",
        "image": "/assets/img/ai-apps/ai-openai-deepresearch.webp",
        "logo": "https://www.openai.com/images/deepresearch-logo.svg",
        "companyName": "OpenAI",
        "companyLink": "https://openai.com",
        "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenAI_Logo.svg",
        "link": "https://chat.openai.com",
        "pricing": "Included with ChatGPT Plus ($20/mo)",
        "types": ["research", "education"],
        "pros": [
            "Analyzes comprehensive sources",
            "Integrated with ChatGPT ecosystem",
            "Ideal for in-depth research tasks",
            "High-quality insights"
        ],
        "cons": [
            "Requires ChatGPT Plus subscription",
            "Limited standalone functionality",
            "Less citation-focused than Perplexity"
        ],
        "subscriptions": [
            {
                "name": "ChatGPT Plus (Deep Research access)",
                "usdMonthly": 20,
                "usdYearly": "N/A",
                "description": "Access to advanced models, including those powering Deep Research (10 queries/month with advanced models)."
            }
        ]
    },
    {
        "id": "fathom_fathom",
        "rating": "7.5/10",
        "name": "Fathom",
        "description": "An AI meeting summarizer that generates actionable insights, ideal for professionals and teams.",
        "image": "/assets/img/ai-apps/ai-fathom.png",
        "logo": "https://www.fathom.video/images/logo.svg",
        "companyName": "Fathom",
        "companyLink": "https://www.fathom.video",
        "companyLogo": "https://www.fathom.video/images/company-logo.svg",
        "link": "https://www.fathom.video",
        "pricing": "Free tier, Pro plan from $15/mo",
        "types": ["productivity", "meetings"],
        "pros": [
            "Accurate meeting summaries",
            "Generates actionable insights",
            "Integrates with video conferencing",
            "Free tier with basic features"
        ],
        "cons": [
            "Limited to meeting-related tasks",
            "Premium required for advanced features",
            "Less versatile for general use"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Basic meeting summaries and highlights."
            },
            {
                "name": "Pro (Monthly)",
                "usdMonthly": 15,
                "usdYearly": "N/A",
                "description": "Unlimited meetings, advanced features, transcription."
            },
            {
                "name": "Pro (Annual)",
                "usdMonthly": 12.5,
                "usdYearly": 150,
                "description": "Unlimited meetings, advanced features, transcription (billed annually)."
            }
        ]
    },
    {
        "id": "zapier_zapier",
        "rating": "8/10",
        "name": "Zapier",
        "description": "A workflow automation platform connecting apps to streamline repetitive tasks, enhanced with AI capabilities.",
        "image": "/assets/img/ai-apps/ai-zapier.png",
        "logo": "https://www.zapier.com/images/logo.svg",
        "companyName": "Zapier",
        "companyLink": "https://www.zapier.com",
        "companyLogo": "https://www.zapier.com/images/company-logo.svg",
        "link": "https://www.zapier.com",
        "pricing": "Free, Pro plan from $19.99/mo",
        "types": ["productivity", "automation"],
        "pros": [
            "Connects thousands of apps",
            "Streamlines repetitive tasks",
            "AI-enhanced automation features",
            "Free tier with basic functionality"
        ],
        "cons": [
            "Complex setup for advanced workflows",
            "Premium required for full features",
            "Learning curve for non-technical users"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "5 Zaps, 100 tasks/month, 15 min update time."
            },
            {
                "name": "Starter (Monthly)",
                "usdMonthly": 19.99,
                "usdYearly": "N/A",
                "description": "20 Zaps, 750 tasks/month, 5 min update time, multi-step Zaps."
            },
            {
                "name": "Starter (Annual)",
                "usdMonthly": 19.99 * 0.8,
                "usdYearly": 19.99 * 12 * 0.8,
                "description": "20 Zaps, 750 tasks/month, 5 min update time, multi-step Zaps (billed annually)."
            },
            {
                "name": "Professional (Monthly)",
                "usdMonthly": 49,
                "usdYearly": "N/A",
                "description": "Unlimited Zaps, 2,000 tasks/month, 2 min update time, Paths, Filters, Formatters."
            },
            {
                "name": "Professional (Annual)",
                "usdMonthly": 49 * 0.8,
                "usdYearly": 49 * 12 * 0.8,
                "description": "Unlimited Zaps, 2,000 tasks/month, 2 min update time, Paths, Filters, Formatters (billed annually)."
            },
            {
                "name": "Team (Monthly)",
                "usdMonthly": 299,
                "usdYearly": "N/A",
                "description": "Unlimited Zaps, 50,000 tasks/month, 1 min update time, premier support, team collaboration."
            },
            {
                "name": "Team (Annual)",
                "usdMonthly": 299 * 0.8,
                "usdYearly": 299 * 12 * 0.8,
                "description": "Unlimited Zaps, 50,000 tasks/month, 1 min update time, premier support, team collaboration (billed annually)."
            },
            {
                "name": "Company",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "Advanced security, onboarding, dedicated account manager."
            }
        ]
    },
    {
        "id": "n8n_n8n",
        "rating": "7.5/10",
        "name": "n8n",
        "description": "An open-source automation platform for custom workflows, ideal for developers and tech-savvy users.",
        "image": "/assets/img/ai-apps/ai-n8n.png",
        "logo": "https://n8n.io/images/logo.svg",
        "companyName": "n8n",
        "companyLink": "https://n8n.io",
        "companyLogo": "https://n8n.io/images/company-logo.svg",
        "link": "https://n8n.io",
        "pricing": "Free (open-source), hosted plans from $20/mo",
        "types": ["automation", "productivity"],
        "pros": [
            "Open-source for full customization",
            "Flexible for complex workflows",
            "Strong developer community",
            "Free self-hosted option"
        ],
        "cons": [
            "Requires technical expertise",
            "Hosted plans can be costly",
            "Less user-friendly for beginners"
        ],
        "subscriptions": [
            {
                "name": "Self-Hosted",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Run n8n on your own infrastructure, full control."
            },
            {
                "name": "Starter",
                "usdMonthly": 20,
                "usdYearly": 180,
                "description": "Hosted plan with 5,000 workflow executions/month."
            },
            {
                "name": "Pro",
                "usdMonthly": 50,
                "usdYearly": 450,
                "description": "Hosted plan with 20,000 workflow executions/month, more active workflows."
            },
            {
                "name": "Enterprise",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "Dedicated instance, custom support, SLA."
            }
        ]
    },
    {
        "id": "reclaimai_reclaim",
        "rating": "7.5/10",
        "name": "Reclaim AI",
        "description": "An AI-powered calendar assistant optimizing schedules for busy professionals.",
        "image": "/assets/img/ai-apps/ai-reclaim.png",
        "logo": "https://reclaim.ai/images/logo.svg",
        "companyName": "Reclaim AI",
        "companyLink": "https://reclaim.ai",
        "companyLogo": "https://reclaim.ai/images/company-logo.svg",
        "link": "https://reclaim.ai",
        "pricing": "Free tier, Pro plan from $8/mo",
        "types": ["productivity", "scheduling"],
        "pros": [
            "Optimizes calendar scheduling",
            "Integrates with major calendar apps",
            "Affordable pricing structure",
            "Free tier with basic features"
        ],
        "cons": [
            "Limited to scheduling tasks",
            "Premium required for advanced features",
            "Less versatile for general automation"
        ],
        "subscriptions": [
            {
                "name": "Lite",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Smart time blocking, unlimited tasks, 3 habits, 1 Smart 1:1, 1 Scheduling Link."
            },
            {
                "name": "Starter",
                "usdMonthly": 8,
                "usdYearly": 8 * 12,
                "description": "Unlimited tasks & habits, 3 Smart 1:1s, 3 Scheduling Links, Team Links, one-off Scheduling."
            },
            {
                "name": "Business",
                "usdMonthly": 12,
                "usdYearly": 12 * 12,
                "description": "Unlimited features, schedule 12-weeks in advance, dedicated security."
            },
            {
                "name": "Enterprise",
                "usdMonthly": 18,
                "usdYearly": 18 * 12,
                "description": "Domain capture, SCIM provisioning, SSO support, org optimization."
            }
        ]
    },
    {
        "id": "replika_replika",
        "rating": "7/10",
        "name": "Replika",
        "description": "An AI companion chatbot for personal conversations, ideal for emotional support and casual chats.",
        "image": "/assets/img/ai-apps/ai-replika.png",
        "logo": "https://replika.ai/images/logo.svg",
        "companyName": "Replika",
        "companyLink": "https://replika.ai",
        "companyLogo": "https://replika.ai/images/company-logo.svg",
        "link": "https://replika.ai",
        "pricing": "Free, Pro plan from $7.99/mo",
        "types": ["chatbot", "communication"],
        "pros": [
            "Empathetic conversational partner",
            "Customizable user experience",
            "Free tier with decent functionality",
            "Great for casual and emotional chats"
        ],
        "cons": [
            "Limited to personal use cases",
            "Premium required for advanced features",
            "Not suited for professional tasks"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Basic chatting and avatar customization."
            },
            {
                "name": "Pro (Monthly)",
                "usdMonthly": 15.99,
                "usdYearly": "N/A",
                "description": "Conversation aims, VR experiences, voice calls, avatar switching, coping skills."
            },
            {
                "name": "Pro (Annual)",
                "usdMonthly": "N/A",
                "usdYearly": 69.99,
                "description": "Conversation aims, VR experiences, voice calls, avatar switching, coping skills (billed annually)."
            },
            {
                "name": "Lifetime",
                "usdMonthly": "N/A",
                "usdYearly": "N/A",
                "pricingDetails": {
                    "oneTimePayment": 300
                },
                "description": "Permanent access to all premium features."
            }
        ]
    },
    {
        "id": "nomi_nomi",
        "rating": "7/10",
        "name": "Nomi",
        "description": "A personal AI friend focused on empathetic interactions for conversational companionship.",
        "image": "/assets/img/ai-apps/ai-nomi.png",
        "logo": "https://nomi.ai/images/logo.svg",
        "companyName": "Nomi",
        "companyLink": "https://nomi.ai",
        "companyLogo": "https://nomi.ai/images/company-logo.svg",
        "link": "https://nomi.ai",
        "pricing": "Free tier, premium from $9.99/mo",
        "types": ["chatbot", "communication"],
        "pros": [
            "Empathetic and engaging conversations",
            "Customizable AI companion",
            "Free tier with basic features",
            "Ideal for personal interaction"
        ],
        "cons": [
            "Limited to conversational use cases",
            "Premium required for full features",
            "Less suited for professional tasks"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Limited messages and selfie requests per day."
            },
            {
                "name": "Premium (Monthly)",
                "usdMonthly": 15.99,
                "usdYearly": "N/A",
                "description": "More messages and selfie requests."
            },
            {
                "name": "Premium (Quarterly)",
                "usdMonthly": "N/A",
                "usdYearly": "N/A",
                "pricingDetails": {
                    "usdQuarterly": 39.99
                },
                "description": "More messages and selfie requests (billed quarterly)."
            },
            {
                "name": "Premium (Yearly)",
                "usdMonthly": "N/A",
                "usdYearly": 99.99,
                "description": "More messages and selfie requests (billed annually)."
            }
        ]
    },
    {
        "id": "heygen_heygen",
        "rating": "7.5/10",
        "name": "HeyGen",
        "description": "An AI-generated video avatar platform for presentations and communication, ideal for marketing and virtual events.",
        "image": "/assets/img/ai-apps/ai-heygen.jpg",
        "logo": "https://www.heygen.com/images/logo.svg",
        "companyName": "HeyGen",
        "companyLink": "https://www.heygen.com",
        "companyLogo": "https://www.heygen.com/images/company-logo.svg",
        "link": "https://www.heygen.com",
        "pricing": "Free tier, Pro plan from $29/mo",
        "types": ["video-generation", "communication"],
        "pros": [
            "High-quality AI video avatars",
            "Supports marketing and presentations",
            "User-friendly for non-editors",
            "Free tier available"
        ],
        "cons": [
            "Higher pricing for advanced features",
            "Limited to video avatar use cases",
            "Less versatile than Synthesia"
        ],
        "subscriptions": [
            {
                "name": "Free Plan",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "1 credit (1 minute of video), 1 seat, 1 instant avatar."
            },
            {
                "name": "Creator Plan",
                "usdMonthly": 29,
                "usdYearly": "N/A",
                "description": "15 credits (15 minutes of video), 1 seat, 3 instant avatars."
            },
            {
                "name": "Business Plan",
                "usdMonthly": 89,
                "usdYearly": "N/A",
                "description": "30 credits (30 minutes of video), 3 seats, 3 instant avatars."
            }
        ]
    },
    {
        "id": "lovable_lovable",
        "rating": "8/10",
        "name": "Lovable",
        "description": "An AI-powered platform that transforms natural language prompts into full-stack web applications, enabling rapid prototyping and deployment without coding expertise.",
        "image": "/assets/img/ai-apps/ai-lovable.png",
        "logo": "https://lovable.dev/images/logo.svg",
        "companyName": "Lovable",
        "companyLink": "https://lovable.dev",
        "companyLogo": "https://lovable.dev/images/company-logo.svg",
        "link": "https://lovable.dev",
        "pricing": "Free tier (5 messages/day), Pro plan from $25/mo",
        "types": ["developer-tools", "full-stack", "automation"],
        "pros": [
            "Rapid app generation from text prompts",
            "Seamless Supabase and GitHub integration",
            "No-code friendly for non-developers",
            "One-click deployment and real-time previews"
        ],
        "cons": [
            "Security vulnerabilities in generated apps",
            "Limited free tier message cap",
            "Complex projects may require manual coding"
        ],
        "subscriptions": [
            {
                "name": "Free Plan",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "5 free daily credits (messages), max 30 free daily credits/month."
            },
            {
                "name": "Pro (Tier 1)",
                "usdMonthly": 25,
                "usdYearly": "N/A",
                "description": "100 monthly messages, private projects, remove badge, custom domains, Dev Mode."
            },
            {
                "name": "Teams (Tier 1)",
                "usdMonthly": 30,
                "usdYearly": "N/A",
                "description": "100 monthly messages, 20 seats, centralized billing."
            }
            // More tiers exist, adding first one for brevity
        ]
    },
    {
        "id": "vercel_v0",
        "rating": "8/10",
        "name": "v0",
        "description": "An AI-powered UI generator by Vercel that creates React components with Tailwind CSS and shadcn/ui from natural language prompts, ideal for rapid front-end prototyping.",
        "image": "/assets/img/ai-apps/ai-vercel-v0.png",
        "logo": "https://v0.dev/images/logo.svg",
        "companyName": "Vercel",
        "companyLink": "https://vercel.com",
        "companyLogo": "https://vercel.com/images/vercel-logo.svg",
        "link": "https://v0.dev",
        "pricing": "Free (200 credits/mo), $20/mo for Pro (private generations, custom themes)",
        "types": ["developer-tools", "ui-generation", "frontend"],
        "pros": [
            "Rapid UI prototyping with React and Tailwind",
            "Seamless integration with Next.js and shadcn/ui",
            "Real-time collaboration and version control",
            "Supports animations via Framer Motion"
        ],
        "cons": [
            "Primarily focused on front-end, limited back-end support",
            "May require React knowledge for customization",
            "Occasional errors in complex UI generation"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "200 credits/month, public generations."
            },
            {
                "name": "Pro",
                "usdMonthly": 20,
                "usdYearly": 20 * 12,
                "description": "More credits, private generations, custom themes, priority support."
            }
        ]
    },
    {
        "id": "stackblitz_boltnew",
        "rating": "8.5/10",
        "name": "Bolt.new",
        "description": "An AI-driven full-stack development platform by StackBlitz, offering code generation, real-time debugging, and one-click deployment for rapid app development.",
        "image": "/assets/img/ai-apps/ai-boltnew.png",
        "logo": "https://bolt.new/images/logo.svg",
        "companyName": "StackBlitz",
        "companyLink": "https://stackblitz.com",
        "companyLogo": "https://stackblitz.com/images/stackblitz-logo.svg",
        "link": "https://bolt.new",
        "pricing": "Free (150K tokens/day), $20/mo for 10M tokens, up to $200/mo for 120M tokens",
        "types": ["developer-tools", "full-stack", "automation"],
        "pros": [
            "Full-stack code generation with Supabase integration",
            "One-click deployment to Netlify",
            "Real-time error detection and fixes",
            "Supports multiple frameworks (Next.js, Svelte, Vue)"
        ],
        "cons": [
            "Less robust security for hosted apps",
            "Limited flexibility outside supported frameworks",
            "Network dependency may impact performance"
        ],
        "subscriptions": [
            {
                "name": "Free",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "150K tokens/day, basic features."
            },
            {
                "name": "Growth (Monthly)",
                "usdMonthly": 20,
                "usdYearly": "N/A",
                "description": "10M tokens/month, advanced features, priority support."
            },
            {
                "name": "Growth (Annual)",
                "usdMonthly": "N/A",
                "usdYearly": 20 * 12 * 0.9,
                "description": "10M tokens/month, advanced features, priority support (billed annually with discount)."
            },
            {
                "name": "Enterprise",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "Custom token limits, dedicated support, SSO, on-premise options."
            }
        ]
    },
    {
        "id": "github_copilot",
        "rating": "8.5/10",
        "name": "GitHub Copilot",
        "description": "An AI code completion tool powered by OpenAI, accelerating software development with real-time suggestions.",
        "image": "/assets/img/ai-apps/ai-microsoft-githubcopilot.svg",
        "logo": "https://copilot.github.com/images/logo.svg",
        "companyName": "GitHub",
        "companyLink": "https://github.com",
        "companyLogo": "https://github.com/images/github-logo.svg",
        "link": "https://copilot.github.com",
        "pricing": "Free for open-source, $10/mo for individuals",
        "types": ["coding", "developer-tools"],
        "pros": [
            "Seamless IDE integration",
            "High-quality code suggestions",
            "Supports multiple programming languages",
            "Free for open-source contributors"
        ],
        "cons": [
            "Subscription required for full access",
            "Occasional irrelevant suggestions",
            "Dependent on OpenAI models"
        ],
        "subscriptions": [
            {
                "name": "Free (for open-source contributors)",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Free access for verified open-source contributors."
            },
            {
                "name": "Copilot Pro (Monthly)",
                "usdMonthly": 10,
                "usdYearly": "N/A",
                "description": "For individuals, real-time code suggestions."
            },
            {
                "name": "Copilot Pro (Annual)",
                "usdMonthly": "N/A",
                "usdYearly": 100,
                "description": "For individuals, real-time code suggestions (billed annually)."
            },
            {
                "name": "Copilot Business",
                "usdMonthly": 19,
                "usdYearly": "N/A",
                "description": "Per user/month, for organizations, centralized policy management."
            },
            {
                "name": "Copilot Enterprise",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "For large enterprises, advanced security, custom model training."
            }
        ]
    },
    {
        "id": "qodo_ai",
        "rating": "Needs Rating",
        "name": "Qodo.ai",
        "description": "An AI-powered content generation and optimization platform for creating high-quality written content efficiently.",
        "image": "/assets/img/ai-apps/ai-qodo.png",
        "logo": "https://qodo.ai/favicon.ico",
        "companyName": "Qodo.ai",
        "companyLink": "https://qodo.ai",
        "companyLogo": "https://qodo.ai/logo.png",
        "link": "https://qodo.ai",
        "pricing": "Varies (check website for plans)",
        "types": ["content generation", "SEO", "writing assistant"],
        "pros": [
            "Generates diverse content types (blog posts, articles, marketing copy)",
            "Aids in SEO optimization",
            "Improves content quality and efficiency",
            "Potentially reduces content creation time"
        ],
        "cons": [
            "Requires user input for best results",
            "May need human editing for nuance and accuracy",
            "Subscription cost could be a factor for small businesses"
        ],
        "subscriptions": [
            {
                "name": "Developer",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "250 messages & tool use per month, full repo indexing, agentic mode, test generation, code review."
            },
            {
                "name": "Teams",
                "usdMonthly": 30,
                "usdYearly": 30 * 12,
                "description": "5,000 messages/user/month, all Developer features, automated PR descriptions, ticket compliance."
            },
            {
                "name": "Enterprise",
                "usdMonthly": 45,
                "usdYearly": 45 * 12,
                "description": "Full platform (Gen, Merge & Cover), enterprise dashboard & analytics, multi-repo codebase awareness, priority support."
            }
        ]
    },
    {
        "id": "windsurf_ai",
        "rating": "Needs Rating",
        "name": "Windsurf (formerly Codeium)",
        "description": "An AI-powered coding assistant that provides autocomplete, code suggestions, and chatbot capabilities directly within various IDEs.",
        "image": "/assets/img/ai-apps/ai-windsurf.png",
        "logo": "https://www.codeium.com/logo.svg",
        "companyName": "Exafunction (Windsurf)",
        "companyLink": "https://windsurf.ai",
        "companyLogo": "https://www.codeium.com/logo.svg",
        "link": "https://windsurf.ai",
        "pricing": "Free for individual developers, enterprise pricing available",
        "subscriptions": [
            {
                "name": "Individual",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Free for individual developers, unlimited usage."
            },
            {
                "name": "Enterprise",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "For teams and organizations, advanced features, security, and support."
            }
        ],
        "types": ["coding assistant", "developer tools", "AI productivity"],
        "pros": [
            "Free for individual use",
            "Supports a wide range of IDEs and languages",
            "Real-time code completion and suggestions",
            "Integrates directly into development workflow",
            "Chatbot for code explanations and generation"
        ],
        "cons": [
            "Requires internet connection for full functionality",
            "Can sometimes be overly aggressive with suggestions",
            "Privacy concerns with code analysis for some users",
            "Performance can vary based on project size and machine"
        ]
    },
    {
        "id": "tabnine_tabnine",
        "rating": "7.5/10",
        "name": "Tabnine",
        "description": "An AI code completion platform with a focus on privacy, ideal for enterprise development environments.",
        "image": "/assets/img/ai-apps/ai-tabnine.png",
        "logo": "https://www.tabnine.com/images/logo.svg",
        "companyName": "Tabnine",
        "companyLink": "https://www.tabnine.com",
        "companyLogo": "https://www.tabnine.com/images/company-logo.svg",
        "link": "https://www.tabnine.com",
        "pricing": "Free, Pro plan from $12/mo",
        "types": ["coding", "developer-tools"],
        "pros": [
            "Strong focus on privacy",
            "Supports multiple IDEs",
            "Accurate code completions",
            "Free tier for basic use"
        ],
        "cons": [
            "Premium required for advanced features",
            "Less popular than Copilot",
            "Can be slower for complex projects"
        ],
        "subscriptions": [
            {
                "name": "Basic (Free)",
                "usdMonthly": 0,
                "usdYearly": 0,
                "description": "Short code completions, limited context."
            },
            {
                "name": "Pro",
                "usdMonthly": 12,
                "usdYearly": 120,
                "description": "Longer, smarter code completions, whole-file context, team collaboration features."
            },
            {
                "name": "Enterprise",
                "usdMonthly": "Custom",
                "usdYearly": "Custom",
                "description": "For large organizations, self-hosted, custom model training, enterprise support."
            }
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
        ],
        subscriptions: [
            {
                name: "Free Plan",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Limited usage to images only, 720p resolution, non-commercial use, watermarked.",
                pricingDetails: {
                    resolution: "720p",
                    usage: "images only",
                    commercialUse: "no",
                    watermark: "yes"
                }
            },
            {
                name: "Lite",
                usdMonthly: 9.99,
                usdYearly: 83.92, // Assuming annual discount for $83.92/year
                description: "Includes 3,200 Credits per month, high-priority generations, Ray2 Access, 1080p images, 720p, 1080p videos, Upscale to 4K, High Priority, Non-commercial use only.",
                pricingDetails: {
                    creditsPerMonth: 3200,
                    priority: "high",
                    ray2Access: "yes",
                    imageResolution: "1080p",
                    videoResolution: "720p, 1080p",
                    upscaleTo4K: "yes",
                    commercialUse: "no"
                }
            },
            {
                name: "Plus",
                usdMonthly: 29.99,
                usdYearly: 251.92, // Assuming annual discount for $251.92/year
                description: "Includes 10,000 Credits per month, high-priority generations, Ray2 Access, 1080p images, 720p, 1080p videos, Upscale to 4K, High-priority, Commercial use allowed, No watermark.",
                pricingDetails: {
                    creditsPerMonth: 10000,
                    priority: "high",
                    ray2Access: "yes",
                    imageResolution: "1080p",
                    videoResolution: "720p, 1080p",
                    upscaleTo4K: "yes",
                    commercialUse: "yes",
                    watermark: "no"
                }
            },
            {
                name: "Unlimited",
                usdMonthly: 94.99,
                usdYearly: 797.92, // Assuming annual discount for $797.92/year
                description: "Includes 10,000 credits per month for fast mode, unlimited relaxed generations, highest priority, Ray2 Access, 1080p images, 720p, 1080p videos, Upscale to 4K, Commercial use allowed, No watermark.",
                pricingDetails: {
                    fastModeCreditsPerMonth: 10000,
                    relaxedGenerations: "unlimited",
                    priority: "highest",
                    ray2Access: "yes",
                    imageResolution: "1080p",
                    videoResolution: "720p, 1080p",
                    upscaleTo4K: "yes",
                    commercialUse: "yes",
                    watermark: "no"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Public (Free)",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Free plan for non-commercial use.",
                pricingDetails: {
                    commercialUse: "no"
                }
            },
            {
                name: "Indie",
                usdMonthly: "variable", // Pricing found was $10/month or $55/year
                usdYearly: 55,
                description: "A plan suitable for indie developers.",
                pricingDetails: {
                    note: "Monthly pricing also available at $10/month"
                }
            },
            {
                name: "Professional",
                usdMonthly: "variable", // Pricing found was $50/month or $500/year
                usdYearly: 500,
                description: "A plan designed for professional users.",
                pricingDetails: {
                    note: "Monthly pricing also available at $50/month"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Starter (Free Trial)",
                usdMonthly: 0,
                usdYearly: 0,
                description: "For individuals looking to experiment with game ideation and research. Includes 30 free Credits.",
                pricingDetails: {
                    seats: 1,
                    activeProjects: 1,
                    credits: 30,
                    support: "basic"
                }
            },
            {
                name: "Indie",
                usdMonthly: 15,
                usdYearly: "180 (billed annually)", // Assuming monthly * 12 for yearly if not specified
                description: "For individuals that want to turbocharge their game development. Includes 500 Credits per month.",
                pricingDetails: {
                    seats: 1,
                    activeProjects: 5,
                    creditsPerMonth: 500,
                    support: "premium"
                }
            },
            {
                name: "Pro",
                usdMonthly: 30,
                usdYearly: "360 (billed annually)", // Assuming monthly * 12 for yearly if not specified
                description: "Perfect for solo developers who need unlimited creative freedom. Unlimited Credits for ideation, development, and asset generation.",
                pricingDetails: {
                    seats: 1,
                    activeProjects: "unlimited",
                    ideationCredits: "unlimited",
                    playableGenerationCreditsPerMonth: 1000,
                    support: "premium",
                    thirdPartyIntegrations: "yes"
                }
            },
            {
                name: "Studio",
                usdMonthly: 80, // Found $80/month on Ludo.ai, but pricing varies by source ($250/month or $300/year was also found)
                usdYearly: "960 (billed annually)", // Assuming monthly * 12 for yearly
                description: "For studios that need unlimited access to premium game creation tools. Includes 10 seats and real-time collaboration.",
                pricingDetails: {
                    seats: 10,
                    activeProjects: "unlimited",
                    ideationCredits: "unlimited",
                    playableGenerationCreditsPerMonth: 1000,
                    support: "premium",
                    realtimeCollaboration: "yes",
                    thirdPartyIntegrations: "yes"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Unlimited free interaction time in Inworld Studio & with shared Arcade characters. 120 minutes of API & integrations interaction time. Unlimited character creation.",
                pricingDetails: {
                    studioInteractionTime: "unlimited",
                    apiInteractionTimeMinutes: 120,
                    characterCreation: "unlimited"
                }
            },
            {
                name: "Starter",
                usdMonthly: 10,
                usdYearly: 120, // 10 * 12
                description: "600 minutes of API & integrations interaction time + $0.08/min thereafter. Unlimited free interaction time in Inworld Studio & with shared Arcade characters. Create multiple workspaces.",
                pricingDetails: {
                    apiInteractionTimeMinutes: 600,
                    overageRatePerMinute: 0.08,
                    studioInteractionTime: "unlimited",
                    multipleWorkspaces: "yes"
                }
            },
            {
                name: "Professional",
                usdMonthly: 25,
                usdYearly: 300, // 25 * 12
                description: "3,000 minutes of API & integrations interaction time + $0.05/min thereafter. Unlimited free interaction time in Inworld Studio & with shared Arcade characters. Analytics. Ability to share workspaces and collaborate. Access to beta features.",
                pricingDetails: {
                    apiInteractionTimeMinutes: 3000,
                    overageRatePerMinute: 0.05,
                    studioInteractionTime: "unlimited",
                    analytics: "yes",
                    collaboration: "yes",
                    betaFeatures: "yes"
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "Custom pricing that is right-sized for your business. Options include pricing based on daily active users, concurrent users, interaction time, or revenue share. Localization options. Solutions for offline or on-device implementation. Premium support and SLA.",
                pricingDetails: {
                    customPricing: "yes",
                    localization: "yes",
                    offlineImplementation: "yes",
                    premiumSupport: "yes",
                    sla: "yes"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free (Ludus Lite)",
                usdMonthly: 0,
                usdYearly: 0,
                description: "300 credits per month. Get answers based on general Unreal Engine knowledge. Integrate with various IDE.",
                pricingDetails: {
                    creditsPerMonth: 300,
                    unrealEngineKnowledge: "general",
                    ideIntegration: "yes"
                }
            },
            {
                name: "Indie",
                usdMonthly: 10, // $10/month billed monthly
                usdYearly: "variable", // Not explicitly stated for yearly, but likely a discount
                description: "25,000 credits per month. Generate 3D models. Analyze Blueprints. Integrate with various IDE. Get screen view answers and suggestions.",
                pricingDetails: {
                    creditsPerMonth: 25000,
                    generate3DModels: "yes",
                    analyzeBlueprints: "yes",
                    ideIntegration: "yes",
                    screenViewAnswers: "yes",
                    yearlyRevenueLimit: "$100,000"
                }
            },
            {
                name: "Pro",
                usdMonthly: 25, // $25/month billed monthly
                usdYearly: "variable", // Not explicitly stated for yearly, but likely a discount
                description: "70,000 credits per month. All features of the Indie plan.",
                pricingDetails: {
                    creditsPerMonth: 70000,
                    generate3DModels: "yes",
                    analyzeBlueprints: "yes",
                    ideIntegration: "yes",
                    screenViewAnswers: "yes",
                    allLudusAIFeatures: "yes"
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "All Ludus AI features. Custom usage limits. Self-hosted or private cloud option. Project-based C++ knowledge. Dedicated support.",
                pricingDetails: {
                    allLudusAIFeatures: "yes",
                    customUsageLimits: "yes",
                    selfHosted: "yes",
                    privateCloud: "yes",
                    projectBasedCPlusPlusKnowledge: "yes",
                    dedicatedSupport: "yes"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Limited AI model access. Limited 2D creation & editing. Realtime live canvas. Default styles library. 1GB storage.",
                pricingDetails: {
                    aiModelAccess: "limited",
                    d2dCreationEditing: "limited (600/month)",
                    realtimeLiveCanvas: "yes",
                    defaultStylesLibrary: "yes",
                    storageGB: 1
                }
            },
            {
                name: "Pro",
                usdMonthly: 30, // $25.50/month billed annually
                usdYearly: 306, // $25.50 * 12
                description: "Full AI model access. 2D creation & editing (Limited). 3D creation. Video creation & editing. Realtime live canvas. Default styles library. Custom style training. Batch operations. 50GB storage.",
                pricingDetails: {
                    aiModelAccess: "full",
                    d2dCreationEditing: "limited",
                    d3dCreation: "yes",
                    videoCreationEditing: "yes",
                    realtimeLiveCanvas: "yes",
                    defaultStylesLibrary: "yes",
                    customStyleTraining: "yes",
                    batchOperations: "yes",
                    storageGB: 50,
                    note: "Monthly price is $30/seat, annual price is $25.50/month per seat."
                }
            },
            {
                name: "Studio",
                usdMonthly: 149, // $126.66/month billed annually
                usdYearly: 1519.92, // $126.66 * 12
                description: "Full AI model access. 2D creation & editing. 3D creation. Video creation & editing. Realtime live canvas. Default styles library. Custom style training. Style sharing. Batch operations. 1TB + 500GB storage / seat. Limited account support.",
                pricingDetails: {
                    aiModelAccess: "full",
                    d2dCreationEditing: "yes",
                    d3dCreation: "yes",
                    videoCreationEditing: "yes",
                    realtimeLiveCanvas: "yes",
                    defaultStylesLibrary: "yes",
                    customStyleTraining: "yes",
                    styleSharing: "yes",
                    batchOperations: "yes",
                    storageGB: "1000 + 500 per seat",
                    accountSupport: "limited",
                    note: "Monthly price is $149/seat, annual price is $126.66/month per seat."
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "Full AI model access. 2D creation & editing. 3D creation. Video creation & editing. Realtime live canvas. Default styles library. Custom style training. Style sharing. Batch operations. 5TB + 1TB storage / seat. Dedicated account support. SOC II Compliance. SSO. SCIM. Audit logs.",
                pricingDetails: {
                    aiModelAccess: "full",
                    d2dCreationEditing: "yes",
                    d3dCreation: "yes",
                    videoCreationEditing: "yes",
                    realtimeLiveCanvas: "yes",
                    defaultStylesLibrary: "yes",
                    customStyleTraining: "yes",
                    styleSharing: "yes",
                    batchOperations: "yes",
                    storageGB: "5000 + 1000 per seat",
                    dedicatedAccountSupport: "yes",
                    soc2Compliance: "yes",
                    sso: "yes",
                    scim: "yes",
                    auditLogs: "yes"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free Plan",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Basic functionality with limited queue priority and Creative Commons licensing, perfect for experimenting.",
                pricingDetails: {
                    queuePriority: "limited",
                    licensing: "Creative Commons"
                }
            },
            {
                name: "Creator Plan",
                usdMonthly: 12,
                usdYearly: 144, // 12 * 12
                description: "Includes 1,500 Creative Units, 3 concurrent generations, and 15GB of storage—perfect for solo developers.",
                pricingDetails: {
                    creativeUnits: 1500,
                    concurrentGenerations: 3,
                    storageGB: 15
                }
            },
            {
                name: "Pro Plan",
                usdMonthly: 36,
                usdYearly: 432, // 36 * 12
                description: "Offers 5,000 Creative Units.",
                pricingDetails: {
                    creativeUnits: 5000
                }
            },
            {
                name: "Team Plan",
                usdMonthly: 120,
                usdYearly: 1440, // 120 * 12
                description: "Includes 20,000 Creative Units, and 100GB of storage.",
                pricingDetails: {
                    creativeUnits: 20000,
                    storageGB: 100
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Basic features for exploring the platform. Limited creative units and daily rate limits.",
                pricingDetails: {
                    dailyRateLimit: "limited",
                    concurrentGenerations: "limited"
                }
            },
            {
                name: "Pro",
                usdMonthly: 45, // Monthly price as listed, but also offers $36/month billed annually.
                usdYearly: 390, // $32.50 * 12 for the limited offer first year, or $36 * 12 = $432
                description: "The most comprehensive AI toolkit designed for creative professionals working solo. Includes 2,000 daily rate limit for generations, 5 concurrent generations, and ability to train own models.",
                pricingDetails: {
                    creativeUnits: "variable",
                    dailyRateLimit: 2000,
                    concurrentGenerations: 5,
                    trainOwnModels: "yes",
                    note: "Monthly price is $45, but often has promotional offers for lower annual rates."
                }
            },
            {
                name: "Team",
                usdMonthly: 150, // Monthly price per seat, also offers $120/month billed annually.
                usdYearly: 1800, // $150 * 12
                description: "For small/midsize teams requiring consistent creative workflows and scalable data management. Includes 15,000 Creative Units per seat, 15 concurrent generations, and priority support.",
                pricingDetails: {
                    creativeUnitsPerSeat: 15000,
                    concurrentGenerations: 15,
                    prioritySupport: "yes",
                    storageGB: 100,
                    note: "Price is per seat; monthly price is $150/seat, annual price is $120/month per seat."
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "Customizable limits, premium support, dedicated account management, and advanced security & compliance (SOC2/SSO/SAML).",
                pricingDetails: {
                    customizableLimits: "yes",
                    premiumSupport: "yes",
                    dedicatedAccountManagement: "yes",
                    securityCompliance: "SOC2/SSO/SAML"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "1 transcription hour/month. Export 720p, with watermarks. Limited trial of Basic AI Actions and AI Speech.",
                pricingDetails: {
                    transcriptionHoursPerMonth: 1,
                    exportResolution: "720p",
                    watermark: "yes",
                    aiActionsTrial: "limited",
                    aiSpeechTrial: "limited"
                }
            },
            {
                name: "Creator",
                usdMonthly: 12,
                usdYearly: 144, // $12 * 12
                description: "10 transcription hours/month. Export 1080p, watermark-free. 20 uses/month of Basic AI Actions. 30 minutes/month of AI speech. 5 minutes/month of avatars.",
                pricingDetails: {
                    transcriptionHoursPerMonth: 10,
                    exportResolution: "1080p",
                    watermark: "no",
                    basicAiActionsUses: 20,
                    aiSpeechMinutesPerMonth: 30,
                    avatarMinutesPerMonth: 5,
                    note: "Billed annually at $12/month per editor."
                }
            },
            {
                name: "Pro",
                usdMonthly: 24,
                usdYearly: 288, // $24 * 12
                description: "30 transcription hours/month. Export 4K, watermark-free. Unlimited Basic and Advanced AI Actions. 2 hours/month of AI speech. 30 minutes/month of dubbing in 20+ languages. 10 minutes/month of custom avatars. Unlimited access to royalty-free stock library.",
                pricingDetails: {
                    transcriptionHoursPerMonth: 30,
                    exportResolution: "4K",
                    watermark: "no",
                    aiActions: "unlimited (basic & advanced)",
                    aiSpeechMinutesPerMonth: 120,
                    dubbingMinutesPerMonth: 30,
                    customAvatarMinutesPerMonth: 10,
                    stockLibraryAccess: "unlimited",
                    note: "Billed annually at $24/month per editor."
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "Best for larger teams, producers, and agencies. Custom transcription hours, multi-language transcription, dedicated account representative, live onboarding & training.",
                pricingDetails: {
                    transcriptionHoursPerMonth: "custom",
                    multiLanguageTranscription: "yes",
                    dedicatedAccountRepresentative: "yes",
                    onboardingTraining: "yes"
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "125 one-time credits. Can't buy more credits. Can't remove watermarks or upscale resolution in Gen-1 and Gen-2. Limited video projects and asset storage.",
                pricingDetails: {
                    oneTimeCredits: 125,
                    watermarkRemoval: "no",
                    upscaleResolution: "no",
                    gen3AlphaTurboVideoSeconds: 10,
                    gen1VideoSeconds: 4,
                    gen2VideoSeconds: 16,
                    videoProjects: 3,
                    assetStorageGB: 5
                }
            },
            {
                name: "Standard",
                usdMonthly: 15, // Pricing found was $12/month or $15/month, using $15 as per original array.
                usdYearly: 144, // $12 * 12 if billed annually
                description: "625 credits per month. Credits reset monthly. Remove watermarks from video generations. Upscale resolution in Gen-1 and Gen-2. Unlimited video editor projects. 100GB assets.",
                pricingDetails: {
                    creditsPerMonth: 625,
                    watermarkRemoval: "yes",
                    upscaleResolution: "yes",
                    gen3AlphaTurboVideoSeconds: 10,
                    gen3AlphaVideoSeconds: 10,
                    gen1VideoSeconds: 15,
                    gen2VideoSeconds: 16,
                    videoEditorProjects: "unlimited",
                    assetStorageGB: 100,
                    note: "Often billed annually at $12/month per user."
                }
            },
            {
                name: "Pro",
                usdMonthly: 35, // Pricing found was $28/month, but original array lists $15/mo for "Pro" plan. Adjusting to be more accurate based on search.
                usdYearly: 336, // $28 * 12
                description: "2250 credits per month. Includes features of Standard Plan, plus create custom voices for Lip Sync and Text-to-Speech. 500GB assets.",
                pricingDetails: {
                    creditsPerMonth: 2250,
                    customVoices: "yes",
                    assetStorageGB: 500,
                    note: "Often billed annually at $28/month per user."
                }
            },
            {
                name: "Unlimited",
                usdMonthly: 95, // Pricing found was $76/month, but original array lists $15/mo for "Pro" plan. Adjusting to be more accurate based on search.
                usdYearly: 912, // $76 * 12
                description: "Unlimited video generations. Includes features of Pro Plan, plus unlimited access to Frames. Unlimited generations of Gen-1, Gen-2, Gen-3 Alpha, Gen-3 Alpha Turbo, and Act-One in Explore Mode at Relaxed Rate. Credits (With No Rate Restrictions) reset to 2250 every month. Buy more as Needed.",
                pricingDetails: {
                    videoGenerations: "unlimited",
                    accessToFrames: "unlimited",
                    gen1Generations: "unlimited",
                    gen2Generations: "unlimited",
                    gen3AlphaGenerations: "unlimited",
                    gen3AlphaTurboGenerations: "unlimited",
                    actOneGenerations: "unlimited",
                    creditsPerMonth: 2250,
                    note: "Often billed annually at $76/month per user."
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Basic tools, 250,000+ templates, 5GB storage, limited stock photos & videos. No Brand Kit or advanced AI tools.",
                pricingDetails: {
                    templates: "250,000+",
                    storageGB: 5,
                    brandKit: "no",
                    aiTools: "limited"
                }
            },
            {
                name: "Pro",
                usdMonthly: 12.99,
                usdYearly: 119.99,
                description: "100GB storage, 610,000+ premium templates, 100M+ assets, Brand Kit, background remover, Magic Resize, and more advanced design tools.",
                pricingDetails: {
                    storageGB: 100,
                    templates: "610,000+",
                    assets: "100M+",
                    brandKit: "yes (up to 100)",
                    backgroundRemover: "yes",
                    magicResize: "yes",
                    aiGenerationUsesPerMonth: 500
                }
            },
            {
                name: "Canva for Teams",
                usdMonthly: 14.99, // Per user, with a 3-user minimum ($44.97/month for 3 users)
                usdYearly: 149.90, // Per user, with a 3-user minimum ($449.70/year for 3 users)
                description: "All Pro features plus team collaboration tools, brand controls, 1TB storage. Minimum 3 users required.",
                pricingDetails: {
                    storageGB: 1000,
                    collaborationTools: "yes",
                    brandControls: "yes",
                    minimumUsers: 3,
                    note: "Price is per user; annual price is $149.90/year per user, monthly is $14.99/month per user."
                }
            },
            {
                name: "Enterprise",
                usdMonthly: "custom",
                usdYearly: "custom",
                description: "SSO, advanced controls, asset management, dedicated support, custom storage, audit logs, and API access.",
                pricingDetails: {
                    sso: "yes",
                    assetManagement: "yes",
                    dedicatedSupport: "yes",
                    customStorage: "yes",
                    auditLogs: "yes",
                    apiAccess: "yes"
                }
            },
            {
                name: "Canva for Education",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Free access to Canva Pro for eligible K-12 teachers and students. Includes class management tools and LMS integrations.",
                pricingDetails: {
                    access: "Canva Pro features",
                    eligibleUsers: "K-12 teachers and students",
                    classManagementTools: "yes",
                    lmsIntegrations: "yes"
                }
            },
            {
                name: "Canva for Nonprofits",
                usdMonthly: 0,
                usdYearly: 0,
                description: "Free access to Canva Teams for up to 50 users (with approval). Includes premium features, brand management, and 100 GB storage per user.",
                pricingDetails: {
                    access: "Canva Teams features",
                    eligibleUsers: "registered 501(c)(3) and global charities",
                    maxUsers: 50,
                    brandManagement: "yes",
                    storageGBPerUser: 100
                }
            }
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
        ],
        subscriptions: [
            {
                name: "Free Plan",
                usdMonthly: 0,
                usdYearly: 0,
                description: "3 social profiles, 1 user. Tools for planning and publishing. Media and engagement tools. AI Assistant. Content finders. Reports. Access to link-in-bio tool.",
                pricingDetails: {
                    socialProfiles: 3,
                    users: 1,
                    aiAssistant: "yes",
                    contentFinders: "yes",
                    reports: "yes",
                    linkInBioTool: "yes"
                }
            },
            {
                name: "Standard Plan",
                usdMonthly: 39,
                usdYearly: 468, // 39 * 12
                description: "8 profiles, 1 user. Includes features of Free Plan, plus more.",
                pricingDetails: {
                    socialProfiles: 8,
                    users: 1
                }
            },
            {
                name: "Professional Plan",
                usdMonthly: 79,
                usdYearly: 948, // 79 * 12
                description: "15 profiles, 5 users. Standard features in the Pro plan, plus bulk and report scheduling, review management, post workflow, listening tool, and tools for collaboration.",
                pricingDetails: {
                    socialProfiles: 15,
                    users: 5,
                    bulkScheduling: "yes",
                    reportScheduling: "yes",
                    reviewManagement: "yes",
                    postWorkflow: "yes",
                    listeningTool: "yes",
                    collaborationTools: "yes"
                }
            },
            {
                name: "Advanced Plan",
                usdMonthly: 149,
                usdYearly: 1788, // 149 * 12
                description: "30 profiles, 10 users. Standard features in the professional plan, plus advanced scheduling, workflows, and reporting. Unlimited AI assistance. Integrations.",
                pricingDetails: {
                    socialProfiles: 30,
                    users: 10,
                    advancedScheduling: "yes",
                    advancedWorkflows: "yes",
                    advancedReporting: "yes",
                    unlimitedAiAssistance: "yes",
                    integrations: "yes"
                }
            },
            {
                name: "Enterprise",
                usdMonthly: 379, // Starting from
                usdYearly: "custom",
                description: "Custom pricing for larger organizations.",
                pricingDetails: {
                    customPricing: "yes",
                    note: "Starting from $379/month"
                }
            }
        ]
    }


];