/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				LightRed: "#FF5656",
				OrangeYellow: "#FFB01E",
				GreenTeal: "#00BC90",
				CobaltBlue: "#1124D4",
				LightSlateBlue: "#7856FF",
				LightRoyalBlue: "#2D2AE8",
				VioletBlue: "#4D20C9",
				PersianBlue: "#2220C5",
				PaleBlue: "#EAF1FF",
				LightLavender: "#C7C6FF",
				DarkGrayBlue: "#303B59",
			},
			fontSize: {
				paragraph: "18px",
			},
		},
		fontFamily: {
			hanek: ["Hanken Grotesk", "sans-serif"],
		},
	},
	plugins: [],
};
