/** @type {import('bd-scss/lib/config').Config} */
export default {
    meta: {
        name: "Virtual Boy - Edit",
        author: "Saltssaumure | v1.1 original by Riddim_GLiTCH",
        version: "1.2 edit",
        description: "An SCSS-ified edit of https://github.com/Riddim-GLiTCH/Virtual-Boy. See the original for usage info.",
        source: "https://github.com/MiniDiscordThemes/Virtual-Boy",
        invite: "uy8nKQVatp",
    },
    fileName: "virtual-boy-edit",
    baseImport: "https://minidiscordthemes.github.io/Virtual-Boy/virtual-boy.css",
    addons: [
        ["src/addon/_messageboxes.scss", "dist/MessageBoxes.css"],
        ["src/addon/_textglow.scss", "dist/TextGlow.css"]
    ]
};
