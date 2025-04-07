import {
	containerPlugin,
	ContainerPluginOptions,
} from "@vuepress/plugin-container";

export const option: ContainerPluginOptions = {
	type: "ques",
	before(b) {
		return `<Ques ${b} >`;
	},
	after() {
		return `</Ques>`;
	},
};

export const plugin = containerPlugin(option);

export default plugin;
