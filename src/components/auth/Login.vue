<style></style>
<template>
<div v-if="$loadingAsyncData">Loading...</div>
	<div class="col-sm-4 col-sm-offset-4">
		<h2>Log In</h2>
		
		<div v-if="!$loadingAsyncData">Loaded. Put your real content here.</div>

		<p>Log in to your account to get some great quotes.</p>
		<alert type="danger" v-if="error">
			<p>{{ error }}</p>
		</alert>
		<form  @submit.prevent="submit()" novalidate>
			<div class="form-group">
				<input 
				type="text" 
				class="form-control"
				placeholder="Enter your username"
				v-model="credentials.username"
				>
			</div>
			<div class="form-group">
				<input
				type="password"
				class="form-control"
				placeholder="Enter your password"
				v-model="credentials.password"
				>
			</div>
			<button class="btn btn-primary" button="">Access</button>
		</form>
	</div>
</template>
<script>
	import auth from '../../services/Auth'
	import {alert} from 'vue-strap'
	export default {
		data(){
			return {
				credentials: {
					username: '',
					password: ''
				},
				error: ''
			}
		},
		components:{
			alert
		},
		methods: {
			submit() {
				var credentials = {
					username: this.credentials.username,
					password: this.credentials.password
				}
				auth.login(this, credentials, 'home')
			}
		}

	}
</script>