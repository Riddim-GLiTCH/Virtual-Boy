/** @type {import('bd-scss/lib/config').Config} */
export default {
    meta: {
        name: "Virtual Boy",
        author: "Riddim_GLiTCH",
        version: "1.3.2",
        description: "A theme based on a failed Nintendo console with the same name.",
        source: "https://github.com/Riddim-GLiTCH/Virtual-Boy",
        invite: "aYxpgkvdvR",
        authorId: "801089753038061669"
    },
    fileName: "virtual-boy",
    baseImport: "https://Riddim-GLiTCH.github.io/Virtual-Boy/virtual-boy.css",
    addons: [
        ["src/addon/_messageboxes.scss", "dist/MessageBoxes.css"],
        ["src/addon/_textglow.scss", "dist/TextGlow.css"]
    ]
};
