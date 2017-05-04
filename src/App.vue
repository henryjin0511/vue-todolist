<template id="app">
	<div class="page">
		<div class="header"></div>
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				transitionName: 'slide-left'
			}
		},
		watch: {
			'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				if(toDepth === fromDepth && to.path.indexOf('add') !== -1){
					this.transitionName = 'slide-top'
				}else if(toDepth === fromDepth && to.path.indexOf('list') !== -1) {
					this.transitionName = 'slide-bottom'
				}else {
					this.transitionName = toDepth > fromDepth ? 'slide-left' : 'slide-right'
				}
			}
		}
	}
</script>
<style scoped>
	.header {
		width: 100%;
		height: 46px;
		position: absolute;
		top: 0;
		left: 0;
		background: #ff5357;
	}
</style>
