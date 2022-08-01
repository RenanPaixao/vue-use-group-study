<template>
<!--	Copy from input  -->
	<div>
		<input v-model="inputRef" type="text">
		<button @click="copy(inputRef)">Copy</button>
	</div>
	
	<hr/>
<!--	Copy from Ref Directly  -->
	<div class="direct">
		<button @click="copyDirect(directRef)">Copy</button>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'

const inputRef = ref('')
const {text, copy} = useClipboard({source: inputRef})

watch(text, () => {
	//This will show the copied text from input after click on the first copy button
	console.log(text.value)
})

/** -------------------------------------------------- **/

const directRef = ref('Random text')
const { text: textDirect, copy: copyDirect, copied } = useClipboard({ source: directRef })

watch(copied, () => {
	//This will show the copied text from direct ref after click on the second copy button
	if(copied.value){
		console.log(textDirect.value)
	}
})

</script>

<style lang="scss" scoped>
hr{
	background-color: black;
	height: 2px;
}
div{
	padding: 1rem 0 1rem 1rem;
	background-color: bisque;
	button{
		font-size: 1rem;
		height: min-content;
		padding: 0.5rem 1rem;
		
		
	}
	input{
		border: 1px solid black;
		border-radius: 0.5rem;
		margin-right: 1rem;
		padding: 0.5rem 1rem;
	}
}


.direct {
	display: flex;
	align-items: center;
}
</style>