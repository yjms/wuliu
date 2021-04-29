<template>
	<view class="whole">
		<view class="centerBox">
			<view class="itemBox" :class="it.status==1?'final':'wling'" v-for="(it,index) in dataList" :key="it">
				<view class="statusTxt">{{it.statusTxt}}</view>
				<view class="rigInfo">
					<text class="time">2012-03-03 09:41</text>
					<text>{{it.info}}</text>
					<view class="start"   v-show="index == (dataList.length-1)">发</view>
					<view class="end" v-show="index == 0">收</view>
					<view class="startbox"  :class="it.status==1?'hsbox':'lsbox'" v-show="index ==0 || index == (dataList.length-1)"></view>
					<view class="center" :class="it.status==1?'hsbox':'lsbox'" v-show="index !=0 && index != (dataList.length-1)"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						status:1,
						statusTxt:'已取件',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'运送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:1,
						statusTxt:'派送中',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					},
					{
						status:2,
						statusTxt:'已签收',
						time:'2012-03-03 09:41',
						info:"您的快件代签收（驿站）,如有疑问请电联快递员【翼龙，电话176736155001】。疫情期间顺丰每日对网点消毒、快递员每日测温、佩戴口罩，感谢您使用顺丰，期待在次为您服务。",
					}
				]
			}
		},
		mounted(){
			this.dataList = this.dataList.reverse();
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
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
	.centerBox{
		padding-top: 36upx;
	}
	.itemBox{
		display: flex;
		width: 100%;
		padding:0upx 66upx 50upx 40upx;
		box-sizing: border-box;
	}
	.statusTxt{
		font-size: 32upx;
		color: $all-font-Tcolor;
		font-weight: bold;
	}
	.rigInfo{
		display: flex;
		flex-direction: column;
		flex: 1;
		text-align: justify;
		padding-left: 50upx;
		box-sizing: border-box;
		margin-left: 34upx;
		position: relative;
		font-size: 28upx;
	}
	.itemBox>.rigInfo::before{
		content: "";
		width: 0upx;
		height: 50upx;
		border-left: 2upx dashed $all-font-Hcolor;
		position: absolute;
		left: 0;
		top: 0;
	}
	.itemBox:not(:last-child)>.rigInfo::before{
		height:calc(100% + 50upx);
	}
	.time{
		font-size: 28upx;
	}
	.final,.final>.statusTxt{
		color: #888;
	}
	.final>.statusTxt{
		font-size: 32upx;
		font-weight: bold;
	}
	.start,.end{
		position: absolute;
		left: 0;
		top: 0;
		transform: translateX(-50%);
		z-index: 99;
		font-size: 26upx;
		line-height: 42upx;
		color: #fff !important;
	}
	.startbox,.center{
		width: 46upx;
		height: 46upx;
		background-color: $all-font-Tcolor;
		border-radius: 8upx;
		position: absolute;
		left: 0;
		top: 0;
		transform: translateX(-50%) rotate(45deg);
	}
	.center{
		width: 20upx;
		height: 20upx;
		top: 16upx;
	}
	.hsbox{
		background-color: #dedede;
	}
</style>
