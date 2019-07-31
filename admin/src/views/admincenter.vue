<template>
	<div class="admincenter">
		<my-header></my-header>
		<div class="header-placeholder"></div>
		<div class="container">
			<div class="content">
				<div class="main">
					<div class="info-content clearfix">
						<my-aside></my-aside>
                     <router-view></router-view>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	
}
	
</script>

<style scoped="scoped">
.header-placeholder {
	height: 81px;
}
.container {
	width: 1200px;
	margin: 0 auto;
}
.content {
	overflow: hidden;
	margin-top: 30px;
}
.main {
	padding: 0 18px;
}
.info-content {
	border: 1px solid #e1e1e1;
	position: relative;
}
.clearfix:after,
.clearfix:before {
	content: ' ';
	display: table;
}
.clearfix:after {
	clear: both;
}


</style>
