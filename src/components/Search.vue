<template>
	<div v-if="!Keyword">キーワードを入力してください</div>
	{{Keyword}}
	{{items}}
</template>
<script>
	import {Search} from './../services/Search'
	
	export default {
		data(){
			return{
				results:{
					total:0,
					items: []
				}
			}
		},
		computed:{
			Keyword:function(){
				var Keyword = this.$route.query.q;
				if(Keyword != undefined && Keyword.length > 1){
					return Keyword;
				}
				return;
			},
			Page:function(){
				var Page = this.$route.query.p;
				if(Page != undefined && Page > 0 && Page <=100){
					return Page;
				}
				return 1
			},
			PriceFrom:function(){
				var PriceFrom = this.$route.query.pfrom;
				if(PriceFrom != undefined && PriceFrom >0){
					return PriceFrom;
				}
				return;
			},
			PriceTo:function(){
				var PriceTo = this.$route.query.pfrom;
				if(PriceTo != undefined && PriceTo >0){
					return PriceTo;
				}
				return;
			},
			Sort: function(){
				var Sort = this.$route.query.sort;
				if(Sort != undefined && Keyword.length >= 1){

				}
				return;
			},
			Category: function(){
				var Category = this.$route.query.c;
				if(Sort != undefined && Keyword.length >= 1){

				}
				return;
			}
		},
		created:function(){
			this.doSearch();

		},
		methods: {
			doSearch:function(){
				Search(this,{
					Keyword: this.Keyword,
					Page:this.Page,
					PriceFrom: this.PriceFrom,
					PriceTo: this.PriceTo
				});
			}
		}
	}
</script>