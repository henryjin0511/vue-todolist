<template>
	<div class="page">
		<header class="title">
			<router-link class="back" :to="{path:'/'}"></router-link>
			<h2>详情</h2>
		</header>
		<section class="content">
			<p class="date" v-text="cur.date"></p>
			<p class="text" v-text="cur.content"></p>
			<template v-if="cur.status === 1">
				<div class="btn-group">
					<button @click="markOn()" type="button">未完成</button>
				</div>
			</template>
			<template v-else>
				<div class="btn-group">
					<button @click="markOff()" type="button">已完成</button>
				</div>
			</template>
			<div class="btn-group">
				<button @click="removeItem()" type="button">删除</button>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'detail',
		computed: {
			cur () {
				let tarObj = null;
				let itemId = this.$route.params.itemId;
				let status = 0;
				this.$store.state.list.every((ele,index)=>{
					if(ele.itemId === itemId){
						status = ele.status;
						tarObj = ele;
						return false;
					}
					return true
				});
				return tarObj || {content:'', date:'', status:status};
			}
		},
		methods: {
			removeItem () {
				if(confirm('确认删除当前项吗？')) {
					this.$store.dispatch('removeItem',this.$route.params.itemId);
					this.$router.go(-1);
				}
			},
			markOff () {
				if(confirm('确认标记为已完成？')) {
					this.$store.dispatch('markOff',this.$route.params.itemId);
					this.$router.go(-1);
				}
			},
			markOn () {
				if(confirm('确认标记为未完成？')) {
					this.$store.dispatch('markOn',this.$route.params.itemId);
					this.$router.go(-1);
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.content {
		.date {
			margin-top: 0.2rem;
			font-size: 0.36rem;
			text-align: center;
		}

		.text {
			width: 100%;
			padding: 0.2rem;
			font-size: .24rem;
			word-break: break-all;
		}

		.btn-group {
			padding: 0.2rem;
			button {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				display:block;
				width: 100%;
				height: 0.6rem;
				line-height: 0.6rem;
				font-size: 0.3rem;
				text-align: center;
				background-image: linear-gradient(to bottom,#00a0e9 0,#2aabd2 100%);
				background-color: #2aabd2;
				color: #fff;
				border: 1px solid #2aabd2;
				border-radius: 3px;
				box-shadow: 0 0 5px #00a0e9;
				text-decoration: none;
			}

			&:last-child {
				button {
					background-image: linear-gradient(to bottom,#cf585b 0,#d1494d 100%);
					background-color: #d1494d;
					border: 1px solid #d1494d;
					box-shadow: 0 0 5px #cf585b;
				}
			}
		}


	}
</style>