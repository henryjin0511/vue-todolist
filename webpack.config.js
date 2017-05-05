function buildConfig(env) {
	return require('./build/webpack.' + env + '.config.js')({ env: env })
}
module.exports = buildConfig(process.env.NODE_ENV);