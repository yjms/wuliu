<template>
	<view class="whole2">
		<view class="ulbox">
			<view class="itemBox row1 bgWhile" v-for="it in 8">
				<view class="orederTop flex_col">
					<text>订单编号: 123456789123323321</text>
					<text class="gName setOver">品名: ooooo</text>
				</view>
				<view class="orderCenter">
					<view class="delRow flex_col">
						<text>件数:10000</text>
						<text>重量:100</text>
					</view>
					<view class="delRow flex_col">
						<text>体积:6</text>
						<text>签收单:已返回</text>
					</view>
					<!-- <view class="delRow flex_col">
						<text>客户签收:是</text>
						<text>代收款:10000</text>
					</view> -->
					<!-- <view class="delRow flex_col address">
						<text class="addtxt">收货地址:湖南省长沙市开福区北城三加州湖南省长沙市开福区北城三加州</text>
					</view> -->
				</view>
				<view class="orderFoot flex_col">
					<view class="imgBtn flex_center" @click="previewImage">
						签收单
					</view>
					<view class="delbtn flex_center">
						查看详情
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			previewImage(){
				//预览轮播图
				    let imageList = ["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=966038593,805734814&fm=26&gp=0.jpg"];
						//uniapp预览轮播图
						uni.previewImage({
							current:0, //预览图片的下标
							urls:imageList //预览图片的地址，必须要数组形式，如果不是数组形式就转换成数组形式就可以
						})
			}
		}
	}
</script>

<style lang="scss">
	// 公共样式
	.setOver{
		overflow: hidden;
		text-overflow:ellipsis; 
		white-space: nowrap;
	}
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
	.flex_center{
		justify-content: center;
		align-items: center;
		display: flex;
		box-sizing: border-box;
	}
	.whole2{
		width: 100vw;
		min-height:100vh;
		letter-spacing: 1upx;
		background-color: $self-body-bgColor;
	}
	.ulbox{
		padding-top: 18upx;
	}
	.itemBox{
		border-radius: 8upx;
		padding: 16upx;
		box-sizing: border-box;
		font-size: 30upx;
		color: #666;
		margin-bottom: 10upx;
	}
	.orederTop{
		justify-content: space-between;
		padding-bottom: 20upx;
		border-bottom: 1upx solid #dedede;
	}
	.orderCenter>.delRow{
		width: 100%;
		text{
			width: 50%;
			line-height: 60upx;
		}
	}
	.address>text.addtxt{
		width: 100%;
		line-height: 40upx;
	}
	.gName{
		width: 180upx;
	}
	
	.orderFoot{
		width: 100%;
		border-top: 1upx solid #dedede;
		margin-top: 20upx;
		font-size: 30upx;
		justify-content: flex-end;
		view{
			width: 180upx;
			height: 60upx;
			background-color: $all-font-Tcolor;
			color: #FFFFFF;
			border-radius: 35upx;
			margin:20upx 10upx;
		}
		.imgBtn{
			background-color:#fff;
			color: $all-font-Hcolor;
			border: 1upx solid;
			
		}
	}
	
</style>
