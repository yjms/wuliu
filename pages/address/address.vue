<template>
	<view class="whole">
		<view class="bgWhile setbuttom">
			<view class="header row">
				<view class="jjadd" :class="currTab==1?'tabAct':''" @click="changTab(1)">
					寄件地址
				</view>
				<view class="sjadd" :class="currTab==2?'tabAct':''" @click="changTab(2)">
					收件地址
				</view>
			</view>
			<view class="searchIpt flex_col row1 bgWhile">
				<text class="iconfont icon-chazhao"></text>
				<input type="text" placeholder="输入姓名、电话、地址快速查找" />
			</view>
		</view>
		<view class="nodataBox" v-if="!hasData">
			<Nodata></Nodata>
		</view>
		<view class="ullist" v-if="hasData">
			
			<view class="ulitem row bgWhile flex_col">
				<view class="leftinfo">
					<view class="ltop flex_col">
						<view>
							<text>张三</text>
							<text class="photoTxt">182****9006</text>
						</view>
						<view class="defaults">默认</view>
					</view>
					<view class="lcenter">
						<text>北京-北京市-东城区</text>
					</view>
					<view class="lfoot">
						还是经济特区
					</view>	
				</view>
				<view class="editBox iconfont icon-bianjimian" @click="editAddress"></view>
				<view class="delBox iconfont icon-shanchu" @click="delAddress"></view>
			</view>
			
			<view class="ulitem row bgWhile flex_col">
				<view class="leftinfo">
					<view class="ltop flex_col">
						<view>
							<text>张三</text>
							<text class="photoTxt">182****9006</text>
						</view>
						<view class="defaults">默认</view>
					</view>
					<view class="lcenter">
						<text>北京-北京市-东城区</text>
					</view>
					<view class="lfoot">
						还是经济特区
					</view>	
				</view>
				<view class="editBox iconfont icon-bianjimian" @click="editAddress"></view>
				<view class="delBox iconfont icon-shanchu" @click="delAddress"></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Nodata from "@/pages/components/nodata.vue"
	export default {
		components:{
			Nodata
		},
		data() {
			return {
				hasData:true,// 是否有数据	
				currTab:1
			}
		},
		mounted(){
			
		},
		methods:{
			changTab(tab){
				this.currTab = tab;
			},
			editAddress(){
				// 编辑地址
				this.$tool.jump_nav("/pages/editaddress/editaddress")
			},
			delAddress(){
				// 删除地址
				console.log("删除地址")
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 公共样式
	.bgWhile{
		background-color: #FFFFFF;
	}
	.row{
		width: 100%;
		padding: 0 28upx;
		box-sizing: border-box;
	}
	.row1{
		width: calc(100vw - 56upx);
		margin: 0 auto;
	}
	.flex_row{ // 横向居中 flex
		display: flex;
		justify-content: center;
		box-sizing: border-box;
	}
	.flex_col{// 纵向居中flex
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.whole{
		width: 100vw;
		height: 100vh;
		background-color: $self-body-bgColor;
		display: flex;
		flex-direction: column;
	}
	.header{
		display: flex;
		height: 100upx;
		justify-content: space-around;
		align-items: center;
		>.jjadd,.sjadd{
			// width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: $all-font-Hcolor;
			padding-bottom: 20upx;
			box-sizing: border-box;
		}
		.tabAct::before{
			position: absolute;
			content: "";
			width: 100%;
			height: 4upx;
			background-color: $all-font-Tcolor;
			bottom: 0;
		}
		.tabAct{
			position: relative;
			color: $all-font-Tcolor;
		}
	}
	.searchIpt{
		height: 64upx;
		border-radius: 38upx;
		background-color: #EBF0F1;
		padding: 0 24upx;
		text{
			font-size: 50upx;
			color: $all-font-Hcolor;
		}
		>input{
			flex: 1;
			margin-left: 16upx;
			font-size: 30upx;
		}
	}
	.setbuttom{
		padding-bottom: 12upx;
	}
	.ullist{
		margin-top: 10upx;
		display: flex;
		flex-direction: column;
		.ulitem:not(:last-child){
			border-bottom: 1upx solid #dedede;
		}
		.ulitem{
			width: 100%;
			height: 200upx;
			// display: flex;
		}
	}
	.ullist .leftinfo>.ltop{
		width: 468upx;
		margin-bottom: 18upx;
		justify-content: space-between;
		text{
			font-size: 30upx;
			color: #333;
		}
		.photoTxt{
			margin-left: 16upx;
		}
		.defaults{
			width: 85upx;
			height: 32upx;
			border-radius: 18upx;
			background-color: #FA9231;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28upx;
			color: #fff;
		}
	}
	.leftinfo>.lcenter,.leftinfo>.lfoot{
		font-size: 30upx;
		color: #333;
		margin-bottom: 18upx;
	}
	.leftinfo>.lfoot{
		margin: 0;
	}
	.editBox,.delBox{
		margin-left: 20upx;
		border: 1upx solid #dedede;
		height: 60upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: none;
		border-bottom: none;
		width: 104upx;
		color: $all-font-Tcolor;
		font-size: 44upx;
	}
	.delBox{
		margin: 0;
		border: none;
	}
	.nodataBox{
		flex: 1;
		width:100vw;
		// background-color: red;
	}
</style>
