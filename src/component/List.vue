<template>
	<div class="page">
		<header class="title">
			<h2>待完成事项</h2>
		</header>
		<section>
			<div class="content">
				<div class="content-btn">
					<router-link :to="{name:'Add'}">添加事项</router-link>
				</div>
				<ul class="content-list">
					<li>
						<p>事件</p>
						<a href="javascript:;">状态</a>
						<a href="javascript:;">操作</a>
					</li>
					<template v-if="Object.keys(items).length > 0">
						<li v-for="item in items" class="cl">
							<template v-if="parseInt(item.status) === 0">
								<p v-text="item.content"></p>
								<a class="status">未完成</a>
								<router-link class="unfinished" :to="{name:'Detail',params:{itemId:item.itemId}}">查看</router-link>
							</template>
							<template v-else>
								<p><del v-text="item.content"></del></p>
								<a class="status"><del>已完成</del></a>
								<router-link class="finished" :to="{name:'Detail',params:{itemId:item.itemId}}">查看</router-link>
							</template>
						</li>
					</template>
					<template v-else>
						<li class="nomore">暂无信息</li>
					</template>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		created () {
			return this.$store.dispatch('initData');
		},
		computed: {
			items () {
				return this.$store.state.list;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content-btn {
		padding: 0.2rem 0.3rem;

		a {
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
	.content-list{
		border: 1px solid #e4e4e4;
		border-bottom: 0;
		list-style: none;
		background: #ffffff;

		li {
			display: flex;
			padding: 0 0 0 0.26rem;
			border-bottom: 1px solid #e4e4e4;
			line-height: 0.6rem;
			font-size: 0.24rem;

			p {
				flex: 1;
				width: 0%;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			a{
				width: 1rem;
				text-align: center;

				&.finished{
					color: #0082fa;
				}

				&.unfinished{
					color: #ff5357;
				}
			}

			&:first-child {
				a {
					text-decoration: none;
					color: #333;
				}
			}

			&.nomore {
				justify-content: center;
			}
		}
	}
</style>