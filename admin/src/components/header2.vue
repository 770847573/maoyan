<template>
	<header class="header--mini">
    <div class="wrapper cf">
        <a class="site-logo" href="http://www.maoyan.com">美团</a>
    </div>
</header>
</template>

<script>
</script>

<style scoped="scoped">
	.header--mini {
    border-bottom-color: #e02025;
	border-bottom: 2px solid ;
    min-width: 980px;
    color: #666;
}
.header--mini .wrapper {
    margin: 0 auto;
    padding: 10px 0;
    width: 980px;
}
.cf {
    zoom: 1;
}
.header--mini .site-logo {
    width: 133px;
    background-position: -536px -748px;
    background-image: url(../../img/big.png);
    height: 40px;
    margin-top: -2px;
	text-indent: -1000px;
    overflow: hidden;
	float: left;
}
.theme--maoyan a {
    color: #ec454a;
}
.cf:after {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
	content: '';
}
</style>

