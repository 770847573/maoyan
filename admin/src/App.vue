<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

*{
	margin: 0;
	padding: 0;
	
}
a{
	text-decoration: none
}
ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
    list-style: none;
}
.el-breadcrumb {
    margin-left: 24%
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

</style>
