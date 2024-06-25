import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// Load environment variables based on the current mode
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: env.VITE_USER_BASE_URI + ":8081",
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
	};
});
