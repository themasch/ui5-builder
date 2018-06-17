const AbstractBuilder = require("../AbstractBuilder");
const tasks = { // can't require index.js due to circular dependency
	uglify: require("../../tasks/uglify")
};

class ModuleBuilder extends AbstractBuilder {
	constructor({resourceCollections, project, parentLogger}) {
		super({project, parentLogger});

		// All available library tasks in execution order
		this.availableTasks = [
			"uglify"
		];

		this.addTask("uglify", () => {
			const uglify = tasks.uglify;
			return uglify({
				workspace: resourceCollections.workspace,
				options: {
					pattern: "/**/*.js"
				}
			});
		});
	}
}

module.exports = ModuleBuilder;
