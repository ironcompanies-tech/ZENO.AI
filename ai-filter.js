function selectAI(message) {
    const text = message.toLowerCase();

    if (
        text.includes("code") ||
        text.includes("javascript") ||
        text.includes("python") ||
        text.includes("html") ||
        text.includes("css") ||
        text.includes("program")
    ) {
        return "coding";
    }

    if (
        text.includes("image") ||
        text.includes("picture") ||
        text.includes("draw") ||
        text.includes("generate an image")
    ) {
        return "image";
    }

    if (
        text.includes("research") ||
        text.includes("latest") ||
        text.includes("news") ||
        text.includes("find information")
    ) {
        return "research";
    }

    return "general";
}
