<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
div{
	// text-align: left
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
