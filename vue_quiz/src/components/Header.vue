<template>
    <div>
		<b-nav>
			<b-nav-item disabled> <b> fancy quiz</b> </b-nav-item>
			<b-nav-item disabled>Counter:{{numCorrect}} / {{numTotal}}</b-nav-item>			
		</b-nav>
		<hr>
	</div>
</template>

<script>
export default {
	props:[
		'numCorrect',
		'numTotal'
	],
	mounted(){
		console.log("in header file",this.numCorrect,this.numTotal);
	}
	}
</script>