<template>
	<view class="content">
		<view class="header">
			<image src="../../static/image/banner.jpg"></image>
		</view>
		<view class="ullist">
			<view class="items">
				<view class="iconBox iconfont icon-yuyue">
					
				</view>
				<view class="titleBox" @click="jump(1)">
				   <text class="itemTitle">预约寄件</text>
				   <text class="itemDle">支持2小时上门取件</text>
				</view>
			</view>
			
			<view class="items">
				<view class="iconBox iconfont icon-B">
					
				</view>
				<view class="titleBox" @click="jump(2)">
				   <text class="itemTitle">查询快件</text>
				   <text class="itemDle">支持2小时上门取件</text>
				</view>
			</view>
			
			<view class="items">
				<view class="iconBox iconfont icon-tubiao_kucun">
					
				</view>
				<view class="titleBox" @click="jump(3)">
				   <text class="itemTitle">查看库存</text>
				   <text class="itemDle">支持2小时上门取件</text>
				</view>
			</view>
			
			<view class="items">
				<view class="iconBox iconfont icon-mingxi">
					
				</view>
				<view class="titleBox" @click="jump(4)">
				   <text class="itemTitle">发货明细</text>
				   <text class="itemDle">支持2小时上门取件</text>
				</view>
			</view>
			<view class="items">
				<view class="iconBox iconfont icon-lianxiwomen">
					
				</view>
				<view class="titleBox" @click="linkOur">
				   <text class="itemTitle">联系我们</text>
				   <text class="itemDle">支持2小时上门取件</text>
				</view>
			</view>
		</view>
		<!-- 关注公众号的盒子 -->
		<view class="gzhBox">
			<view class="close iconfont icon-guanbi"></view>
			<text>关注公众号，随时接收物流消息</text>
			<button type="default" class="gzBtn">去关注</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '这是首页'
			}
		},
		onLoad() {

		},
		methods: {
			jump(nav){
				console.log(nav);
				if(nav == 2){
					this.$tool.jump_switch("/pages/checkSite/checkSite")
					return
				}
				let arr = ["/pages/appoint/appoint",
						,`/pages/orderlist/orderlist?ix=${nav}`,
						`/pages/orderlist/orderlist?ix=${nav}`
				]
				this.$tool.jump_nav(arr[nav - 1]);
			},
			jump_nav(){
				tools.jump_nav('/pages/checklogistics/checklogistics');
			},
			linkOur(){
				uni.makePhoneCall({
				    phoneNumber: '0738-6608' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		background-color:$self-body-bgColor;
	}
	.header{
		width: $all-width;
		height: 261upx;
		border-radius: 20upx;
		// background-color: $uni-color-primary;
		margin-top: 18upx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		overflow: hidden;
		// background:  no-repeat /100% 100%;
	}
	.header>image{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.ullist{
		width: $all-width;
		display: flex;
		flex-wrap: wrap;
		margin-top: 17upx;
		border-radius: 20upx;
		overflow: hidden;
		background-color: #FFFFFF;
		.items{
			width: 50%;
			height: 172upx;
			background-color: #FFFFFF;
			box-sizing: border-box;
			display: flex;
			border-bottom:2upx solid #EFEFEF;
			align-items: center;
			justify-content: center;
			padding-left: 18upx;
			box-sizing: border-box
		}
	}
	.ullist>.items:nth-child(2n+1){
		border-right:2upx solid #EFEFEF;
	}
	.iconBox{
		width: 62upx;
		height: 62upx;
		border-radius: 50%;
		background-color: #DEECFF;
	}
	.titleBox{
		padding-left: 12upx;
		box-sizing: border-box;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.itemTitle,.itemDle{
		color: #333;
		font-weight: bold;
		font-size: 28upx;
	}
	.itemDle{
		color: #A2A2A2;
		font-weight: 400;
		margin-top: 18upx;
	}
	.gzhBox{
		width: $all-width;
		background-color: #484848;
		height: 94upx;
		border-radius: 47upx;
		display: flex;
		position: fixed;
		bottom: 80upx;
		// margin-top: 18upx;
		align-items: center;
		padding: 0 32upx;
		box-sizing: border-box;
		justify-content: space-between;
		text{
			color: #FFFFFF;
			font-size: 28upx;
			// margin-left: 28upx;
		}
		.close{
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFFFFF;
			font-size: 46upx;
		}
		.gzBtn{
			// #6D6D6D #5897E3
			width: 165upx;
			height: 60upx;
			border-radius: 30upx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FFFFFF;
			font-size: 26upx;
			margin: 0;
			background-image:linear-gradient(to right,#5097E8,#377BFB) ;
		}
	}
	.iconBox{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 42upx;
		color: #5C96FC;
	}
</style>
