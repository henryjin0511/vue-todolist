<template>
	<div class="page">
		<header class="title">
			<router-link class="back" :to="{path:'/'}"></router-link>
			<h2>添加</h2>
		</header>
		<section class="content">
			<div class="form-group">
				<textarea v-model="content"></textarea>
			</div>
			<div class="btn-group">
				<button @click="addItem()" type="button">提交</button>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				content: '',
			}
		},
		methods:{
			addItem () {
				let item = {};
				let len = this.$store.state.list.length;
				let tem = {
					status:0,
					itemId:++len
				};
				console.log(tem.itemId);
				item.content = this.content;
				item.date = (()=>{
					let date = new Date();
					return date.getFullYear() + '-' + date.getMonth()+1 + '-' + date.getDate();
				})();
				Object.assign(tem,item);
				this.$store.dispatch('addItem',tem);
				console.log(this.$route);
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang="scss">
	.content {
		.form-group {
			padding: 0.2rem;

			textarea {
				width: 100%;
				padding: 0.1rem;
				height: 1.8rem;
				line-height: 0.4rem;
				border-radius: 3px;
				border-color: lightslategrey;
			}
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
				background-color: #5bc0de;
				color: #fff;
				border: 1px solid #28a4c9;
				border-radius: 3px;
				box-shadow: 0 0 5px #00a0e9;
				text-decoration: none;
			}
		}


	}
</style>