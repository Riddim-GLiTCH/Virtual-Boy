/** @type {import('bd-scss/lib/config').Config} */
export default {
    meta: {
        name: "Virtual Boy",
        author: "Riddim_GLiTCH",
        version: "1.1",
        description: "A theme based on a failed nintendo console with the same name.",
        source: "https://github.com/Riddim-GLiTCH/Virtual-Boy",
        invite: "aYxpgkvdvR",
        authorId: "801089753038061669"
    },
    fileName: "virtual-boy",
    baseImport: "https://riddim-glitch.github.io/Virtual-Boy/dist/virtual-boy.css",
    addons: [
        ["src/addons/_messageboxes.scss", "dist/MessageBoxes.css"],
        ["src/addons/_textglow.scss", "dist/TextGlow.css"]
    ]
};
