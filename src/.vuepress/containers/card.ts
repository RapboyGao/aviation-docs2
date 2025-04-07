import {
	containerPlugin,
	ContainerPluginOptions,
} from "@vuepress/plugin-container";

export const option: ContainerPluginOptions = {
	type: "card",
	before(b) {
		return `<div class="question-card">`;
	},
	after() {
		return `</div>`;
	},
};

export const plugin = containerPlugin(option);

export default plugin;
